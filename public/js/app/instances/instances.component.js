import { Component } from '@angular/core';
import { SessionStorageService } from "../shared/session-storage.service";
export var InstancesComponent = (function () {
    function InstancesComponent(sessionStorageService) {
        this.sessionStorageService = sessionStorageService;
    }
    InstancesComponent.prototype.ngOnInit = function () {
        if (!this.showInstances()) {
            document.getElementById('openModalNotView').click();
        }
    };
    InstancesComponent.prototype.showInstances = function () {
        var loggedIn = this.isLoggedIn();
        var competitionIsOn = this.competitionIsOn();
        var isAdmin = this.isAdmin();
        return !(!loggedIn && competitionIsOn) || isAdmin;
    };
    InstancesComponent.prototype.isAdmin = function () {
        return this.sessionStorageService.isAdmin();
    };
    InstancesComponent.prototype.isLoggedIn = function () {
        return this.sessionStorageService.isLoggedIn();
    };
    InstancesComponent.prototype.competitionIsOn = function () {
        return this.sessionStorageService.getCompetitionIsOn();
    };
    InstancesComponent.decorators = [
        { type: Component, args: [{
                    selector: 'app-instances',
                    templateUrl: './instances.component.html'
                },] },
    ];
    /** @nocollapse */
    InstancesComponent.ctorParameters = [
        { type: SessionStorageService, },
    ];
    return InstancesComponent;
}());
