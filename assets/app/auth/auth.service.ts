import {Injectable} from "@angular/core";
import {Http, Headers, Response} from "@angular/http";
import 'rxjs/Rx';
import {Observable} from "rxjs";

import {FlashMessageService} from "../flash-message/flash-messages.service";
import {SigninUser} from "./signin/signin.model";
import {SignupUser} from "./signup/signup.model";

/**
 * Service for managing authentication.
 */
@Injectable()
export class AuthService{
    private hostUrl: string;

    /**
     * When creating service, inject dependencies and set url for communication with database.
     *
     * @param http
     * @param flashMessageService
     */
    constructor(private http: Http,
                private flashMessageService: FlashMessageService) {

        const routeModule = require("../app.routing");
        this.hostUrl = routeModule.hostUrl;
    }

    /**
     * Send request to server with new user to save.
     *
     * @param user
     * @returns {Observable<Response>} response contains user if success, other way error
     */
    signup(user: SignupUser) {
        return this.http.post(this.hostUrl.concat('server/user'), this.stringifyObject(user), {headers: this.getHeaders()})
            .map((response: Response) => response.json())
            .catch((error: Response) => {
                if (error.json().error.name == 'ValidationError'){
                    this.flashMessageService.showMessage('Email address is already in use.', 'danger' );
                }
                return Observable.throw(error);

            });
    }

    /**
     * Send request to server with user's login credentials to sign in.
     *
     * @param user
     * @returns {Observable<Response>} response contains user if success, other way error
     */
    signin(user: SigninUser) {
        return this.http.post(
            this.hostUrl.concat('server/signin'), this.stringifyObject(user), {headers: this.getHeaders()})
            .map((response: Response) => response.json())
            .catch((error: Response) => {
                this.flashMessageService.showMessage('Invalid login credentials.', 'danger' );
                return Observable.throw(error);
            });
    }

    /**
     * Return headers with set content-type to application/json.
     *
     * @returns {Headers} headers
     */
    getHeaders (){
        return new Headers({'Content-Type': 'application/json'});
    }

    /**
     * Stringify JSON object.
     *
     * @param object
     * @returns {string} stringified object
     */
    stringifyObject(object){
        return JSON.stringify(object);
    }
}