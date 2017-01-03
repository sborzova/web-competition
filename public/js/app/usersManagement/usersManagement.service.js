import { Injectable } from "@angular/core";
import { Http } from "@angular/http";
import { Observable } from "rxjs";
import { User } from "./user.model";
export var UsersManagementService = (function () {
    function UsersManagementService(http) {
        this.http = http;
        this.users = [];
    }
    UsersManagementService.prototype.getUsers = function () {
        var _this = this;
        return this.http.get('https://bakalar.herokuapp.com/users')
            .map(function (response) {
            var users = response.json().obj;
            var transformedUsers = [];
            for (var _i = 0, users_1 = users; _i < users_1.length; _i++) {
                var user = users_1[_i];
                transformedUsers.push(new User(user.email, user.firstName, user.lastName));
            }
            _this.users = transformedUsers;
            return transformedUsers;
        })
            .catch(function (error) { return Observable.throw(error.json()); });
    };
    UsersManagementService.decorators = [
        { type: Injectable },
    ];
    /** @nocollapse */
    UsersManagementService.ctorParameters = [
        { type: Http, },
    ];
    return UsersManagementService;
}());
