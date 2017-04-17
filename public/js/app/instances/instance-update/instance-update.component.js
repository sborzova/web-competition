import { Component, ViewChild } from "@angular/core";
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { Router, ActivatedRoute } from "@angular/router";
import { InstanceService } from "../../shared/instance.service";
import { minValue } from "../min-value.validator";
import { FlashMessageService } from "../../flash-message/flash-messages.service";
export var InstanceEditComponent = (function () {
    function InstanceEditComponent(router, instanceService, route, flashMessageService) {
        this.router = router;
        this.instanceService = instanceService;
        this.route = route;
        this.flashMessageService = flashMessageService;
        this.submitted = false;
    }
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
    InstanceEditComponent.prototype.onSubmit = function () {
        var _this = this;
        this.submitted = true;
        if (this.instanceForm.valid) {
            this.instance.order = this.instanceForm.value.order;
            this.instance.name = this.instanceForm.value.name;
            this.instance.description = this.instanceForm.value.description;
            this.instanceService.updateInstanceTextFields(this.instance)
                .subscribe(function (data) {
                _this.navigateBack();
                _this.flashMessageService.showMessage('Instance was updated', 'success');
                _this.saveFiles();
            }, function (error) { return console.error(error); });
        }
    };
    InstanceEditComponent.prototype.saveFiles = function () {
        var statusInput = this.statusElem.nativeElement;
        var dataInput = this.dataElem.nativeElement;
        var fd = new FormData();
        var updateFiles = false;
        if (statusInput.files && statusInput.files[0]) {
            fd.append('status', statusInput.files[0], statusInput.files[0].name);
            updateFiles = true;
        }
        else {
            fd.append('status', null);
        }
        if (dataInput.files && dataInput.files[0]) {
            fd.append('data', dataInput.files[0], dataInput.files[0].name);
            updateFiles = true;
        }
        else {
            fd.append('data', null);
        }
        if (updateFiles) {
            this.instanceService.saveFiles(fd, this.instance.instanceId)
                .subscribe(function () { return console.log("Data was saved"); }, function (error) { return console.error(error); });
        }
    };
    InstanceEditComponent.prototype.onCancel = function () {
        this.navigateBack();
    };
    InstanceEditComponent.prototype.navigateBack = function () {
        this.router.navigate(['/#instances']);
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
        { type: ActivatedRoute, },
        { type: FlashMessageService, },
    ];
    InstanceEditComponent.propDecorators = {
        'statusElem': [{ type: ViewChild, args: ['status',] },],
        'dataElem': [{ type: ViewChild, args: ['data',] },],
    };
    return InstanceEditComponent;
}());
