import { Component } from '@angular/core';
import { FormGroup, Validators, FormControl } from "@angular/forms";
import { Router } from "@angular/router";
import { AuthService } from "../auth/auth.service";
export var ProfileEditComponent = (function () {
    function ProfileEditComponent(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    ProfileEditComponent.prototype.onSubmit = function (form) {
        var _this = this;
        this.user.firstName = form.value.firstName;
        this.user.lastName = form.value.lastName;
        this.user.email = form.value.email;
        this.user.password = form.value.password;
        this.authService.updateUser(this.user)
            .subscribe(function (result) {
            console.log(result);
            _this.router.navigateByUrl('/profile/info');
        }, function (error) { return console.error(error); });
    };
    ProfileEditComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.authService.getUser()
            .subscribe(function (user) {
            _this.user = user;
            _this.myForm = new FormGroup({
                firstName: new FormControl(_this.user.firstName, Validators.required),
                lastName: new FormControl(_this.user.lastName, Validators.required),
                email: new FormControl(_this.user.email),
                password: new FormControl(_this.user.password),
            });
        });
    };
    ProfileEditComponent.prototype.onCancel = function () {
        this.navigateBack();
    };
    ProfileEditComponent.prototype.navigateBack = function () {
        this.router.navigate(['/profile/info']);
    };
    ProfileEditComponent.decorators = [
        { type: Component, args: [{
                    selector: 'app-profileedit',
                    templateUrl: './profileEdit.component.html'
                },] },
    ];
    /** @nocollapse */
    ProfileEditComponent.ctorParameters = [
        { type: AuthService, },
        { type: Router, },
    ];
    return ProfileEditComponent;
}());
