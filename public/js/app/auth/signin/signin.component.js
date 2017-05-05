import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { User } from "../user.model";
import { AuthService } from "../auth.service";
import { SessionStorageService } from "../../shared/session-storage.service";
import { EmailService } from "../../shared/email.service";
import { FlashMessageService } from "../../flash-message/flash-messages.service";
export var SigninComponent = (function () {
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
    SigninComponent.prototype.onSubmit = function () {
        var _this = this;
        this.submittedForm = true;
        if (this.signinForm.valid) {
            var user = new User(this.signinForm.value.email, this.signinForm.value.password);
            this.authService.signin(user)
                .subscribe(function (data) {
                _this.sessionStorageService.setSessionStorageAuth(data);
                _this.router.navigate(['/home']);
            }, function (error) {
                console.error(error);
            });
        }
    };
    SigninComponent.prototype.ngOnInit = function () {
        this.signinForm = new FormGroup({
            email: new FormControl(null, [Validators.required, Validators.pattern(this.emailRegex)]),
            password: new FormControl(null, Validators.required)
        });
    };
    SigninComponent.prototype.onShowForm = function () {
        this.emailForm = new FormGroup({
            email: new FormControl(null, [Validators.required, Validators.pattern(this.emailRegex)])
        });
        document.getElementById('openEmailForm').click();
    };
    SigninComponent.prototype.onSubmitEmail = function () {
        this.submittedEmailForm = true;
        if (this.emailForm.valid) {
            document.getElementById('hideEmailForm').click();
            this.submittedEmailForm = false;
            this.emailService.sendEmailNewPassword(this.emailForm.value.email)
                .subscribe(function () { }, function (error) { return console.error(error); });
            this.flashMessageService.showMessage('Email with the new password was send.', 'success');
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
