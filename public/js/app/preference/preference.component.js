import { Component } from '@angular/core';
import { PreferenceService } from "./preference.service";
import { SessionStorageService } from "../shared/session-storage.service";
export var PreferenceComponent = (function () {
    function PreferenceComponent(preferenceService, sessionStorageService) {
        this.preferenceService = preferenceService;
        this.sessionStorageService = sessionStorageService;
    }
    PreferenceComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.preferenceService.getValueCompetitionIsOn()
            .subscribe(function (value) {
            _this.competitionOn = value;
        }, function (error) { return console.error(error); });
    };
    PreferenceComponent.prototype.onTurnOn = function () {
        var _this = this;
        this.competitionOn = true;
        this.preferenceService.updateValueCompetitionIsOn(this.competitionOn)
            .subscribe(function () {
            _this.sessionStorageService.setSessionStorageCompetitionIsOn();
        }, function (error) { return console.error(error); });
    };
    PreferenceComponent.prototype.onTurnOff = function () {
        var _this = this;
        this.competitionOn = false;
        this.preferenceService.updateValueCompetitionIsOn(this.competitionOn)
            .subscribe(function () {
            _this.sessionStorageService.setSessionStorageCompetitionIsOff();
        }, function (error) { return console.error(error); });
    };
    PreferenceComponent.prototype.isCompetitionOn = function () {
        return this.competitionOn;
    };
    PreferenceComponent.decorators = [
        { type: Component, args: [{
                    selector: 'app-preference',
                    templateUrl: './preference.component.html',
                    styleUrls: ['preference.component.css']
                },] },
    ];
    /** @nocollapse */
    PreferenceComponent.ctorParameters = [
        { type: PreferenceService, },
        { type: SessionStorageService, },
    ];
    return PreferenceComponent;
}());
