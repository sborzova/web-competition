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
    InstancesComponent.prototype.ngOnInit = function () {
        var _this = this;
        if (!this.showInstances()) {
            document.getElementById('openModalNotView').click();
        }
        else {
            this.instanceService.getInstances()
                .subscribe(function (instances) {
                _this.instances = instances;
                var max = 0;
                for (var _i = 0, instances_1 = instances; _i < instances_1.length; _i++) {
                    var instance = instances_1[_i];
                    if (instance.order > max) {
                        max = instance.order;
                    }
                }
                _this.defaultOrder = max + 1;
            });
        }
    };
    InstancesComponent.prototype.showInstances = function () {
        var isLoggedIn = this.isLoggedIn();
        var competitionIsOn = this.competitionIsOn();
        var isAdmin = this.isAdmin();
        return !competitionIsOn || isAdmin || (competitionIsOn && isLoggedIn);
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
    InstancesComponent.prototype.onDelete = function (instance) {
        this.instance = instance;
        document.getElementById('openModalDelete').click();
    };
    InstancesComponent.prototype.onDownload = function (instance) {
        var _this = this;
        this.instanceService.getInstance(instance.instanceId)
            .subscribe(function (instance) {
            _this.instanceService.download(instance);
        }, function (error) { return console.log("Error downloading the file."); });
    };
    InstancesComponent.prototype.onOk = function () {
        var _this = this;
        this.instanceService.deleteInstance(this.instance)
            .subscribe(function (result) {
            _this.instance = null;
            _this.flashMessageService.showMessage('Instance was deleted', 'success');
        }, function (error) { return console.error(error); });
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
