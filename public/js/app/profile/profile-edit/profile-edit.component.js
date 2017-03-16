import { Component } from '@angular/core';
import { FormGroup, Validators, FormControl } from "@angular/forms";
import { Router } from "@angular/router";
import { FlashMessageService } from "../../flash-message/flash-messages.service";
import { UserService } from "../../shared/user.service";
import { AuthService } from "../../auth/auth.service";
export var ProfileEditComponent = (function () {
    function ProfileEditComponent(userService, authService, flashMessageService, router) {
        this.userService = userService;
        this.authService = authService;
        this.flashMessageService = flashMessageService;
        this.router = router;
        this.submitted = false;
    }
    ProfileEditComponent.prototype.onSubmit = function () {
        var _this = this;
        this.submitted = true;
        if (this.myForm.valid) {
            this.user.firstName = this.myForm.value.firstName;
            this.user.lastName = this.myForm.value.lastName;
            this.user.email = this.myForm.value.email;
            this.userService.updateUser(this.user)
                .subscribe(function (data) {
                _this.authService.setSessionStorage(data);
                _this.flashMessageService.showMessage('Profile was updated.', 'alert-success');
                _this.navigateBack();
            }, function (error) { return console.error(error); });
        }
    };
    ProfileEditComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.userService.getUser()
            .subscribe(function (user) {
            _this.user = user;
            _this.myForm = new FormGroup({
                firstName: new FormControl(_this.user.firstName, Validators.required),
                lastName: new FormControl(_this.user.lastName, Validators.required),
                email: new FormControl(_this.user.email, Validators.required),
            });
        });
    };
    ProfileEditComponent.prototype.onCancel = function () {
        this.navigateBack();
    };
    ProfileEditComponent.prototype.isSubmitted = function () {
        return this.submitted;
    };
    ProfileEditComponent.prototype.navigateBack = function () {
        this.router.navigate(['/#profile/info']);
    };
    ProfileEditComponent.decorators = [
        { type: Component, args: [{
                    selector: 'app-profile-edit',
                    templateUrl: 'profile-edit.component.html'
                },] },
    ];
    /** @nocollapse */
    ProfileEditComponent.ctorParameters = [
        { type: UserService, },
        { type: AuthService, },
        { type: FlashMessageService, },
        { type: Router, },
    ];
    return ProfileEditComponent;
}());
