import { Injectable } from "@angular/core";
import { Http, Headers } from "@angular/http";
import 'rxjs/Rx';
import { Observable } from "rxjs";
import { FlashMessageService } from "../flash-message/flash-messages.service";
/**
 * Service for user to communicate with database.
 */
export var ProfileService = (function () {
    /**
     * When creating service, inject dependencies and set url for communication with database.
     *
     * @param http
     * @param flashMessageService
     */
    function ProfileService(http, flashMessageService) {
        this.http = http;
        this.flashMessageService = flashMessageService;
        var routeModule = require("../app.routing");
        this.hostUrl = routeModule.hostUrl;
    }
    /**
     * Send request to server to get logged in user.
     *
     * @returns {Observable<Response>} response contains logged in user if success, other way error
     */
    ProfileService.prototype.getLoggedInUser = function () {
        return this.http.get(this.hostUrl.concat('server/user') + this.getToken())
            .map(function (response) {
            return response.json().obj;
        })
            .catch(function (error) { return Observable.throw(error); });
    };
    /**
     * Send request to server to update logged in user.
     *
     * @param user - updated user
     * @returns {Observable<Response>} response contains user if success, other way error
     */
    ProfileService.prototype.updateLoggedInUser = function (user) {
        var _this = this;
        return this.http.patch(this.hostUrl.concat('server/user') + this.getToken(), this.stringifyObject(user), { headers: this.getHeaders() })
            .map(function (response) {
            return response.json();
        })
            .catch(function (error) {
            if (error.json().error.name == 'ValidationError') {
                _this.flashMessageService.showMessage('Email address is already in use.', 'danger');
            }
            return Observable.throw(error);
        });
    };
    /**
     * Send request to server to update logged in user's password.
     *
     * @param user - updated user
     * @returns {Observable<Response>} response contains user if success, other way error
     */
    ProfileService.prototype.updatePassword = function (user) {
        var _this = this;
        return this.http.patch(this.hostUrl.concat('server/password') + this.getToken(), this.stringifyObject(user), { headers: this.getHeaders() })
            .map(function (response) {
            return response.json();
        })
            .catch(function (error) {
            if (error.status === 412) {
                _this.flashMessageService.showMessage('Current password is incorrect.', 'danger');
            }
            return Observable.throw(error);
        });
    };
    /**
     * Get token from session storage
     * @returns {string} token
     */
    ProfileService.prototype.getToken = function () {
        return sessionStorage.getItem('token')
            ? '?token=' + sessionStorage.getItem('token')
            : '';
    };
    /**
     * Return headers with set content-type to apllication/json
     * @returns {Headers} headers
     */
    ProfileService.prototype.getHeaders = function () {
        return new Headers({ 'Content-Type': 'application/json' });
    };
    /**
     * Stringify JSON object
     * @param object
     * @returns {string} stringified object
     */
    ProfileService.prototype.stringifyObject = function (object) {
        return JSON.stringify(object);
    };
    ProfileService.decorators = [
        { type: Injectable },
    ];
    /** @nocollapse */
    ProfileService.ctorParameters = [
        { type: Http, },
        { type: FlashMessageService, },
    ];
    return ProfileService;
}());
