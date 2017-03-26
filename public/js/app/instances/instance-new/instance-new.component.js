import { Component, ViewChild } from "@angular/core";
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { InstanceService } from "../instance.service";
import { Instance } from "../instance.model";
import { minValue } from "../min-value.validator";
import { FlashMessageService } from "../../flash-message/flash-messages.service";
export var InstanceCreateComponent = (function () {
    function InstanceCreateComponent(router, flashMessageService, instancesService) {
        this.router = router;
        this.flashMessageService = flashMessageService;
        this.instancesService = instancesService;
        this.submitted = false;
        this.statsInvalid = false;
        this.dataInvalid = false;
    }
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
    InstanceCreateComponent.prototype.onSubmit = function () {
        var _this = this;
        this.submitted = true;
        var statsInput = this.statsElem.nativeElement;
        var dataInput = this.dataElem.nativeElement;
        if (!(statsInput.files && statsInput.files[0])) {
            this.statsInvalid = true;
        }
        else {
            this.statsInvalid = false;
        }
        if (!(dataInput.files && dataInput.files[0])) {
            return this.dataInvalid = true;
        }
        else {
            this.dataInvalid = false;
        }
        if (this.myForm.valid) {
            var instance = new Instance(this.myForm.value.order, this.myForm.value.name, this.myForm.value.description);
            this.instancesService.saveInstance(instance)
                .subscribe(function (data) {
                console.log(data);
                var id = data.instanceId;
                var fd = new FormData();
                fd.append('stats', statsInput.files[0], statsInput.files[0].name);
                fd.append('data', dataInput.files[0], dataInput.files[0].name);
                _this.navigateBack();
                _this.instancesService.saveFiles(fd, id)
                    .subscribe(function () {
                    _this.flashMessageService.showMessage('Instance was created.', 'alert-success');
                }, function (error) {
                    console.error(error);
                });
            }, function (error) { return console.error(error); });
        }
    };
    InstanceCreateComponent.prototype.setForm = function () {
        this.myForm = new FormGroup({
            order: new FormControl(this.defaultOrder, [Validators.required, minValue(1)]),
            name: new FormControl(null, Validators.required),
            description: new FormControl(null, Validators.required)
        });
    };
    InstanceCreateComponent.prototype.isSubmitted = function () {
        return this.submitted;
    };
    InstanceCreateComponent.prototype.isStatsInvalid = function () {
        return this.statsInvalid;
    };
    InstanceCreateComponent.prototype.isDataInvalid = function () {
        return this.dataInvalid;
    };
    InstanceCreateComponent.prototype.onCancel = function () {
        this.navigateBack();
    };
    InstanceCreateComponent.prototype.navigateBack = function () {
        this.router.navigate(['/#instances']);
    };
    InstanceCreateComponent.decorators = [
        { type: Component, args: [{
                    selector: 'app-instance-new',
                    templateUrl: 'instance-new.component.html'
                },] },
    ];
    /** @nocollapse */
    InstanceCreateComponent.ctorParameters = [
        { type: Router, },
        { type: FlashMessageService, },
        { type: InstanceService, },
    ];
    InstanceCreateComponent.propDecorators = {
        'statsElem': [{ type: ViewChild, args: ['stats',] },],
        'dataElem': [{ type: ViewChild, args: ['data',] },],
    };
    return InstanceCreateComponent;
}());
