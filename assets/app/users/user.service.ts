import { Injectable } from "@angular/core";
import { Http, Response } from "@angular/http";
import { Observable } from "rxjs";
import { User } from "./user.model";
import { SuccessService } from "../messages/successes/success.service";

@Injectable()
export class UsersService {
    private hostUrl: string;
    private users: User[] = [];

    constructor(private http: Http,
                private successService: SuccessService) {

        const routeModule = require("../app.routing");
        this.hostUrl = routeModule.hostUrl;
    }

    getUsers(){
        return this.http.get(this.hostUrl.concat('users'))
            .map((response: Response) => {
                const users = response.json().obj;
                let transformedUsers: User[] = [];
                for (let user of users) {
                    transformedUsers.push(new User(
                        user.email,
                        user.firstName,
                        user.lastName,
                        user._id)
                    );
                }
                this.users = transformedUsers;
                return transformedUsers;
            })
            .catch((error: Response) => Observable.throw(error.json()));
    }

    deleteUser(user: User){
        this.users.splice(this.users.indexOf(user), 1);
        const token = localStorage.getItem('token')
            ? '?token=' + localStorage.getItem('token')
            : '';
        return this.http.delete(
            this.hostUrl.concat('user/') + user.userId + token)
            .map((response: Response) => {
                this.successService.handleSuccess(response.json());
                return response.json();
            })
            .catch((error: Response) => {
                //this.errorService.handleError(error.json());
                return Observable.throw(error.json());
            });
    }
}