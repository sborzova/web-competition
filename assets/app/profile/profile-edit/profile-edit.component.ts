import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormControl } from "@angular/forms";
import { Router } from "@angular/router";

import { User } from "../user.model";
import { FlashMessageService } from "../../flash-message/flash-messages.service";
import { UserService } from "../../shared/user.service";
import {SessionStorageService} from "../../shared/session-storage.service";

@Component({
    selector: 'app-profile-edit',
    templateUrl: './profile-edit.component.html'
})
export class ProfileEditComponent implements OnInit {
    userForm: FormGroup;
    user : User;
    submitted: boolean = false;

    constructor(private userService: UserService,
                private sessionStorageService: SessionStorageService,
                private flashMessageService: FlashMessageService,
                private router: Router) {}

    onSubmit(){
        this.submitted = true;
        if (this.userForm.valid){
            this.user.firstName = this.userForm.value.firstName;
            this.user.lastName = this.userForm.value.lastName;
            this.user.email = this.userForm.value.email;

            this.userService.updateUser(this.user)
                .subscribe(
                    (data) => {
                        this.sessionStorageService.setSessionStorageAuth(data);
                        this.flashMessageService.showMessage('Profile was updated.', 'success' );
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
                    this.userForm = new FormGroup({
                        firstName: new FormControl(this.user.firstName, Validators.required),
                        lastName: new FormControl(this.user.lastName, Validators.required),
                        email: new FormControl(this.user.email, Validators.required),
                    });
                }
            );
    }

    private navigateBack() {
        this.router.navigate(['/profile/info']);
    }
}