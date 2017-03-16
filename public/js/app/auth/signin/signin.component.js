import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { User } from "../user.model";
import { AuthService } from "../auth.service";
export var SigninComponent = (function () {
    function SigninComponent(authService, router) {
        this.authService = authService;
        this.router = router;
        this.submitted = false;
    }
    SigninComponent.prototype.onSubmit = function () {
        var _this = this;
        this.submitted = true;
        if (this.myForm.valid) {
            var user = new User(this.myForm.value.email, this.myForm.value.password);
            this.authService.signin(user)
                .subscribe(function (data) {
                _this.authService.setSessionStorage(data);
                _this.router.navigate(['/#home']);
            }, function (error) {
                console.error(error);
            });
        }
    };
    SigninComponent.prototype.ngOnInit = function () {
        this.myForm = new FormGroup({
            email: new FormControl(null, [
                Validators.required,
                Validators.pattern("[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@" +
                    "(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?")
            ]),
            password: new FormControl(null, Validators.required)
        });
    };
    SigninComponent.prototype.isSubmitted = function () {
        return this.submitted;
    };
    SigninComponent.decorators = [
        { type: Component, args: [{
                    selector: 'app-signin',
                    templateUrl: 'signin.component.html'
                },] },
    ];
    /** @nocollapse */
    SigninComponent.ctorParameters = [
        { type: AuthService, },
        { type: Router, },
    ];
    return SigninComponent;
}());
