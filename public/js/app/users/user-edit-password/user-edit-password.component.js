import { Component } from "@angular/core";
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { Router, ActivatedRoute } from "@angular/router";
import { UsersService } from "../users.service";
import { FlashMessageService } from "../../flash-message/flash-messages.service";
export var UserEditPasswordComponent = (function () {
    function UserEditPasswordComponent(router, usersService, activatedRoute, flashMessageService) {
        this.router = router;
        this.usersService = usersService;
        this.activatedRoute = activatedRoute;
        this.flashMessageService = flashMessageService;
        this.submitted = false;
    }
    UserEditPasswordComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.subscription = this.activatedRoute.queryParams
            .subscribe(function (params) {
            var userId = params['userId'];
            _this.usersService.getUser(userId)
                .subscribe(function (user) {
                _this.user = user;
                _this.myForm = new FormGroup({
                    password: new FormControl(null, [Validators.required, Validators.minLength(4), Validators.maxLength(100)]),
                    confirmPassword: new FormControl(null, Validators.required)
                });
            });
        });
    };
    UserEditPasswordComponent.prototype.ngOnDestroy = function () {
        this.subscription.unsubscribe();
    };
    UserEditPasswordComponent.prototype.onSubmit = function () {
        var _this = this;
        this.submitted = true;
        if (this.myForm.valid) {
            this.user.password = this.myForm.value.password;
            this.usersService.updateUserPassword(this.user)
                .subscribe(function (data) {
                _this.flashMessageService.showMessage('Password was changed.', 'success');
                _this.navigateBack();
            }, function (error) { return console.error(error); });
        }
    };
    UserEditPasswordComponent.prototype.isSubmitted = function () {
        return this.submitted;
    };
    UserEditPasswordComponent.prototype.onCancel = function () {
        this.navigateBack();
    };
    UserEditPasswordComponent.prototype.navigateBack = function () {
        this.router.navigate(['/#users']);
    };
    UserEditPasswordComponent.decorators = [
        { type: Component, args: [{
                    selector: 'app-user-edit-password',
                    templateUrl: 'user-edit-password.component.html'
                },] },
    ];
    /** @nocollapse */
    UserEditPasswordComponent.ctorParameters = [
        { type: Router, },
        { type: UsersService, },
        { type: ActivatedRoute, },
        { type: FlashMessageService, },
    ];
    return UserEditPasswordComponent;
}());
