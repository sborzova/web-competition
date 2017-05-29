import {Component, OnInit} from '@angular/core';
import {FormGroup, Validators, FormControl} from "@angular/forms";
import {Router} from "@angular/router";

import {ProfileUser} from "../profile.model";
import {FlashMessageService} from "../../flash-message/flash-messages.service";
import {Password} from "./password.model";
import {ProfileService} from "../profile.service";

/**
 * Component for editing password of logged in user.
 */
@Component({
    selector: 'app-profile-edit-password',
    templateUrl: './profile-edit-password.component.html'
})
export class ProfileEditPasswordComponent implements OnInit{
    passwordForm: FormGroup;
    private password : Password;
    private user: ProfileUser;
    private submitted: boolean = false;

    /**
     * When creating component, inject dependencies.
     *
     * @param userService
     * @param flashMessageService
     * @param router
     */
    constructor(private userService: ProfileService,
                private flashMessageService: FlashMessageService,
                private router: Router) {}

    /**
     * When creating component, call function to get logged in user and
     * create edit password form.
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
     * If edit password form is valid, call function to update user with new password.
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
                        this.navigateBack();
                    },
                    error => console.error(error)
                );
        }
    }

    navigateBack(){
        this.router.navigate(['/profile/info']);
    }

    onCancel(){
        this.navigateBack();
    }
}