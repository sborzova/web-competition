import { Injectable } from "@angular/core";
import { Http, Headers } from "@angular/http";
import { Observable } from "rxjs";
import { User } from "./user.model";
import { FlashMessageService } from "../flash-message/flash-messages.service";
export var UsersService = (function () {
    function UsersService(http, flashMessageService) {
        this.http = http;
        this.flashMessageService = flashMessageService;
        this.users = [];
        var routeModule = require("../app.routing");
        this.hostUrl = routeModule.hostUrl;
    }
    /**
     * Send request to server to get all users.
     *
     * @returns {Observable<Response>} response contains users if success, other way error
     */
    UsersService.prototype.getUsers = function () {
        var _this = this;
        return this.http.get(this.hostUrl.concat('server/admin/users') + this.getToken())
            .map(function (response) {
            var users = response.json().obj;
            var transformedUsers = [];
            for (var _i = 0, users_1 = users; _i < users_1.length; _i++) {
                var user = users_1[_i];
                transformedUsers.push(new User(user.email, user.firstName, user.lastName, user.password, user.role, user._id));
            }
            _this.users = transformedUsers;
            return transformedUsers;
        })
            .catch(function (error) { return Observable.throw(error); });
    };
    /**
     * Send request to server to get user by id.
     *
     * @param userId
     * @returns {Observable<Response>} response contains user if success, other way error
     */
    UsersService.prototype.getUser = function (userId) {
        return this.http.get(this.hostUrl.concat('server/admin/user/') + userId)
            .map(function (response) {
            var user = response.json().obj;
            return new User(user.email, user.firstName, user.lastName, user.password, user.role, user._id);
        })
            .catch(function (error) { return Observable.throw(error); });
    };
    /**
     * Send request to server to update user.
     *
     * @param user
     * @returns {Observable<Response>} response contains user if success, other way error
     */
    UsersService.prototype.updateUser = function (user) {
        var _this = this;
        return this.http.patch(this.hostUrl.concat('server/admin/user/') + user.userId + this.getToken(), this.stringifyObject(user), { headers: this.getHeaders() })
            .map(function (response) {
            return response.json();
        })
            .catch(function (error) {
            if (error.status === 422) {
                _this.flashMessageService.showMessage('Email address is already in use.', 'danger');
            }
            return Observable.throw(error);
        });
    };
    /**
     * Send request to server to update user's password.
     *
     * @param user
     * @returns {Observable<Response>} response contains user if success, other way error
     */
    UsersService.prototype.updateUserPassword = function (user) {
        return this.http.patch(this.hostUrl.concat('server/admin/password/') + user.userId + this.getToken(), this.stringifyObject(user), { headers: this.getHeaders() })
            .map(function (response) {
            return response.json();
        })
            .catch(function (error) {
            return Observable.throw(error);
        });
    };
    /**
     * Send request to server to delete user by id.
     *
     * @param user
     * @returns {Observable<Response>} response contains user if success, other way error
     */
    UsersService.prototype.deleteUser = function (user) {
        this.users.splice(this.users.indexOf(user), 1);
        return this.http.delete(this.hostUrl.concat('server/admin/user/') + user.userId + this.getToken())
            .map(function (response) {
            return response.json();
        })
            .catch(function (error) {
            return Observable.throw(error);
        });
    };
    /**
     * Get token from session storage.
     *
     * @returns {string} token
     */
    UsersService.prototype.getToken = function () {
        return sessionStorage.getItem('token')
            ? '?token=' + sessionStorage.getItem('token')
            : '';
    };
    /**
     * Return headers with set content-type.
     *
     * @returns {Headers} headers
     */
    UsersService.prototype.getHeaders = function () {
        return new Headers({ 'Content-Type': 'application/json' });
    };
    /**
     * Stringify object.
     *
     * @param object
     * @returns {string} stringified object
     */
    UsersService.prototype.stringifyObject = function (object) {
        return JSON.stringify(object);
    };
    UsersService.decorators = [
        { type: Injectable },
    ];
    /** @nocollapse */
    UsersService.ctorParameters = [
        { type: Http, },
        { type: FlashMessageService, },
    ];
    return UsersService;
}());
