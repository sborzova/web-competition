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
        if (this.passwordForm.valid) {
            this.user.confirmPassword = this.passwordForm.value.current;
            this.user.newPassword = this.passwordForm.value.newPassword;
            this.userService.updatePassword(this.user)
                .subscribe(function () {
                _this.flashMessageService.showMessage('Password was updated.', 'success');
                _this.navigateBack();
            }, function (error) { return console.error(error); });
        }
    };
    ProfileEditPasswordComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.userService.getUser()
            .subscribe(function (user) {
            _this.user = user;
            _this.passwordForm = new FormGroup({
                current: new FormControl(null, Validators.required),
                newPassword: new FormControl(null, [Validators.required, Validators.minLength(6), Validators.maxLength(100)]),
                confirmNew: new FormControl(null, Validators.required),
            });
        });
    };
    ProfileEditPasswordComponent.prototype.navigateBack = function () {
        this.router.navigate(['/#profile/info']);
    };
    ProfileEditPasswordComponent.decorators = [
        { type: Component, args: [{
                    selector: 'app-profile-edit-password',
                    templateUrl: './profile-edit-password.component.html'
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
