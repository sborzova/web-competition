import { Injectable } from "@angular/core";
import { Http, Headers } from "@angular/http";
import { Observable } from "rxjs";
import { FlashMessageService } from "../../flash-message/flash-messages.service";
/**
 * Service for sending email.
 */
export var EmailService = (function () {
    /**
     * When creating service, inject dependencies and set url for communication with database.
     *
     * @param http
     * @param flashMessageService
     */
    function EmailService(http, flashMessageService) {
        this.http = http;
        this.flashMessageService = flashMessageService;
        var routeModule = require("../../app.routing");
        this.hostUrl = routeModule.hostUrl;
    }
    /**
     * Send request to server to send email with new password.
     *
     * @param email - Email model
     * @returns {Observable<Response>} response contains user if success, other way error
     */
    EmailService.prototype.sendEmailNewPassword = function (email) {
        var _this = this;
        return this.http.post(this.hostUrl.concat('server/resetpassword'), this.stringifyObject(email), { headers: this.getHeaders() })
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
    /**
     * Return headers with set content-type to application/json
     * @returns {Headers} headers
     */
    EmailService.prototype.getHeaders = function () {
        return new Headers({ 'Content-Type': 'application/json' });
    };
    /**
     * Stringify JSON object
     * @param object
     * @returns {string} stringified object
     */
    EmailService.prototype.stringifyObject = function (object) {
        return JSON.stringify(object);
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
