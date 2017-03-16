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
    UsersService.prototype.getUsers = function () {
        var _this = this;
        return this.http.get(this.hostUrl.concat('users'))
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
    UsersService.prototype.getUser = function (userId) {
        return this.http.get(this.hostUrl.concat('user/') + userId)
            .map(function (response) {
            var user = response.json().obj;
            return new User(user.email, user.firstName, user.lastName, user.password, user.role, user._id);
        })
            .catch(function (error) { return Observable.throw(error); });
    };
    UsersService.prototype.updateUser = function (user) {
        var _this = this;
        var body = JSON.stringify(user);
        var headers = new Headers({ 'Content-Type': 'application/json' });
        return this.http.patch(this.hostUrl.concat('user/') + user.userId, body, { headers: headers })
            .map(function (response) {
            return response.json();
        })
            .catch(function (error) {
            if (error.status === 422) {
                _this.flashMessageService.showMessage('Email address is already in use.', 'alert-danger');
            }
            return Observable.throw(error);
        });
    };
    UsersService.prototype.updateUserPassword = function (user) {
        var body = JSON.stringify(user);
        var headers = new Headers({ 'Content-Type': 'application/json' });
        return this.http.patch(this.hostUrl.concat('password/') + user.userId, body, { headers: headers })
            .map(function (response) {
            return response.json();
        })
            .catch(function (error) {
            return Observable.throw(error);
        });
    };
    UsersService.prototype.updatePassword = function (user) {
        var body = JSON.stringify(user);
        var headers = new Headers({ 'Content-Type': 'application/json' });
        return this.http.patch(this.hostUrl.concat('password/') + user.userId, body, { headers: headers })
            .map(function (response) {
            return response.json();
        })
            .catch(function (error) {
            return Observable.throw(error);
        });
    };
    UsersService.prototype.deleteUser = function (user) {
        this.users.splice(this.users.indexOf(user), 1);
        return this.http.delete(this.hostUrl.concat('user/') + user.userId)
            .map(function (response) {
            return response.json();
        })
            .catch(function (error) {
            return Observable.throw(error);
        });
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
