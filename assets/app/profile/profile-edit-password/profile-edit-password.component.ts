import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormControl } from "@angular/forms";
import { Router } from "@angular/router";

import { User } from "../user.model";
import { FlashMessageService } from "../../flash-message/flash-messages.service";
import { Password } from "./password.model";
import { UserService } from "../../shared/user.service";

@Component({
    selector: 'app-profile-edit-password',
    templateUrl: './profile-edit-password.component.html'
})
export class ProfileEditPasswordComponent implements OnInit{
    passwordForm: FormGroup;
    password : Password;
    user: User;
    submitted: boolean = false;

    constructor(private userService: UserService,
                private flashMessageService: FlashMessageService,
                private router: Router) {}

    onSubmit(){
        this.submitted = true;
        if (this.passwordForm.valid){
            this.user.confirmPassword = this.passwordForm.value.current;
            this.user.newPassword = this.passwordForm.value.newPassword;
            this.userService.updatePassword(this.user)
                .subscribe(
                    () => {
                        this.flashMessageService.showMessage('Password was updated.', 'success' );
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
                    this.passwordForm = new FormGroup({
                        current: new FormControl(null, Validators.required),
                        newPassword: new FormControl(null, [Validators.required, Validators.minLength(6), Validators.maxLength(100)]),
                        confirmNew: new FormControl(null, Validators.required),
                    });
                }
            );
    }

    private navigateBack() {
        this.router.navigate(['/#profile/info']);
    }
}