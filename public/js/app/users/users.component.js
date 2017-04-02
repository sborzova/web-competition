import { Component } from '@angular/core';
import { UsersService } from "./users.service";
import { FlashMessageService } from "../flash-message/flash-messages.service";
import { SessionStorageService } from "../shared/session-storage.service";
import { EmailService } from "../shared/email.service";
import { Email } from "../shared/email.model";
import { FormControl, FormGroup, Validators } from "@angular/forms";
export var UsersComponent = (function () {
    function UsersComponent(usersService, sessionStorageService, emailService, flashMessageService) {
        this.usersService = usersService;
        this.sessionStorageService = sessionStorageService;
        this.emailService = emailService;
        this.flashMessageService = flashMessageService;
        this.submitted = false;
    }
    UsersComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.usersService.getUsers()
            .subscribe(function (users) {
            _this.users = users;
        });
    };
    UsersComponent.prototype.onDelete = function (user) {
        var _this = this;
        this.usersService.deleteUser(user)
            .subscribe(function (result) {
            _this.flashMessageService.showMessage('User was deleted.', 'success');
        }, function (error) { return console.error(error); });
    };
    UsersComponent.prototype.isMe = function (user) {
        return this.sessionStorageService.getEmailLoggedIn() == user.email;
    };
    UsersComponent.prototype.onShowEmailForm = function () {
        this.myForm = new FormGroup({
            subject: new FormControl(null, [Validators.required, Validators.maxLength(100)]),
            content: new FormControl(null, [Validators.required, Validators.maxLength(1000)]),
        });
        document.getElementById('openEmailForm').click();
    };
    UsersComponent.prototype.onSubmit = function () {
        this.submitted = true;
        if (this.myForm.valid) {
            document.getElementById('hideEmailForm').click();
            this.submitted = false;
            var email = new Email(this.myForm.value.subject, this.myForm.value.content);
            this.emailService.sendEmailToAll(email)
                .subscribe(function () {
            }, function (error) { return console.error(error); });
            this.flashMessageService.showMessage('Email was send.', 'success');
        }
    };
    UsersComponent.prototype.isSubmitted = function () {
        return this.submitted;
    };
    UsersComponent.decorators = [
        { type: Component, args: [{
                    selector: 'app-users',
                    templateUrl: 'users.component.html'
                },] },
    ];
    /** @nocollapse */
    UsersComponent.ctorParameters = [
        { type: UsersService, },
        { type: SessionStorageService, },
        { type: EmailService, },
        { type: FlashMessageService, },
    ];
    return UsersComponent;
}());
