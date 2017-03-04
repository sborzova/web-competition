import { Component, OnInit } from '@angular/core';
import { FormGroup, NgForm, Validators, FormControl } from "@angular/forms";
import { Router } from "@angular/router";

import { Password } from "../password.model";
import { User } from "../user.model";
import { AuthService } from "../auth.service";
import { FlashMessageService } from "../../flash-message/flash-messages.service";

@Component({
    selector: 'app-profile-edit-pass',
    templateUrl: 'user-edit-password.component.html'
})
export class UserEditPasswordComponent implements OnInit{
    myForm: FormGroup;
    private password : Password;
    private user: User;
    private submitted: boolean = false;

    constructor(private authService: AuthService,
                private flashMessageService: FlashMessageService,
                private router: Router) {}

    onSubmit(form: NgForm){
        this.submitted = true;
        if (form.valid){
            this.user.confirmPassword = form.value.current;
            this.user.newPassword = form.value.newPassword;
            this.authService.updatePassword(this.user)
                .subscribe(
                    () => {
                        this.flashMessageService.showMessage('Password was updated.', 'alert-success' );
                        this.navigateBack();
                    },
                    error => console.error(error)
                );
        }
    }

    ngOnInit(){
        this.authService.getUser()
            .subscribe(
                (user: User ) => {
                    this.user = user;
                    this.myForm = new FormGroup({
                        current: new FormControl(null, Validators.required),
                        newPassword: new FormControl(null, [Validators.required, Validators.minLength(4), Validators.maxLength(100)]),
                        confirmNew: new FormControl(null, Validators.required),
                    });
                }
            );
    }

    onCancel() {
        this.navigateBack();
    }

    private navigateBack() {
        this.router.navigate(['/#profile/info']);
    }

    isSubmitted(){
        return this.submitted;
    }
}