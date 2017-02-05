import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormControl, NgForm} from "@angular/forms";
import { Router } from "@angular/router";

import { AuthService } from "../../auth/auth.service";
import { User } from "../user.model";

@Component({
    selector: 'app-profile-edit',
    templateUrl: 'profile-edit.component.html'
})
export class ProfileEditComponent implements OnInit {
    myForm: FormGroup;
    private user : User;

    constructor(private authService: AuthService,
                private router: Router) {}

    onSubmit(form: NgForm){
        this.user.firstName = form.value.firstName;
        this.user.lastName = form.value.lastName;
        this.user.email = form.value.email;
        this.user.password = form.value.password;

        this.authService.updateUser(this.user)
            .subscribe(
                result => {
                    console.log(result);
                    this.router.navigateByUrl('/profile/info');
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
        this.router.navigate(['/profile/info']);
    }
}