import { Injectable } from "@angular/core";
import { Http, Response } from "@angular/http";
import { Observable } from "rxjs";
import { User } from "./user.model";

@Injectable()
export class UsersManagementService {
    private users: User[] = [];
    private hostUrl: string;

    constructor(private http: Http) {
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
                        user.lastName,)
                    );
                }
                this.users = transformedUsers;
                return transformedUsers;
            })
            .catch((error: Response) => Observable.throw(error.json()));
    }
}