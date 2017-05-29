import { Component } from '@angular/core';
import { FormGroup, Validators, FormControl } from "@angular/forms";
import { Router } from "@angular/router";
import { FlashMessageService } from "../../flash-message/flash-messages.service";
import { ProfileService } from "../profile.service";
/**
 * Component for editing password of logged in user.
 */
export var ProfileEditPasswordComponent = (function () {
    /**
     * When creating component, inject dependencies.
     *
     * @param userService
     * @param flashMessageService
     * @param router
     */
    function ProfileEditPasswordComponent(userService, flashMessageService, router) {
        this.userService = userService;
        this.flashMessageService = flashMessageService;
        this.router = router;
        this.submitted = false;
    }
    /**
     * When creating component, call function to get logged in user and
     * create edit password form.
     */
    ProfileEditPasswordComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.userService.getLoggedInUser()
            .subscribe(function (user) {
            _this.user = user;
            _this.passwordForm = new FormGroup({
                current: new FormControl(null, Validators.required),
                newPassword: new FormControl(null, [Validators.required, Validators.minLength(6), Validators.maxLength(100)]),
                confirmNew: new FormControl(null, Validators.required),
            });
        });
    };
    /**
     * If edit password form is valid, call function to update user with new password.
     */
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
    ProfileEditPasswordComponent.prototype.navigateBack = function () {
        this.router.navigate(['/profile/info']);
    };
    ProfileEditPasswordComponent.prototype.onCancel = function () {
        this.navigateBack();
    };
    ProfileEditPasswordComponent.decorators = [
        { type: Component, args: [{
                    selector: 'app-profile-edit-password',
                    templateUrl: './profile-edit-password.component.html'
                },] },
    ];
    /** @nocollapse */
    ProfileEditPasswordComponent.ctorParameters = [
        { type: ProfileService, },
        { type: FlashMessageService, },
        { type: Router, },
    ];
    return ProfileEditPasswordComponent;
}());
