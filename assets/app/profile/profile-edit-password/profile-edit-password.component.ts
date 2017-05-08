import {Component, OnInit} from '@angular/core';
import {FormGroup, Validators, FormControl} from "@angular/forms";
import {Router} from "@angular/router";

import {ProfileUser} from "../profile.model";
import {FlashMessageService} from "../../flash-message/flash-messages.service";
import {Password} from "./password.model";
import {ProfileService} from "../profile.service";

@Component({
    selector: 'app-profile-edit-password',
    templateUrl: './profile-edit-password.component.html'
})
export class ProfileEditPasswordComponent implements OnInit{
    passwordForm: FormGroup;
    private password : Password;
    private user: ProfileUser;
    private submitted: boolean = false;

    constructor(private userService: ProfileService,
                private flashMessageService: FlashMessageService,
                private router: Router) {}

    /**
     * Set to variable user logged in user.
     * Create new password form.
     */
    ngOnInit(){
        this.userService.getLoggedInUser()
            .subscribe(
                (user: ProfileUser ) => {
                    this.user = user;
                    this.passwordForm = new FormGroup({
                        current: new FormControl(null, Validators.required),
                        newPassword: new FormControl(null, [Validators.required, Validators.minLength(6), Validators.maxLength(100)]),
                        confirmNew: new FormControl(null, Validators.required),
                    });
                }
            );
    }

    /**
     * Submit new password form.
     */
    onSubmit(){
        this.submitted = true;
        if (this.passwordForm.valid){
            this.user.confirmPassword = this.passwordForm.value.current;
            this.user.newPassword = this.passwordForm.value.newPassword;
            this.userService.updatePassword(this.user)
                .subscribe(
                    () => {
                        this.flashMessageService.showMessage('Password was updated.', 'success' );
                        this.router.navigate(['/profile/info']);
                    },
                    error => console.error(error)
                );
        }
    }
}