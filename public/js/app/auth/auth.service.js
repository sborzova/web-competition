import { Injectable } from "@angular/core";
import { Http, Headers } from "@angular/http";
import 'rxjs/Rx';
import { Observable } from "rxjs";
import { FlashMessageService } from "../flash-message/flash-messages.service";
export var AuthService = (function () {
    function AuthService(http, flashMessageService) {
        this.http = http;
        this.flashMessageService = flashMessageService;
        var routeModule = require("../app.routing");
        this.hostUrl = routeModule.hostUrl;
    }
    AuthService.prototype.signup = function (user) {
        var _this = this;
        var body = JSON.stringify(user);
        var headers = new Headers({ 'Content-Type': 'application/json' });
        return this.http.post(this.hostUrl, body, { headers: headers })
            .map(function (response) { return response.json(); })
            .catch(function (error) {
            if (error.status === 422) {
                _this.flashMessageService.showMessage('Email address is already in use.', 'alert-danger');
            }
            return Observable.throw(error);
        });
    };
    AuthService.prototype.signin = function (user) {
        var _this = this;
        var body = JSON.stringify(user);
        var headers = new Headers({ 'Content-Type': 'application/json' });
        return this.http.post(this.hostUrl.concat('signin'), body, { headers: headers })
            .map(function (response) { return response.json(); })
            .catch(function (error) {
            _this.flashMessageService.showMessage('Invalid login credentials.', 'alert-danger');
            return Observable.throw(error);
        });
    };
    AuthService.prototype.logout = function () {
        sessionStorage.clear();
    };
    AuthService.prototype.isLoggedIn = function () {
        return sessionStorage.getItem('token') !== null;
    };
    AuthService.prototype.isAdmin = function () {
        return sessionStorage.getItem('isAdmin') !== null;
    };
    AuthService.prototype.getEmailLoggedIn = function () {
        return sessionStorage.getItem('email');
    };
    AuthService.prototype.setSessionStorage = function (data) {
        sessionStorage.setItem('token', data.token);
        sessionStorage.setItem('userId', data.userId);
        sessionStorage.setItem('email', data.email);
        if (data.isAdmin === 'true') {
            sessionStorage.setItem('isAdmin', 'true');
        }
    };
    AuthService.decorators = [
        { type: Injectable },
    ];
    /** @nocollapse */
    AuthService.ctorParameters = [
        { type: Http, },
        { type: FlashMessageService, },
    ];
    return AuthService;
}());
