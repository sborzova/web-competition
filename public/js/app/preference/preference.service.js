import { Injectable } from "@angular/core";
import { Http, Headers } from "@angular/http";
import { Observable } from "rxjs";
import { Preference } from "./preference.model";
/**
 * Service for preference to communicate with database.
 */
export var PreferenceService = (function () {
    /**
     * When creating service, inject dependency and set url for communication with database.
     *
     * @param http
     */
    function PreferenceService(http) {
        this.http = http;
        var routeModule = require("../app.routing");
        this.hostUrl = routeModule.hostUrl;
    }
    /**
     * Send request to server to get preference state of competition
     *
     * @returns {Observable<Response>} response contains state of competition if success, other way error
     */
    PreferenceService.prototype.getValueCompetitionIsOn = function () {
        return this.http.get(this.hostUrl.concat('server/preference'))
            .map(function (response) {
            return response.json().obj.state;
        })
            .catch(function (error) { return Observable.throw(error); });
    };
    /**
     * Send request to server to update preference state of competition.
     *
     * @param state
     * @returns {Observable<Response>} response with preference if success, other way error
     */
    PreferenceService.prototype.updateValueCompetitionIsOn = function (state) {
        var body = JSON.stringify(new Preference(state));
        var headers = new Headers({ 'Content-Type': 'application/json' });
        var token = sessionStorage.getItem('token')
            ? '?token=' + sessionStorage.getItem('token')
            : '';
        return this.http.patch(this.hostUrl.concat('server/admin/preferenceUpdate') + token, body, { headers: headers })
            .map(function (response) {
            return response.json();
        })
            .catch(function (error) {
            return Observable.throw(error);
        });
    };
    PreferenceService.decorators = [
        { type: Injectable },
    ];
    /** @nocollapse */
    PreferenceService.ctorParameters = [
        { type: Http, },
    ];
    return PreferenceService;
}());
