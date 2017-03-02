import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormControl, NgForm } from "@angular/forms";
import { Router } from "@angular/router";

import { AuthService } from "../auth.service";
import { User } from "../user.model";
import { FlashMessagesService } from "angular2-flash-messages";

@Component({
    selector: 'app-profile-edit',
    templateUrl: 'user-edit.component.html'
})
export class UserEditComponent implements OnInit {
    myForm: FormGroup;
    private user : User;

    constructor(private authService: AuthService,
                private flashMessagesService: FlashMessagesService,
                private router: Router) {}

    onSubmit(form: NgForm){
        this.user.firstName = form.value.firstName;
        this.user.lastName = form.value.lastName;
        this.user.email = form.value.email;
        this.user.password = form.value.password;

        this.authService.updateUser(this.user)
            .subscribe(
                user => {
                    this.flashMessagesService.grayOut(true);
                    this.flashMessagesService.show('Profile was updated.', { cssClass: 'alert-success', timeout:1700 } );
                    this.navigateBack();
                },
                error => console.error(error)
            );
    }

    ngOnInit(){
        this.authService.getUser()
            .subscribe(
                (user: User ) => {
                    this.user = user;
                    this.myForm = new FormGroup({
                        firstName: new FormControl(this.user.firstName, Validators.required),
                        lastName: new FormControl(this.user.lastName, Validators.required),
                        email: new FormControl(this.user.email),
                        password: new FormControl(this.user.password),
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
}