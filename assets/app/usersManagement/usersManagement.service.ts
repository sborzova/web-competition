import { Injectable } from "@angular/core";
import { Http, Response } from "@angular/http";
import { Observable } from "rxjs";
import {User} from "./user.model";

@Injectable()
export class UsersManagementService {
    private users: User[] = [];

    constructor(private http: Http) {
    }

    getUsers(){
        return this.http.get('https://bakalar.herokuapp.com/users')
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