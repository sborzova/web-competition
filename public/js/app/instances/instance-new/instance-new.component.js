import { Component, ViewChild } from "@angular/core";
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { InstanceService } from "../../shared/services/instance.service";
import { minValue } from "../min-value.validator";
import { FlashMessageService } from "../../flash-message/flash-messages.service";
import { FileService } from "../../shared/services/file.service";
import { InstanceCreate } from "../instance-create.model";
/**
 * Component to create new instance.
 */
export var InstanceCreateComponent = (function () {
    /**
     * When creating component, inject dependencies.
     *
     * @param router
     * @param fileService
     * @param flashMessageService
     * @param instancesService
     */
    function InstanceCreateComponent(router, fileService, flashMessageService, instancesService) {
        this.router = router;
        this.fileService = fileService;
        this.flashMessageService = flashMessageService;
        this.instancesService = instancesService;
        this.submitted = false;
        this.statusInvalid = false;
        this.dataInvalid = false;
    }
    /**
     * When creating component, set defaultOrder for new instance.
     */
    InstanceCreateComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.instancesService.getInstances()
            .subscribe(function (instances) {
            var max = 0;
            for (var _i = 0, instances_1 = instances; _i < instances_1.length; _i++) {
                var instance = instances_1[_i];
                if (instance.order > max) {
                    max = instance.order;
                }
            }
            _this.defaultOrder = max + 1;
            _this.setForm();
        }, function (error) { return console.error(error); });
        this.setForm();
    };
    /**
     * If submitted form is valid, call function saveInstanceFiles of this component
     */
    InstanceCreateComponent.prototype.onSubmit = function () {
        this.submitted = true;
        var statusInput = this.statusElem.nativeElement;
        var dataInput = this.dataElem.nativeElement;
        if (!(statusInput.files && statusInput.files[0])) {
            this.statusInvalid = true;
        }
        else {
            this.statusInvalid = false;
        }
        if (!(dataInput.files && dataInput.files[0])) {
            return this.dataInvalid = true;
        }
        else {
            this.dataInvalid = false;
        }
        if (this.instanceForm.valid) {
            this.saveInstanceFiles(statusInput.files[0], dataInput.files[0]);
        }
    };
    /**
     * Call function to save instance status file and instance status data.
     *
     * @param status
     * @param data
     */
    InstanceCreateComponent.prototype.saveInstanceFiles = function (status, data) {
        var _this = this;
        var idStatus;
        this.fileService.saveFile(status)
            .subscribe(function (status) {
            idStatus = JSON.parse(status).id;
            _this.fileService.saveFile(data)
                .subscribe(function (data) {
                _this.saveInstance(data, idStatus);
            }, function (error) {
                _this.fileService.deleteFile(idStatus);
                console.error(error);
            });
        }, function (error) { return console.error(error); });
    };
    /**
     * Create new instance form.
     */
    InstanceCreateComponent.prototype.setForm = function () {
        this.instanceForm = new FormGroup({
            order: new FormControl(this.defaultOrder, [Validators.required, minValue(1)]),
            name: new FormControl(null, Validators.required),
            description: new FormControl(null, Validators.required)
        });
    };
    /**
     * Call function to save instance with all properties, including status's id and data's id
     *
     * @param data
     * @param idStatus
     */
    InstanceCreateComponent.prototype.saveInstance = function (data, idStatus) {
        var _this = this;
        var idData = JSON.parse(data).id;
        this.instancesService.saveInstance(new InstanceCreate(this.instanceForm.value.order, this.instanceForm.value.name, this.instanceForm.value.description, idStatus, idData)).subscribe(function (data) {
            _this.navigateBack();
            _this.flashMessageService.showMessage('Instance was created', 'success');
        }, function (error) {
            console.error(error);
            _this.fileService.deleteFile(idData);
            _this.fileService.deleteFile(idStatus);
        });
    };
    /**
     *  Navigate to route Instances.
     */
    InstanceCreateComponent.prototype.navigateBack = function () {
        this.router.navigate(['/instances']);
    };
    InstanceCreateComponent.prototype.onCancel = function () {
        this.navigateBack();
    };
    InstanceCreateComponent.decorators = [
        { type: Component, args: [{
                    selector: 'app-instance-new',
                    templateUrl: './instance-new.component.html'
                },] },
    ];
    /** @nocollapse */
    InstanceCreateComponent.ctorParameters = [
        { type: Router, },
        { type: FileService, },
        { type: FlashMessageService, },
        { type: InstanceService, },
    ];
    InstanceCreateComponent.propDecorators = {
        'statusElem': [{ type: ViewChild, args: ['status',] },],
        'dataElem': [{ type: ViewChild, args: ['data',] },],
    };
    return InstanceCreateComponent;
}());
