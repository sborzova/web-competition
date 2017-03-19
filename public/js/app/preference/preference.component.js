import { Component } from '@angular/core';
import { PreferenceService } from "./preference.service";
import { FlashMessageService } from "../flash-message/flash-messages.service";
import { SessionStorageService } from "../shared/session-storage.service";
export var PreferenceComponent = (function () {
    function PreferenceComponent(preferenceService, flashMessageService, sessionStorageService) {
        this.preferenceService = preferenceService;
        this.flashMessageService = flashMessageService;
        this.sessionStorageService = sessionStorageService;
    }
    PreferenceComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.preferenceService.getValueCompetitionIsOn()
            .subscribe(function (value) {
            _this.value = value;
        }, function (error) { return console.error(error); });
    };
    //
    // onChange(){
    //     this.preferenceService.updateValueCompetitionIsOn(!this.value)
    //         .subscribe(
    //             () => {
    //                 this.flashMessageService.showMessage('Preference was updated.', 'alert-success');
    //                 this.sessionStorageService.setSessionStorageCompetitionIsOn();
    //             },
    //             error => console.error(error)
    //         )
    // }
    PreferenceComponent.decorators = [
        { type: Component, args: [{
                    selector: 'app-preference',
                    templateUrl: './preference.component.html'
                },] },
    ];
    /** @nocollapse */
    PreferenceComponent.ctorParameters = [
        { type: PreferenceService, },
        { type: FlashMessageService, },
        { type: SessionStorageService, },
    ];
    return PreferenceComponent;
}());
