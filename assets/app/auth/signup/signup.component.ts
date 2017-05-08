import {Component, OnInit} from "@angular/core";
import {FormGroup, FormControl, Validators} from "@angular/forms";
import {Router} from "@angular/router";

import {AuthService} from "../auth.service";
import {FlashMessageService} from "../../flash-message/flash-messages.service";
import {SignupUser} from "./signup.model";

@Component({
    selector: 'app-signup',
    templateUrl: './signup.component.html'
})
export class SignupComponent implements OnInit {
    signupForm: FormGroup;
    submitted: boolean = false;
    private emailRegex: string = "[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@" +
                                    "(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?";

    constructor(private authService: AuthService,
                private router: Router,
                private flashMessageService: FlashMessageService) {
    }

    /**
     * Create signup form
     */
    ngOnInit() {
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
    }

    /**
     * Submit signup form
     */
    onSubmit() {
            this.submitted = true;
            if (this.signupForm.valid){
                const user = new SignupUser(
                    this.signupForm.value.email,
                    this.signupForm.value.password,
                    this.signupForm.value.firstName,
                    this.signupForm.value.lastName,
                );
                this.authService.signup(user)
                    .subscribe(
                        user => {
                            this.flashMessageService.showMessage('Account created.', 'success'  );
                            this.router.navigateByUrl('home');
                        } ,
                        error => console.error(error)
                    );
            }
    }

}