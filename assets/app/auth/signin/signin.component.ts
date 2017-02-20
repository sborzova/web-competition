import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { Router } from "@angular/router";

import { User } from "../user.model";
import { AuthService } from "../auth.service";
import { ErrorService } from "../../messages/errors/error.service";
import { SuccessService } from "../../messages/successes/success.service";

@Component({
    selector: 'app-signin',
    templateUrl: 'signin.component.html'
})
export class SigninComponent {
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
                this.myForm.value.password);
            this.authService.signin(user)
                .subscribe(
                    data => {
                        localStorage.setItem('token', data.token);
                        localStorage.setItem('userId', data.userId);
                        localStorage.setItem('email', data.email);

                        if (data.isAdmin === 'true'){
                            localStorage.setItem('isAdmin', 'true');
                        }

                        this.errorService.deleteError();
                        this.router.navigate(['/#home']);
                    },
                    error => {
                        console.error(error);
                    }
                );
        }
    }

    ngOnInit() {
        this.myForm = new FormGroup({
            email: new FormControl(null, [
                Validators.required,
                Validators.pattern("[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?")
            ]),
            password: new FormControl(null, Validators.required)
        });
    }

    isSubmitted(){
        return this.submitted;
    }
}