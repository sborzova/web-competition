import { Component } from '@angular/core';
import { SessionStorageService } from "../shared/session-storage.service";
import { InstanceService } from "../shared/instance.service";
import { FlashMessageService } from "../flash-message/flash-messages.service";
export var InstancesComponent = (function () {
    function InstancesComponent(sessionStorageService, instanceService, flashMessageService) {
        this.sessionStorageService = sessionStorageService;
        this.instanceService = instanceService;
        this.flashMessageService = flashMessageService;
    }
    /**
     * Set to variable instances all instances.
     */
    InstancesComponent.prototype.ngOnInit = function () {
        var _this = this;
        if (!this.showInstances()) {
            document.getElementById('openModalNotView').click();
        }
        else {
            this.instanceService.getInstances()
                .subscribe(function (instances) {
                _this.instances = instances;
            });
        }
    };
    /**
     * Check if instances can be shown.
     *
     * @returns {boolean} true if logged in user is admin or competition state is off
     *  or (competition state is on and user is logged in), other way false
     */
    InstancesComponent.prototype.showInstances = function () {
        var isLoggedIn = this.isLoggedIn();
        var competitionIsOn = this.competitionIsOn();
        var isAdmin = this.isAdmin();
        return !competitionIsOn || isAdmin || (competitionIsOn && isLoggedIn);
    };
    /**
     * Open modal dialog to show delete ensure question.
     *
     * @param instance
     */
    InstancesComponent.prototype.onDelete = function (instance) {
        this.instance = instance;
        document.getElementById('openModalDelete').click();
    };
    /**
     * Get instance with all data and download instance's data.
     *
     * @param instance
     */
    InstancesComponent.prototype.onDownload = function (instance) {
        var _this = this;
        this.instanceService.getInstance(instance.instanceId)
            .subscribe(function (instance) {
            _this.instanceService.download(instance);
        }, function (error) { return console.log("Error downloading the file."); });
    };
    /**
     * Delete instance in variable instance.
     */
    InstancesComponent.prototype.onOk = function () {
        var _this = this;
        this.instanceService.deleteInstance(this.instance)
            .subscribe(function (result) {
            _this.instance = null;
            _this.flashMessageService.showMessage('Instance was deleted', 'success');
        }, function (error) { return console.error(error); });
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
        { type: InstanceService, },
        { type: FlashMessageService, },
    ];
    return InstancesComponent;
}());
