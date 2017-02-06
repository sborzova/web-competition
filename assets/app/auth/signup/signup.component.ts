import { Component, OnInit } from "@angular/core";
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { Router } from "@angular/router";

import { AuthService } from "../auth.service";
import { User } from "../user.model";
import { ErrorService } from "../../messages/errors/error.service";
import {SuccessService} from "../../messages/successes/success.service";

@Component({
    selector: 'app-signup',
    templateUrl: 'signup.component.html'
})
export class SignupComponent implements OnInit {
    myForm: FormGroup;
    private submitted: boolean = false;

    constructor(private authService: AuthService,
                private router: Router,
                private errorService: ErrorService,
                private successService: SuccessService) {

        this.errorService.deleteError();
        this.successService.deleteSuccess();
    }

    onSubmit() {
            this.submitted = true;
            if (this.myForm.valid){
                const user = new User(
                    this.myForm.value.email,
                    this.myForm.value.password,
                    this.myForm.value.firstName,
                    this.myForm.value.lastName,
                );
                this.authService.signup(user)
                    .subscribe(
                        data => {
                            console.log(data);
                            this.router.navigateByUrl('home');
                        } ,
                        error => console.error(error)
                    );
            }
    }

    ngOnInit() {
        this.myForm = new FormGroup({
            firstName: new FormControl(null, [Validators.required, Validators.maxLength(100)]),
            lastName: new FormControl(null, [Validators.required, Validators.maxLength(100)]),
            email: new FormControl(null, [
                Validators.required,
                Validators.pattern("[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?")
            ]),
            password: new FormControl(null, [Validators.required, Validators.minLength(4), Validators.maxLength(100)]),
            confirmPassword: new FormControl(null, Validators.required)
        });
    }

    isSubmitted(){
        return this.submitted;
    }
}