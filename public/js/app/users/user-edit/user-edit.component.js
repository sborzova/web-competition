import { Component, Input } from "@angular/core";
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { Router, ActivatedRoute } from "@angular/router";
import { UsersService } from "../users.service";
import { FlashMessageService } from "../../flash-message/flash-messages.service";
export var UserEditComponent = (function () {
    function UserEditComponent(router, usersService, activatedRoute, flashMessageService) {
        this.router = router;
        this.usersService = usersService;
        this.activatedRoute = activatedRoute;
        this.flashMessageService = flashMessageService;
        this.roles = [];
        this.submitted = false;
    }
    UserEditComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.subscription = this.activatedRoute.queryParams
            .subscribe(function (params) {
            var userId = params['userId'];
            _this.usersService.getUser(userId)
                .subscribe(function (user) {
                _this.user = user;
                _this.roles.push('admin', 'user');
                _this.selectedRole = _this.user.role;
                _this.myForm = new FormGroup({
                    firstName: new FormControl(_this.user.firstName, Validators.required),
                    lastName: new FormControl(_this.user.lastName, Validators.required),
                    email: new FormControl(_this.user.email, Validators.required)
                });
            });
        });
    };
    UserEditComponent.prototype.ngOnDestroy = function () {
        this.subscription.unsubscribe();
    };
    UserEditComponent.prototype.onSubmit = function () {
        var _this = this;
        this.submitted = true;
        if (this.myForm.valid) {
            this.user.firstName = this.myForm.value.firstName;
            this.user.lastName = this.myForm.value.lastName;
            this.user.email = this.myForm.value.email;
            this.user.role = this.selectedRole;
            this.usersService.updateUser(this.user)
                .subscribe(function (data) {
                _this.flashMessageService.showMessage('User was updated.', 'alert-success');
                _this.navigateBack();
            }, function (error) { return console.error(error); });
        }
    };
    UserEditComponent.prototype.isSubmitted = function () {
        return this.submitted;
    };
    UserEditComponent.prototype.onCancel = function () {
        this.navigateBack();
    };
    UserEditComponent.prototype.navigateBack = function () {
        this.router.navigate(['/#users']);
    };
    UserEditComponent.prototype.getValue = function (role) {
        this.selectedRole = this.roles.filter(function (r) { return r == role; })[0];
    };
    UserEditComponent.decorators = [
        { type: Component, args: [{
                    selector: 'app-user-edit',
                    templateUrl: 'user-edit.component.html'
                },] },
    ];
    /** @nocollapse */
    UserEditComponent.ctorParameters = [
        { type: Router, },
        { type: UsersService, },
        { type: ActivatedRoute, },
        { type: FlashMessageService, },
    ];
    UserEditComponent.propDecorators = {
        'user': [{ type: Input },],
    };
    return UserEditComponent;
}());
