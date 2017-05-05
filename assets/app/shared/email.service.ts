import {Injectable} from "@angular/core";
import {Http, Response } from "@angular/http";
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
        return this.http.post(this.hostUrl.concat('server/emailpassword/') + email,'')
            .map((response: Response) => {
                return response.json();
            })
            .catch((error: Response) => {
                return Observable.throw(error);
            });
    }

}