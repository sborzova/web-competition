import { Component } from '@angular/core';
import { PreferenceService } from "./preference.service";
import { SessionStorageService } from "../shared/services/session-storage.service";
/**
 * Component to manage preference.
 */
export var PreferenceComponent = (function () {
    /**
     * When creating component, inject dependencies.
     *
     * @param preferenceService
     * @param sessionStorageService
     */
    function PreferenceComponent(preferenceService, sessionStorageService) {
        this.preferenceService = preferenceService;
        this.sessionStorageService = sessionStorageService;
    }
    /**
     * When creating component, call function to get state of competition.
     */
    PreferenceComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.preferenceService.getValueCompetitionIsOn()
            .subscribe(function (value) {
            _this.competitionOn = value;
        }, function (error) { return console.error(error); });
    };
    /**
     * Set competition state to during is on.
     */
    PreferenceComponent.prototype.onTurnOn = function () {
        var _this = this;
        this.competitionOn = true;
        this.preferenceService.updateValueCompetitionIsOn(this.competitionOn)
            .subscribe(function () {
            _this.sessionStorageService.setSessionStorageCompetitionIsOn();
        }, function (error) { return console.error(error); });
    };
    /**
     * Set competition state to during is off.
     */
    PreferenceComponent.prototype.onTurnOff = function () {
        var _this = this;
        this.competitionOn = false;
        this.preferenceService.updateValueCompetitionIsOn(this.competitionOn)
            .subscribe(function () {
            _this.sessionStorageService.setSessionStorageCompetitionIsOff();
        }, function (error) { return console.error(error); });
    };
    PreferenceComponent.decorators = [
        { type: Component, args: [{
                    selector: 'app-preference',
                    templateUrl: './preference.component.html',
                },] },
    ];
    /** @nocollapse */
    PreferenceComponent.ctorParameters = [
        { type: PreferenceService, },
        { type: SessionStorageService, },
    ];
    return PreferenceComponent;
}());
