import { Injectable } from "@angular/core";
import { PreferenceService } from "../preference/preference.service";
export var SessionStorageService = (function () {
    function SessionStorageService(preferenceService) {
        this.preferenceService = preferenceService;
    }
    SessionStorageService.prototype.logout = function () {
        sessionStorage.removeItem('token');
        sessionStorage.removeItem('userId');
        sessionStorage.removeItem('email');
        sessionStorage.removeItem('isAdmin');
    };
    SessionStorageService.prototype.isLoggedIn = function () {
        return sessionStorage.getItem('token') !== null;
    };
    SessionStorageService.prototype.isAdmin = function () {
        return sessionStorage.getItem('isAdmin') !== null;
    };
    SessionStorageService.prototype.getEmailLoggedIn = function () {
        return sessionStorage.getItem('email');
    };
    SessionStorageService.prototype.getCompetitionIsOn = function () {
        return sessionStorage.getItem('competitionIsOn') == 'true';
    };
    SessionStorageService.prototype.setSessionStorageAuth = function (data) {
        sessionStorage.setItem('token', data.token);
        sessionStorage.setItem('userId', data.userId);
        sessionStorage.setItem('email', data.email);
        if (data.isAdmin === 'true') {
            sessionStorage.setItem('isAdmin', 'true');
        }
    };
    SessionStorageService.prototype.setSessionStorageCompetitionIsOn = function () {
        sessionStorage.setItem('competitionIsOn', 'true');
    };
    SessionStorageService.prototype.setSessionStorageCompetitionIsOff = function () {
        sessionStorage.setItem('competitionIsOn', 'false');
    };
    SessionStorageService.decorators = [
        { type: Injectable },
    ];
    /** @nocollapse */
    SessionStorageService.ctorParameters = [
        { type: PreferenceService, },
    ];
    return SessionStorageService;
}());
