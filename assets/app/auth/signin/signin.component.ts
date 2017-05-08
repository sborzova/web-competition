import {Component} from '@angular/core';
import {FormGroup, FormControl, Validators} from "@angular/forms";
import {Router} from "@angular/router";

import {AuthService} from "../auth.service";
import {SessionStorageService} from "../../shared/session-storage.service";
import {EmailService} from "./email.service";
import {FlashMessageService} from "../../flash-message/flash-messages.service";
import {SigninUser} from "./signin.model";
import {Email} from "./email.model";

@Component({
    selector: 'app-signin',
    templateUrl: './signin.component.html'
})
export class SigninComponent {
    signinForm: FormGroup;
    emailForm: FormGroup;
    submittedForm: boolean = false;
    private submittedEmailForm: boolean = false;
    private emailRegex: string = "[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@" +
                            "(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?";

    constructor(private authService: AuthService,
                private sessionStorageService: SessionStorageService,
                private emailService: EmailService,
                private flashMessageService: FlashMessageService,
                private router: Router) {}

    /**
     *  Create sign in form
     */
    ngOnInit() {
        this.signinForm = new FormGroup({
            email: new FormControl(null, [Validators.required, Validators.pattern(this.emailRegex)]),
            password: new FormControl(null, Validators.required)
        });
    }

    /**
     * Submit sign in form
     */
    onSubmit() {
        this.submittedForm = true;
        if (this.signinForm.valid){
            const user = new SigninUser(
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

    /**
     * Create new password form
     */
    onShowForm(){
        this.emailForm = new FormGroup({
            email: new FormControl(null, [Validators.required, Validators.pattern(this.emailRegex)])
        });
        document.getElementById('openEmailForm').click();
    }

    /**
     * Submit new password form
     */
    onSubmitEmail(){
        this.submittedEmailForm = true;
        if (this.emailForm.valid){
            document.getElementById('hideEmailForm').click();
            this.submittedEmailForm = false;
            const email = new Email(this.emailForm.value.email);
            this.emailService.sendEmailNewPassword(email)
                .subscribe(
                    () => this.flashMessageService.showMessage('Email with the new password was send.', 'success'),
                    error => console.error(error)
                );

        }
    }
}