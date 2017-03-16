import { Injectable } from "@angular/core";
import { Http, Headers } from "@angular/http";
import 'rxjs/Rx';
import { Observable } from "rxjs";
import { FlashMessageService } from "../flash-message/flash-messages.service";
export var UserService = (function () {
    function UserService(http, flashMessageService) {
        this.http = http;
        this.flashMessageService = flashMessageService;
        var routeModule = require("../app.routing");
        this.hostUrl = routeModule.hostUrl;
    }
    UserService.prototype.getUser = function () {
        var token = sessionStorage.getItem('token')
            ? '?token=' + sessionStorage.getItem('token')
            : '';
        return this.http.get(this.hostUrl.concat('user') + token)
            .map(function (response) {
            return response.json().obj;
        })
            .catch(function (error) { return Observable.throw(error); });
    };
    UserService.prototype.updateUser = function (user) {
        var _this = this;
        var body = JSON.stringify(user);
        var token = sessionStorage.getItem('token')
            ? '?token=' + sessionStorage.getItem('token')
            : '';
        var headers = new Headers({ 'Content-Type': 'application/json' });
        return this.http.patch(this.hostUrl.concat('user') + token, body, { headers: headers })
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
    UserService.prototype.updatePassword = function (user) {
        var _this = this;
        var body = JSON.stringify(user);
        var token = sessionStorage.getItem('token')
            ? '?token=' + sessionStorage.getItem('token')
            : '';
        var headers = new Headers({ 'Content-Type': 'application/json' });
        return this.http.patch(this.hostUrl.concat('password') + token, body, { headers: headers })
            .map(function (response) {
            return response.json();
        })
            .catch(function (error) {
            if (error.status === 412) {
                _this.flashMessageService.showMessage('Current password is incorrect.', 'alert-danger');
            }
            return Observable.throw(error);
        });
    };
    UserService.decorators = [
        { type: Injectable },
    ];
    /** @nocollapse */
    UserService.ctorParameters = [
        { type: Http, },
        { type: FlashMessageService, },
    ];
    return UserService;
}());
