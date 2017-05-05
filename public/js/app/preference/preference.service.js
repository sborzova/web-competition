import { Injectable } from "@angular/core";
import { Http, Headers } from "@angular/http";
import { Observable } from "rxjs";
import { Preference } from "./preference.model";
export var PreferenceService = (function () {
    function PreferenceService(http) {
        this.http = http;
        var routeModule = require("../app.routing");
        this.hostUrl = routeModule.hostUrl;
    }
    PreferenceService.prototype.getValueCompetitionIsOn = function () {
        return this.http.get(this.hostUrl.concat('server/preference'))
            .map(function (response) {
            return response.json().obj.state;
        })
            .catch(function (error) { return Observable.throw(error); });
    };
    PreferenceService.prototype.updateValueCompetitionIsOn = function (state) {
        var body = JSON.stringify(new Preference(state));
        var headers = new Headers({ 'Content-Type': 'application/json' });
        return this.http.patch(this.hostUrl.concat('server/preference'), body, { headers: headers })
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
