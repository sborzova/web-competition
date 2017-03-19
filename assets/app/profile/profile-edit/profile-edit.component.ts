import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormControl } from "@angular/forms";
import { Router } from "@angular/router";

import { User } from "../user.model";
import { FlashMessageService } from "../../flash-message/flash-messages.service";
import { UserService } from "../../shared/user.service";
import { AuthService } from "../../auth/auth.service";
import {SessionStorageService} from "../../shared/session-storage.service";

@Component({
    selector: 'app-profile-edit',
    templateUrl: 'profile-edit.component.html'
})
export class ProfileEditComponent implements OnInit {
    myForm: FormGroup;
    private user : User;
    private submitted: boolean = false;

    constructor(private userService: UserService,
                private sessionStorageService: SessionStorageService,
                private flashMessageService: FlashMessageService,
                private router: Router) {}

    onSubmit(){
        this.submitted = true;
        if (this.myForm.valid){
            this.user.firstName = this.myForm.value.firstName;
            this.user.lastName = this.myForm.value.lastName;
            this.user.email = this.myForm.value.email;

            this.userService.updateUser(this.user)
                .subscribe(
                    (data) => {
                        this.sessionStorageService.setSessionStorageAuth(data);
                        this.flashMessageService.showMessage('Profile was updated.', 'alert-success' );
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
                        firstName: new FormControl(this.user.firstName, Validators.required),
                        lastName: new FormControl(this.user.lastName, Validators.required),
                        email: new FormControl(this.user.email, Validators.required),
                    });
                }
            );
    }

    onCancel() {
        this.navigateBack();
    }

    isSubmitted(){
        return this.submitted;
    }

    private navigateBack() {
        this.router.navigate(['/#profile/info']);
    }
}