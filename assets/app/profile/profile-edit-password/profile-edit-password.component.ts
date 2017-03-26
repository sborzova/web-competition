import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormControl } from "@angular/forms";
import { Router } from "@angular/router";

import { User } from "../user.model";
import { FlashMessageService } from "../../flash-message/flash-messages.service";
import { Password } from "./password.model";
import { UserService } from "../../shared/user.service";

@Component({
    selector: 'app-profile-edit-password',
    templateUrl: 'profile-edit-password.component.html'
})
export class ProfileEditPasswordComponent implements OnInit{
    myForm: FormGroup;
    private password : Password;
    private user: User;
    private submitted: boolean = false;

    constructor(private userService: UserService,
                private flashMessageService: FlashMessageService,
                private router: Router) {}

    onSubmit(){
        this.submitted = true;
        if (this.myForm.valid){
            this.user.confirmPassword = this.myForm.value.current;
            this.user.newPassword = this.myForm.value.newPassword;
            this.userService.updatePassword(this.user)
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
        this.userService.getUser()
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

    private navigateBack() {
        this.router.navigate(['/#profile/info']);
    }

    isSubmitted(){
        return this.submitted;
    }
}