import { Component, OnInit, Input } from '@angular/core';

import { UsersService } from "./users.service";
import { User } from "./user.model";
import { FlashMessageService } from "../flash-message/flash-messages.service";
import { AuthService } from "../auth/auth.service";
import {SessionStorageService} from "../shared/session-storage.service";
import {EmailService} from "../shared/email.service";
import {Email} from "../shared/email.model";
import {FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
    selector: 'app-users',
    templateUrl: 'users.component.html'
})
export class UsersComponent implements OnInit {
    users : User[];
    myForm: FormGroup;
    private submitted: boolean = false;

    constructor(private usersService: UsersService,
                private sessionStorageService: SessionStorageService,
                private emailService: EmailService,
                private flashMessageService: FlashMessageService){
    }

    ngOnInit() {
        this.usersService.getUsers()
            .subscribe(
                (users: User[] ) => {
                    this.users = users;
                }
            );
    }

    onDelete(user: User) {
        this.usersService.deleteUser(user)
            .subscribe(
                result => {
                    this.flashMessageService.showMessage('User was deleted.', 'success' );
                },
                error => console.error(error)
            );
    }

    isMe(user: User){
      return this.sessionStorageService.getEmailLoggedIn() == user.email;
    }

    onShowEmailForm(){
        this.myForm = new FormGroup({
            subject: new FormControl(null, [Validators.required, Validators.maxLength(100)]),
            content: new FormControl(null, [Validators.required, Validators.maxLength(1000)]),
        });
        document.getElementById('openEmailForm').click();
    }

    onSubmit(){
        this.submitted = true;
        if (this.myForm.valid) {
            document.getElementById('hideEmailForm').click();
            this.submitted = false;
            const email = new Email(
                this.myForm.value.subject,
                this.myForm.value.content
            );
            this.emailService.sendEmailToAll(email)
                .subscribe(
                    () => {
                    },
                    error => console.error(error)
                );
            this.flashMessageService.showMessage('Email was send.', 'success');
        }
    }

    isSubmitted(){
        return this.submitted;
    }
}