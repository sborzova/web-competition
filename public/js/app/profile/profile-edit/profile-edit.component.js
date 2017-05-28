import { Component } from '@angular/core';
import { FormGroup, Validators, FormControl } from "@angular/forms";
import { Router } from "@angular/router";
import { FlashMessageService } from "../../flash-message/flash-messages.service";
import { ProfileService } from "../profile.service";
import { SessionStorageService } from "../../shared/services/session-storage.service";
/**
 * Component to edit profile of logged in user.
 */
export var ProfileEditComponent = (function () {
    /**
     * When create component, inject dependencies.
     *
     * @param userService
     * @param sessionStorageService
     * @param flashMessageService
     * @param router
     */
    function ProfileEditComponent(userService, sessionStorageService, flashMessageService, router) {
        this.userService = userService;
        this.sessionStorageService = sessionStorageService;
        this.flashMessageService = flashMessageService;
        this.router = router;
        this.submitted = false;
    }
    /**
     * When create component, call function to get logged in user and
     * create edit user form.
     */
    ProfileEditComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.userService.getLoggedInUser()
            .subscribe(function (user) {
            _this.user = user;
            _this.userForm = new FormGroup({
                firstName: new FormControl(_this.user.firstName, Validators.required),
                lastName: new FormControl(_this.user.lastName, Validators.required),
                email: new FormControl(_this.user.email, Validators.required),
            });
        });
    };
    /**
     * If edit user form is valid, call function to update profile of logged in user
     * and set session storage with new properties
     */
    ProfileEditComponent.prototype.onSubmit = function () {
        var _this = this;
        this.submitted = true;
        if (this.userForm.valid) {
            this.user.firstName = this.userForm.value.firstName;
            this.user.lastName = this.userForm.value.lastName;
            this.user.email = this.userForm.value.email;
            this.userService.updateLoggedInUser(this.user)
                .subscribe(function (data) {
                _this.sessionStorageService.setSessionStorageAuth(data);
                _this.flashMessageService.showMessage('Profile was updated.', 'success');
                _this.router.navigate(['/profile/info']);
            }, function (error) { return console.error(error); });
        }
    };
    ProfileEditComponent.decorators = [
        { type: Component, args: [{
                    selector: 'app-profile-edit',
                    templateUrl: './profile-edit.component.html'
                },] },
    ];
    /** @nocollapse */
    ProfileEditComponent.ctorParameters = [
        { type: ProfileService, },
        { type: SessionStorageService, },
        { type: FlashMessageService, },
        { type: Router, },
    ];
    return ProfileEditComponent;
}());
