import { Injectable } from "@angular/core";
import { PreferenceService } from "../../preference/preference.service";
/**
 * Service to manage session storage.
 */
export var SessionStorageService = (function () {
    /**
     * When creating service, inject dependency.
     *
     * @param preferenceService
     */
    function SessionStorageService(preferenceService) {
        this.preferenceService = preferenceService;
    }
    /**
     * Removes from session storage token, userId, email, isAdmin.
     */
    SessionStorageService.prototype.logout = function () {
        sessionStorage.removeItem('token');
        sessionStorage.removeItem('userId');
        sessionStorage.removeItem('email');
        sessionStorage.removeItem('isAdmin');
    };
    /**
     * Check if someone is logged in.
     *
     * @returns {boolean} true if someone is logged in, other way false
     */
    SessionStorageService.prototype.isLoggedIn = function () {
        return sessionStorage.getItem('token') !== null;
    };
    /**
     * Check if logged in user is admin.
     *
     * @returns {boolean} true if logged in user is admin, other way false
     */
    SessionStorageService.prototype.isAdmin = function () {
        return sessionStorage.getItem('isAdmin') !== null;
    };
    /**
     * Return logged in user's email.
     *
     * @returns {string|null} email
     */
    SessionStorageService.prototype.getEmailLoggedIn = function () {
        return sessionStorage.getItem('email');
    };
    /**
     * Check if during competition is on.
     *
     * @returns {boolean} true if during competition is on, other way false
     */
    SessionStorageService.prototype.getCompetitionIsOn = function () {
        return sessionStorage.getItem('competitionIsOn') == 'true';
    };
    /**
     * Set to session storage logged in user's data.
     *
     * @param data - data contains token, user's id, user's email
     */
    SessionStorageService.prototype.setSessionStorageAuth = function (data) {
        sessionStorage.setItem('token', data.token);
        sessionStorage.setItem('userId', data.userId);
        sessionStorage.setItem('email', data.email);
        if (data.isAdmin === 'true') {
            sessionStorage.setItem('isAdmin', 'true');
        }
    };
    /**
     * Set to session storage competition state.
     */
    SessionStorageService.prototype.setSessionStorageCompetition = function () {
        var _this = this;
        this.preferenceService.getValueCompetitionIsOn()
            .subscribe(function (state) {
            if (state == true) {
                _this.setSessionStorageCompetitionIsOn();
            }
            else {
                _this.setSessionStorageCompetitionIsOff();
            }
        }, function (error) { return console.error(error); });
    };
    /**
     * Set to session storage competition state during on.
     */
    SessionStorageService.prototype.setSessionStorageCompetitionIsOn = function () {
        sessionStorage.setItem('competitionIsOn', 'true');
    };
    /**
     * Set to session storage competition state during off.
     */
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
