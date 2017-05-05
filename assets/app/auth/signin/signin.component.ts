import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { Router } from "@angular/router";

import { User } from "../user.model";
import { AuthService } from "../auth.service";
import { SessionStorageService } from "../../shared/session-storage.service";
import { EmailService } from "../../shared/email.service";
import { FlashMessageService } from "../../flash-message/flash-messages.service";

@Component({
    selector: 'app-signin',
    templateUrl: './signin.component.html'
})
export class SigninComponent {
    signinForm: FormGroup;
    emailForm: FormGroup;
    submittedForm: boolean = false;
    submittedEmailForm: boolean = false;
    emailRegex: string = "[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@" +
                            "(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?";

    constructor(private authService: AuthService,
                private sessionStorageService: SessionStorageService,
                private emailService: EmailService,
                private flashMessageService: FlashMessageService,
                private router: Router) {}

    onSubmit() {
        this.submittedForm = true;
        if (this.signinForm.valid){
            const user = new User(
                this.signinForm.value.email,
                this.signinForm.value.password);
            this.authService.signin(user)
                .subscribe(
                    data => {
                        this.sessionStorageService.setSessionStorageAuth(data);
                        this.router.navigate(['/home']);
                    },
                    error => {
                        console.error(error);
                    }
                );
        }
    }

    ngOnInit() {
        this.signinForm = new FormGroup({
            email: new FormControl(null, [Validators.required, Validators.pattern(this.emailRegex)]),
            password: new FormControl(null, Validators.required)
        });
    }

    onShowForm(){
        this.emailForm = new FormGroup({
            email: new FormControl(null, [Validators.required, Validators.pattern(this.emailRegex)])
        });
        document.getElementById('openEmailForm').click();
    }

    onSubmitEmail(){
        this.submittedEmailForm = true;
        if (this.emailForm.valid){
            document.getElementById('hideEmailForm').click();
            this.submittedEmailForm = false;
            this.emailService.sendEmailNewPassword(this.emailForm.value.email)
                .subscribe(
                    () => {},
                    error => console.error(error)
                );
            this.flashMessageService.showMessage('Email with the new password was send.', 'success');
        }
    }
}