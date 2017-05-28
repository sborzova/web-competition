import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { AuthService } from "../auth.service";
import { SessionStorageService } from "../../shared/services/session-storage.service";
import { EmailService } from "./email.service";
import { FlashMessageService } from "../../flash-message/flash-messages.service";
import { SigninUser } from "./signin.model";
import { Email } from "./email.model";
/**
 * Component for signing in.
 */
export var SigninComponent = (function () {
    /**
     * When creating component, inject dependencies.
     *
     * @param authService
     * @param sessionStorageService
     * @param emailService
     * @param flashMessageService
     * @param router
     */
    function SigninComponent(authService, sessionStorageService, emailService, flashMessageService, router) {
        this.authService = authService;
        this.sessionStorageService = sessionStorageService;
        this.emailService = emailService;
        this.flashMessageService = flashMessageService;
        this.router = router;
        this.submittedForm = false;
        this.submittedEmailForm = false;
        this.emailRegex = "[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@" +
            "(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?";
    }
    /**
     *  Create sign in form
     */
    SigninComponent.prototype.ngOnInit = function () {
        this.signinForm = new FormGroup({
            email: new FormControl(null, [Validators.required, Validators.pattern(this.emailRegex)]),
            password: new FormControl(null, Validators.required)
        });
    };
    /**
     * If sign in form is valid, call function to sign in user,
     */
    SigninComponent.prototype.onSubmit = function () {
        var _this = this;
        this.submittedForm = true;
        if (this.signinForm.valid) {
            var user = new SigninUser(this.signinForm.value.email, this.signinForm.value.password);
            this.authService.signin(user)
                .subscribe(function (data) {
                _this.sessionStorageService.setSessionStorageAuth(data);
                _this.router.navigate(['/home']);
            }, function (error) {
                console.error(error);
            });
        }
    };
    /**
     * Create email form
     */
    SigninComponent.prototype.onShowForm = function () {
        this.emailForm = new FormGroup({
            email: new FormControl(null, [Validators.required, Validators.pattern(this.emailRegex)])
        });
        document.getElementById('openEmailForm').click();
    };
    /**
     * If email form is valid, call function to send email with new password.
     */
    SigninComponent.prototype.onSubmitEmail = function () {
        var _this = this;
        this.submittedEmailForm = true;
        if (this.emailForm.valid) {
            document.getElementById('hideEmailForm').click();
            this.submittedEmailForm = false;
            var email = new Email(this.emailForm.value.email);
            this.emailService.sendEmailNewPassword(email)
                .subscribe(function () { return _this.flashMessageService.showMessage('Email with the new password was sent.', 'success'); }, function (error) { return console.error(error); });
        }
    };
    SigninComponent.decorators = [
        { type: Component, args: [{
                    selector: 'app-signin',
                    templateUrl: './signin.component.html'
                },] },
    ];
    /** @nocollapse */
    SigninComponent.ctorParameters = [
        { type: AuthService, },
        { type: SessionStorageService, },
        { type: EmailService, },
        { type: FlashMessageService, },
        { type: Router, },
    ];
    return SigninComponent;
}());
