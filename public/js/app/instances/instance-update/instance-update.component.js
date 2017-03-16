import { Component, ViewChild, Input } from "@angular/core";
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { Router, ActivatedRoute } from "@angular/router";
import { InstanceService } from "../instance.service";
import { minValue } from "../min-value.validator";
import { FlashMessageService } from "../../flash-message/flash-messages.service";
export var InstanceEditComponent = (function () {
    function InstanceEditComponent(router, instanceService, activatedRoute, flashMessageService) {
        this.router = router;
        this.instanceService = instanceService;
        this.activatedRoute = activatedRoute;
        this.flashMessageService = flashMessageService;
        this.submitted = false;
    }
    InstanceEditComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.subscription = this.activatedRoute.queryParams
            .subscribe(function (params) {
            var instanceId = params['instanceId'];
            _this.instanceService.getInstance(instanceId)
                .subscribe(function (instance) {
                _this.instance = instance;
                _this.myForm = new FormGroup({
                    order: new FormControl(_this.instance.order, [Validators.required, minValue(0)]),
                    name: new FormControl(_this.instance.name, Validators.required),
                    description: new FormControl(_this.instance.description, Validators.required)
                });
            });
        });
    };
    InstanceEditComponent.prototype.ngOnDestroy = function () {
        this.subscription.unsubscribe();
    };
    InstanceEditComponent.prototype.onSubmit = function (form) {
        var _this = this;
        this.submitted = true;
        if (form.valid) {
            this.instance.order = form.value.order;
            this.instance.name = form.value.name;
            this.instance.description = form.value.description;
            this.instanceService.updateInstanceTextFields(this.instance)
                .subscribe(function (data) {
                _this.navigateBack();
                _this.flashMessageService.showMessage('Instance was updated', 'alert-success');
                _this.saveFiles();
            }, function (error) { return console.error(error); });
        }
    };
    InstanceEditComponent.prototype.saveFiles = function () {
        var statsInput = this.statsElem.nativeElement;
        var dataInput = this.dataElem.nativeElement;
        var fd = new FormData();
        var updateFiles = false;
        if (statsInput.files && statsInput.files[0]) {
            fd.append('stats', statsInput.files[0], statsInput.files[0].name);
            updateFiles = true;
        }
        else {
            fd.append('stats', null);
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
    InstanceEditComponent.prototype.isSubmitted = function () {
        return this.submitted;
    };
    InstanceEditComponent.decorators = [
        { type: Component, args: [{
                    selector: 'app-instance-edit',
                    templateUrl: 'instance-update.component.html'
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
        'instance': [{ type: Input },],
        'statsElem': [{ type: ViewChild, args: ['stats',] },],
        'dataElem': [{ type: ViewChild, args: ['data',] },],
    };
    return InstanceEditComponent;
}());
