import { Injectable } from "@angular/core";
import { Http, Headers, Response } from "@angular/http";
import 'rxjs/Rx';
import { Observable } from "rxjs";

import { User } from "./user.model";
import { FlashMessageService } from "../flash-message/flash-messages.service";
import {PreferenceService} from "../preference/preference.service";

@Injectable()
export class AuthService{
    private hostUrl: string;

    constructor(private http: Http,
                private flashMessageService: FlashMessageService,
                private preferenceService: PreferenceService) {

        const routeModule = require("../app.routing");
        this.hostUrl = routeModule.hostUrl;
    }

    signup(user: User) {
        const body = JSON.stringify(user);
        const headers = new Headers({'Content-Type': 'application/json'});
        return this.http.post(this.hostUrl, body, {headers: headers})
            .map((response: Response) => response.json())
            .catch((error: Response) => {
                if (error.status === 422){
                    this.flashMessageService.showMessage('Email address is already in use.', 'danger' );
                }
                return Observable.throw(error);

            });
    }

    signin(user: User) {
        const body = JSON.stringify(user);
        const headers = new Headers({'Content-Type': 'application/json'});
        return this.http.post(this.hostUrl.concat('server/signin'), body, {headers: headers})
            .map((response: Response) => response.json())
            .catch((error: Response) => {
                this.flashMessageService.showMessage('Invalid login credentials.', 'danger' );
                return Observable.throw(error);
            });
    }
}