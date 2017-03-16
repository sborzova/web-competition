import { Component } from "@angular/core";
import { InstanceService } from "../instance.service";
import { AuthService } from "../../auth/auth.service";
import { FlashMessageService } from "../../flash-message/flash-messages.service";
export var InstanceListComponent = (function () {
    function InstanceListComponent(instanceService, authService, flashMessageService) {
        this.instanceService = instanceService;
        this.authService = authService;
        this.flashMessageService = flashMessageService;
        this.fileSaver = require('file-saver');
    }
    InstanceListComponent.prototype.ngOnInit = function () {
        var _this = this;
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
    };
    InstanceListComponent.prototype.onDelete = function (instance) {
        var _this = this;
        this.instanceService.deleteInstance(instance)
            .subscribe(function (result) {
            _this.flashMessageService.showMessage('Instance was deleted', 'alert-success');
        }, function (error) { return console.error(error); });
    };
    InstanceListComponent.prototype.onDownload = function (instance) {
        var _this = this;
        this.instanceService.getInstance(instance.instanceId)
            .subscribe(function (data) {
            var filename = data.name;
            var file = new File([data.data], filename.concat('.xml'), { type: "text/xml;charset=utf-8" });
            _this.fileSaver.saveAs(file);
        }, function (error) { return console.log("Error downloading the file."); });
    };
    InstanceListComponent.prototype.isAdmin = function () {
        return this.authService.isAdmin();
    };
    InstanceListComponent.decorators = [
        { type: Component, args: [{
                    selector: 'app-instance-list',
                    templateUrl: './instance-list.component.html'
                },] },
    ];
    /** @nocollapse */
    InstanceListComponent.ctorParameters = [
        { type: InstanceService, },
        { type: AuthService, },
        { type: FlashMessageService, },
    ];
    return InstanceListComponent;
}());
