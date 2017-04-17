import { Injectable } from "@angular/core";
import { Http, Headers } from "@angular/http";
import { FlashMessageService } from "../flash-message/flash-messages.service";
import { Observable } from "rxjs";
export var EmailService = (function () {
    function EmailService(http, flashMessageService) {
        this.http = http;
        this.flashMessageService = flashMessageService;
        var routeModule = require("../app.routing");
        this.hostUrl = routeModule.hostUrl;
    }
    EmailService.prototype.sendEmail = function (email) {
        var body = JSON.stringify(email);
        var headers = new Headers({ 'Content-Type': 'application/json' });
        return this.http.post(this.hostUrl.concat('email'), body, { headers: headers })
            .map(function (response) {
            return response.json();
        })
            .catch(function (error) {
            return Observable.throw(error);
        });
    };
    EmailService.prototype.sendEmailNewPassword = function (email) {
        return this.http.post(this.hostUrl.concat('emailpassword/') + email, '')
            .map(function (response) {
            return response.json();
        })
            .catch(function (error) {
            return Observable.throw(error);
        });
    };
    EmailService.decorators = [
        { type: Injectable },
    ];
    /** @nocollapse */
    EmailService.ctorParameters = [
        { type: Http, },
        { type: FlashMessageService, },
    ];
    return EmailService;
}());
