import {Injectable} from "@angular/core";
import {Http, Response, Headers} from "@angular/http";
import {Observable} from "rxjs";

import {FlashMessageService} from "../../flash-message/flash-messages.service";
import {Email} from "./email.model";

@Injectable()
export class EmailService {
    private hostUrl: string;

    constructor(private http: Http,
                private flashMessageService: FlashMessageService) {

        const routeModule = require("../../app.routing");
        this.hostUrl = routeModule.hostUrl;
    }

    /**
     * Send email to server to reset password.
     * @param email - Email model
     * @returns {Observable<Response>} response contains user if success, other way error
     */
    sendEmailNewPassword(email: Email){
        return this.http.post(
            this.hostUrl.concat('server/resetpassword'), this.stringifyObject(email), {headers: this.getHeaders()})
            .map((response: Response) => {
                return response.json();
            })
            .catch((error: Response) => {
                if (error.status === 422){
                    this.flashMessageService.showMessage('Account with this e-mail address does not exist.', 'danger' );
                }
                return Observable.throw(error);
            });
    }

    /**
     * Return headers with set content-type
     * @returns {Headers} headers
     */
    getHeaders (){
        return new Headers({'Content-Type': 'application/json'});
    }

    /**
     * Stringify object
     * @param object
     * @returns {string} stringified object
     */
    stringifyObject(object){
        return JSON.stringify(object);
    }
}