import { Component, ViewChild } from "@angular/core";
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { Router, ActivatedRoute } from "@angular/router";
import { InstanceService } from "../../shared/services/instance.service";
import { minValue } from "../min-value.validator";
import { FlashMessageService } from "../../flash-message/flash-messages.service";
import { FileService } from "../../shared/services/file.service";
import { FileModel } from "../file.model";
import { InstanceUpdate } from "../instance-update.model";
export var InstanceEditComponent = (function () {
    function InstanceEditComponent(router, instanceService, fileService, route, flashMessageService) {
        this.router = router;
        this.instanceService = instanceService;
        this.fileService = fileService;
        this.route = route;
        this.flashMessageService = flashMessageService;
        this.submitted = false;
    }
    /**
     * Set to variable instance instance by id.
     * Create instance edit form.
     */
    InstanceEditComponent.prototype.ngOnInit = function () {
        var _this = this;
        var id = this.route.snapshot.params['id'];
        this.instanceService.getInstance(id)
            .subscribe(function (instance) {
            _this.instance = instance;
            _this.instanceForm = new FormGroup({
                order: new FormControl(_this.instance.order, [Validators.required, minValue(0)]),
                name: new FormControl(_this.instance.name, Validators.required),
                description: new FormControl(_this.instance.description, Validators.required)
            });
        });
    };
    /**
     * Submit instance edit form.
     */
    InstanceEditComponent.prototype.onSubmit = function () {
        var _this = this;
        this.submitted = true;
        if (this.instanceForm.valid) {
            var updateInstance = new InstanceUpdate(this.instanceForm.value.order, this.instanceForm.value.name, this.instanceForm.value.description, this.instance.instanceId);
            this.instanceService.updateInstance(updateInstance)
                .subscribe(function (data) {
                _this.navigateBack();
                _this.flashMessageService.showMessage('Instance was updated', 'success');
                _this.saveFiles();
            }, function (error) { return console.error(error); });
        }
    };
    /**
     * Update instance status file and instance data file.
     */
    InstanceEditComponent.prototype.saveFiles = function () {
        var _this = this;
        var statusInput = this.statusElem.nativeElement;
        var dataInput = this.dataElem.nativeElement;
        if (statusInput.files && statusInput.files[0]) {
            this.fileService.updateFile(new FileModel(statusInput.files[0], this.instance.status.id))
                .subscribe(function (data) { }, function (error) { return _this.flashMessageService.showMessage('Something went wrong', 'danger'); });
        }
        if (dataInput.files && dataInput.files[0]) {
            this.fileService.updateFile(new FileModel(dataInput.files[0], this.instance.data.id))
                .subscribe(function (data) { }, function (error) { return _this.flashMessageService.showMessage('Something went wrong', 'danger'); });
        }
    };
    /**
     * Navigate to router Instances.
     */
    InstanceEditComponent.prototype.navigateBack = function () {
        this.router.navigate(['/instances']);
    };
    InstanceEditComponent.prototype.onCancel = function () {
        this.navigateBack();
    };
    InstanceEditComponent.decorators = [
        { type: Component, args: [{
                    selector: 'app-instance-edit',
                    templateUrl: './instance-update.component.html'
                },] },
    ];
    /** @nocollapse */
    InstanceEditComponent.ctorParameters = [
        { type: Router, },
        { type: InstanceService, },
        { type: FileService, },
        { type: ActivatedRoute, },
        { type: FlashMessageService, },
    ];
    InstanceEditComponent.propDecorators = {
        'statusElem': [{ type: ViewChild, args: ['status',] },],
        'dataElem': [{ type: ViewChild, args: ['data',] },],
    };
    return InstanceEditComponent;
}());
