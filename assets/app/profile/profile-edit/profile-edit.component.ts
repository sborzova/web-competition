import {Component, OnInit} from '@angular/core';
import {FormGroup, Validators, FormControl} from "@angular/forms";
import {Router} from "@angular/router";

import {ProfileUser} from "../profile.model";
import {FlashMessageService} from "../../flash-message/flash-messages.service";
import {ProfileService} from "../profile.service";
import {SessionStorageService} from "../../shared/services/session-storage.service";

@Component({
    selector: 'app-profile-edit',
    templateUrl: './profile-edit.component.html'
})
export class ProfileEditComponent implements OnInit {
    userForm: FormGroup;
    private user : ProfileUser;
    private submitted: boolean = false;

    constructor(private userService: ProfileService,
                private sessionStorageService: SessionStorageService,
                private flashMessageService: FlashMessageService,
                private router: Router) {}

    /**
     * Set to variable user logged in user.
     * Create edit user form.
     */
    ngOnInit(){
        this.userService.getLoggedInUser()
            .subscribe(
                (user: ProfileUser ) => {
                    this.user = user;
                    this.userForm = new FormGroup({
                        firstName: new FormControl(this.user.firstName, Validators.required),
                        lastName: new FormControl(this.user.lastName, Validators.required),
                        email: new FormControl(this.user.email, Validators.required),
                    });
                }
            );
    }

    /**
     * Submit update user form.
     */
    onSubmit(){
        this.submitted = true;
        if (this.userForm.valid){
            this.user.firstName = this.userForm.value.firstName;
            this.user.lastName = this.userForm.value.lastName;
            this.user.email = this.userForm.value.email;

            this.userService.updateLoggedInUser(this.user)
                .subscribe(
                    (data) => {
                        this.sessionStorageService.setSessionStorageAuth(data);
                        this.flashMessageService.showMessage('Profile was updated.', 'success' );
                        this.router.navigate(['/profile/info']);
                    },
                    error => console.error(error)
                );
        }
    }
}