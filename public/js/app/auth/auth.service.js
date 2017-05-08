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
    /**
     * Send request to server with new user to save
     *
     * @param user
     * @returns {Observable<Response>} response contains user if success, other way error
     */
    AuthService.prototype.signup = function (user) {
        var _this = this;
        return this.http.post(this.hostUrl.concat('server/user'), this.stringifyObject(user), { headers: this.getHeaders() })
            .map(function (response) { return response.json(); })
            .catch(function (error) {
            if (error.status === 422) {
                _this.flashMessageService.showMessage('Email address is already in use.', 'danger');
            }
            return Observable.throw(error);
        });
    };
    /**
     * Send request to server with user's login credentials to sign in.
     *
     * @param user
     * @returns {Observable<Response>} response contains user if success, other way error
     */
    AuthService.prototype.signin = function (user) {
        var _this = this;
        return this.http.post(this.hostUrl.concat('server/signin'), this.stringifyObject(user), { headers: this.getHeaders() })
            .map(function (response) { return response.json(); })
            .catch(function (error) {
            _this.flashMessageService.showMessage('Invalid login credentials.', 'danger');
            return Observable.throw(error);
        });
    };
    /**
     * Return headers with set content-type.
     *
     * @returns {Headers} headers
     */
    AuthService.prototype.getHeaders = function () {
        return new Headers({ 'Content-Type': 'application/json' });
    };
    /**
     * Stringify object.
     *
     * @param object
     * @returns {string} stringified object
     */
    AuthService.prototype.stringifyObject = function (object) {
        return JSON.stringify(object);
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
