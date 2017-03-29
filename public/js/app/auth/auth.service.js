import { Injectable } from "@angular/core";
import { Http, Headers } from "@angular/http";
import 'rxjs/Rx';
import { Observable } from "rxjs";
import { FlashMessageService } from "../flash-message/flash-messages.service";
import { PreferenceService } from "../preference/preference.service";
export var AuthService = (function () {
    function AuthService(http, flashMessageService, preferenceService) {
        this.http = http;
        this.flashMessageService = flashMessageService;
        this.preferenceService = preferenceService;
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
                _this.flashMessageService.showMessage('Email address is already in use.', 'danger');
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
            _this.flashMessageService.showMessage('Invalid login credentials.', 'danger');
            return Observable.throw(error);
        });
    };
    AuthService.decorators = [
        { type: Injectable },
    ];
    /** @nocollapse */
    AuthService.ctorParameters = [
        { type: Http, },
        { type: FlashMessageService, },
        { type: PreferenceService, },
    ];
    return AuthService;
}());
