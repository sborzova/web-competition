import { Injectable } from "@angular/core";
import { Http } from "@angular/http";
import { FlashMessageService } from "../flash-message/flash-messages.service";
import { Observable } from "rxjs";
export var EmailService = (function () {
    function EmailService(http, flashMessageService) {
        this.http = http;
        this.flashMessageService = flashMessageService;
        var routeModule = require("../app.routing");
        this.hostUrl = routeModule.hostUrl;
    }
    EmailService.prototype.sendEmailNewPassword = function (email) {
        var _this = this;
        return this.http.post(this.hostUrl.concat('server/emailpassword/') + email, '')
            .map(function (response) {
            return response.json();
        })
            .catch(function (error) {
            if (error.status === 422) {
                _this.flashMessageService.showMessage('Account with this e-mail address does not exist.', 'danger');
            }
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
