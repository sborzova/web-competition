import { Injectable } from "@angular/core";
import { Http, Headers, Response } from "@angular/http";
import 'rxjs/Rx';
import { Observable } from "rxjs";

import { User } from "./user.model";
import { FlashMessageService } from "../flash-message/flash-messages.service";

@Injectable()
export class AuthService{
    private hostUrl: string;

    constructor(private http: Http,
                private flashMessageService: FlashMessageService) {

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
                    this.flashMessageService.showMessage('Email address is already in use.', 'alert-danger' );
                }
                    return Observable.throw(error.json())

            });
    }

    signin(user: User) {
        const body = JSON.stringify(user);
        const headers = new Headers({'Content-Type': 'application/json'});
        return this.http.post(this.hostUrl.concat('signin'), body, {headers: headers})
            .map((response: Response) => response.json())
            .catch((error: Response) => {
                this.flashMessageService.showMessage('Invalid login credentials.', 'alert-danger' );
                return Observable.throw(error.json())
            });
    }

    getUser() {
        const token = sessionStorage.getItem('token')
            ? '?token=' + sessionStorage.getItem('token')
            : '';
        return this.http.get(this.hostUrl.concat('user') + token)
            .map((response: Response) => {
                return response.json().obj;
            })
            .catch((error: Response) => Observable.throw(error.json()));
    }

    updateUser(user: User){
        const body = JSON.stringify(user);
        const token = sessionStorage.getItem('token')
            ? '?token=' + sessionStorage.getItem('token')
            : '';
        const headers = new Headers({'Content-Type': 'application/json'});
        return this.http.patch(this.hostUrl.concat('user') + token, body, {headers: headers})
            .map((response: Response) => {
                return response.json();
            })
            .catch((error: Response) => Observable.throw(error.json()));
    }

    updatePassword(user: User){
        const body = JSON.stringify(user);
        const token = sessionStorage.getItem('token')
            ? '?token=' + sessionStorage.getItem('token')
            : '';
        const headers = new Headers({'Content-Type': 'application/json'});
        return this.http.patch(this.hostUrl.concat('password') + token, body, {headers: headers})
            .map((response: Response) => {
                return response.json();
            })
            .catch((error: Response) => {
                if (error.status === 412){
                    this.flashMessageService.showMessage('Current password is incorrect.', 'alert-danger' );
                }
                return Observable.throw(error.json())
            })

    }

    logout() {
        sessionStorage.clear();
    }

    isLoggedIn() {
        return sessionStorage.getItem('token') !== null;
    }

    isAdmin(){
        return sessionStorage.getItem('isAdmin') !== null;
    }

    getEmailLoggedIn(){
        return sessionStorage.getItem('email');
    }

}