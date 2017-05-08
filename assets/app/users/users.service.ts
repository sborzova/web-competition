import {Injectable} from "@angular/core";
import {Http, Response, Headers} from "@angular/http";
import {Observable} from "rxjs";

import {User} from "./user.model";
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

    /**
     * Send request to server to get all users.
     *
     * @returns {Observable<Response>} response contains users if success, other way error
     */
    getUsers(){
        return this.http.get(this.hostUrl.concat('server/users') + this.getToken())
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

    /**
     * Send request to server to get user by id.
     *
     * @param userId
     * @returns {Observable<Response>} response contains user if success, other way error
     */
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

    /**
     * Send request to server to update user.
     *
     * @param user
     * @returns {Observable<Response>} response contains user if success, other way error
     */
    updateUser(user: User){
        return this.http.patch(
            this.hostUrl.concat('server/user/') + user.userId + this.getToken(), this.stringifyObject(user), {headers: this.getHeaders()})
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

    /**
     * Send request to server to update user's password.
     *
     * @param user
     * @returns {Observable<Response>} response contains user if success, other way error
     */
    updateUserPassword(user: User){
        return this.http.patch(
            this.hostUrl.concat('server/password/') + user.userId + this.getToken(), this.stringifyObject(user), {headers: this.getHeaders()})
            .map((response: Response) => {
                return response.json();
            })
            .catch((error: Response) => {
                return Observable.throw(error);
            });
    }

    /**
     * Send request to server to delete user by id.
     *
     * @param user
     * @returns {Observable<Response>} response contains user if success, other way error
     */
    deleteUser(user: User){
        this.users.splice(this.users.indexOf(user), 1);
        return this.http.delete(
            this.hostUrl.concat('server/user/') + user.userId + this.getToken())
            .map((response: Response) => {
                return response.json();
            })
            .catch((error: Response) => {
                return Observable.throw(error);
            });
    }

    /**
     * Get token from session storage.
     *
     * @returns {string} token
     */
    getToken(){
        return sessionStorage.getItem('token')
            ? '?token=' + sessionStorage.getItem('token')
            : '';
    }

    /**
     * Return headers with set content-type.
     *
     * @returns {Headers} headers
     */
    getHeaders (){
        return new Headers({'Content-Type': 'application/json'});
    }

    /**
     * Stringify object.
     *
     * @param object
     * @returns {string} stringified object
     */
    stringifyObject(object){
        return JSON.stringify(object);
    }
}