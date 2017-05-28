import { Component } from "@angular/core";
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { AuthService } from "../auth.service";
import { FlashMessageService } from "../../flash-message/flash-messages.service";
import { SignupUser } from "./signup.model";
/**
 * Component for signing up.
 */
export var SignupComponent = (function () {
    /**
     * When creating component, inject dependencies.
     *
     * @param authService
     * @param router
     * @param flashMessageService
     */
    function SignupComponent(authService, router, flashMessageService) {
        this.authService = authService;
        this.router = router;
        this.flashMessageService = flashMessageService;
        this.submitted = false;
        this.emailRegex = "[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@" +
            "(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?";
    }
    /**
     * Create signup form
     */
    SignupComponent.prototype.ngOnInit = function () {
        this.signupForm = new FormGroup({
            firstName: new FormControl(null, [Validators.required, Validators.maxLength(100)]),
            lastName: new FormControl(null, [Validators.required, Validators.maxLength(100)]),
            email: new FormControl(null, [
                Validators.required,
                Validators.pattern(this.emailRegex)
            ]),
            password: new FormControl(null, [Validators.required, Validators.minLength(6), Validators.maxLength(100)]),
            confirmPassword: new FormControl(null, Validators.required)
        });
    };
    /**
     * If signup form is valid, call function to sign up user.
     */
    SignupComponent.prototype.onSubmit = function () {
        var _this = this;
        this.submitted = true;
        if (this.signupForm.valid) {
            var user = new SignupUser(this.signupForm.value.email, this.signupForm.value.password, this.signupForm.value.firstName, this.signupForm.value.lastName);
            this.authService.signup(user)
                .subscribe(function (user) {
                _this.flashMessageService.showMessage('Account created.', 'success');
                _this.router.navigateByUrl('home');
            }, function (error) { return console.error(error); });
        }
    };
    SignupComponent.decorators = [
        { type: Component, args: [{
                    selector: 'app-signup',
                    templateUrl: './signup.component.html'
                },] },
    ];
    /** @nocollapse */
    SignupComponent.ctorParameters = [
        { type: AuthService, },
        { type: Router, },
        { type: FlashMessageService, },
    ];
    return SignupComponent;
}());
