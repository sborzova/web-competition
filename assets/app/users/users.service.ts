import { Injectable } from "@angular/core";
import {Http, Response, Headers} from "@angular/http";
import { Observable } from "rxjs";

import { User } from "./user.model";
import {FlashMessageService} from "../flash-message/flash-messages.service";

@Injectable()
export class UsersService {
    private hostUrl: string;
    private users: User[] = [];

    constructor(private http: Http,
                private flashMessageService: FlashMessageService) {

        const routeModule = require("../app.routing");
        this.hostUrl = routeModule.hostUrl;
    }

    getUsers(){
        return this.http.get(this.hostUrl.concat('server/users') + this.token)
            .map((response: Response) => {
                const users = response.json().obj;
                let transformedUsers: User[] = [];
                for (let user of users) {
                    transformedUsers.push(new User(
                        user.email,
                        user.firstName,
                        user.lastName,
                        user.password,
                        user.role,
                        user._id)
                    );
                }
                this.users = transformedUsers;
                return transformedUsers;
            })
            .catch((error: Response) => Observable.throw(error));
    }

    getUser(userId: string) {
        return this.http.get(this.hostUrl.concat('server/user/') + userId)
            .map((response: Response) => {
                let user = response.json().obj;
                return new User(
                    user.email,
                    user.firstName,
                    user.lastName,
                    user.password,
                    user.role,
                    user._id)
                ;
            })
            .catch((error: Response) => Observable.throw(error));
    }

    updateUser(user: User){
        const body = JSON.stringify(user);
        const headers = new Headers({'Content-Type': 'application/json'});
        return this.http.patch(this.hostUrl.concat('server/user/') + user.userId + this.token, body, {headers: headers})
            .map((response: Response) => {
                return response.json();
            })
            .catch((error: Response) => {
                if (error.status === 422){
                    this.flashMessageService.showMessage('Email address is already in use.', 'danger' );
                }
                return Observable.throw(error);
            });
    }

    updateUserPassword(user: User){
        const body = JSON.stringify(user);
        const headers = new Headers({'Content-Type': 'application/json'});
        return this.http.patch(this.hostUrl.concat('server/password/') + user.userId + this.token, body, {headers: headers})
            .map((response: Response) => {
                return response.json();
            })
            .catch((error: Response) => {
                return Observable.throw(error);
            });
    }

    updatePassword(user: User){
        const body = JSON.stringify(user);
        const headers = new Headers({'Content-Type': 'application/json'});
        return this.http.patch(this.hostUrl.concat('server/password/') + user.userId + this.token, body, {headers: headers})
            .map((response: Response) => {
                return response.json();
            })
            .catch((error: Response) => {
                return Observable.throw(error);
            })

    }

    deleteUser(user: User){
        this.users.splice(this.users.indexOf(user), 1);
        return this.http.delete(
            this.hostUrl.concat('server/user/') + user.userId + this.token)
            .map((response: Response) => {
                return response.json();
            })
            .catch((error: Response) => {
                return Observable.throw(error);
            });
    }

    get token(){
        return sessionStorage.getItem('token')
            ? '?token=' + sessionStorage.getItem('token')
            : '';
    }
}