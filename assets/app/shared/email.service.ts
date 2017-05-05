import {Injectable} from "@angular/core";
import { Http, Response, Headers } from "@angular/http";
import {FlashMessageService} from "../flash-message/flash-messages.service";
import {Observable} from "rxjs";

@Injectable()
export class EmailService {
    private hostUrl: string;

    constructor(private http: Http,
                private flashMessageService: FlashMessageService) {

        const routeModule = require("../app.routing");
        this.hostUrl = routeModule.hostUrl;
    }

    sendEmailNewPassword(email: string){
        const body = JSON.stringify(email);
        const headers = new Headers({'Content-Type': 'application/json'});
        return this.http.post(this.hostUrl.concat('server/resetpassword'), body, {headers: headers})
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

}