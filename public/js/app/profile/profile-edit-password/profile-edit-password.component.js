import { Component } from '@angular/core';
import { FormGroup, Validators, FormControl } from "@angular/forms";
import { Router } from "@angular/router";
import { FlashMessageService } from "../../flash-message/flash-messages.service";
import { UserService } from "../../shared/user.service";
export var ProfileEditPasswordComponent = (function () {
    function ProfileEditPasswordComponent(userService, flashMessageService, router) {
        this.userService = userService;
        this.flashMessageService = flashMessageService;
        this.router = router;
        this.submitted = false;
    }
    ProfileEditPasswordComponent.prototype.onSubmit = function () {
        var _this = this;
        this.submitted = true;
        if (this.myForm.valid) {
            this.user.confirmPassword = this.myForm.value.current;
            this.user.newPassword = this.myForm.value.newPassword;
            this.userService.updatePassword(this.user)
                .subscribe(function () {
                _this.flashMessageService.showMessage('Password was updated.', 'alert-success');
                _this.navigateBack();
            }, function (error) { return console.error(error); });
        }
    };
    ProfileEditPasswordComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.userService.getUser()
            .subscribe(function (user) {
            _this.user = user;
            _this.myForm = new FormGroup({
                current: new FormControl(null, Validators.required),
                newPassword: new FormControl(null, [Validators.required, Validators.minLength(4), Validators.maxLength(100)]),
                confirmNew: new FormControl(null, Validators.required),
            });
        });
    };
    ProfileEditPasswordComponent.prototype.onCancel = function () {
        this.navigateBack();
    };
    ProfileEditPasswordComponent.prototype.navigateBack = function () {
        this.router.navigate(['/#profile/info']);
    };
    ProfileEditPasswordComponent.prototype.isSubmitted = function () {
        return this.submitted;
    };
    ProfileEditPasswordComponent.decorators = [
        { type: Component, args: [{
                    selector: 'app-profile-edit-password',
                    templateUrl: 'profile-edit-password.component.html'
                },] },
    ];
    /** @nocollapse */
    ProfileEditPasswordComponent.ctorParameters = [
        { type: UserService, },
        { type: FlashMessageService, },
        { type: Router, },
    ];
    return ProfileEditPasswordComponent;
}());
