import {Injectable} from "@angular/core";
import {Http, Headers, Response} from "@angular/http";
import 'rxjs/Rx';
import {Observable} from "rxjs";

import {FlashMessageService} from "../flash-message/flash-messages.service";
import {ProfileUser} from "./profile.model";

/**
 * Service for user to communicate with database.
 */
@Injectable()
export class ProfileService{
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
     * Send request to server to get logged in user.
     *
     * @returns {Observable<Response>} response contains logged in user if success, other way error
     */
    getLoggedInUser() {
        return this.http.get(
            this.hostUrl.concat('server/user') + this.getToken())
            .map((response: Response) => {
                return response.json().obj;
            })
            .catch((error: Response) => Observable.throw(error));
    }

    /**
     * Send request to server to update logged in user.
     *
     * @param user - updated user
     * @returns {Observable<Response>} response contains user if success, other way error
     */
    updateLoggedInUser(user: ProfileUser){
        return this.http.patch(
            this.hostUrl.concat('server/user') + this.getToken(), this.stringifyObject(user), {headers: this.getHeaders()})
            .map((response: Response) => {
                return response.json();
            })
            .catch((error: Response) => {
                if (error.json().error.name == 'ValidationError'){
                    this.flashMessageService.showMessage('Email address is already in use.', 'danger' );
                }
                return Observable.throw(error);

            });
    }

    /**
     * Send request to server to update logged in user's password.
     *
     * @param user - updated user
     * @returns {Observable<Response>} response contains user if success, other way error
     */
    updatePassword(user: ProfileUser){
        return this.http.patch(
            this.hostUrl.concat('server/password') + this.getToken(), this.stringifyObject(user), {headers: this.getHeaders()})
            .map((response: Response) => {
                return response.json();
            })
            .catch((error: Response) => {
                if (error.status === 412){
                    this.flashMessageService.showMessage('Current password is incorrect.', 'danger' );
                }
                return Observable.throw(error);
            })

    }

    /**
     * Get token from session storage
     * @returns {string} token
     */
    getToken(){
        return sessionStorage.getItem('token')
            ? '?token=' + sessionStorage.getItem('token')
            : '';
    }

    /**
     * Return headers with set content-type to apllication/json
     * @returns {Headers} headers
     */
    getHeaders (){
        return new Headers({'Content-Type': 'application/json'});
    }

    /**
     * Stringify JSON object
     * @param object
     * @returns {string} stringified object
     */
    stringifyObject(object){
        return JSON.stringify(object);
    }
}