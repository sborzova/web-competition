import { Component, OnInit, OnDestroy } from "@angular/core";
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { Subscription } from "rxjs";
import { Router, ActivatedRoute, Params } from "@angular/router";

import { User } from "../user.model";
import { UsersService } from "../users.service";
import { FlashMessageService } from "../../flash-message/flash-messages.service";

@Component({
    selector: 'app-user-edit',
    templateUrl: './user-edit.component.html'
})
export class UserEditComponent implements OnInit {
    userForm: FormGroup;
    user: User;
    roles: string[] = [];
    selectedRole: string;
    submitted: boolean = false;

    constructor(private router: Router,
                private usersService: UsersService,
                private activatedRoute: ActivatedRoute,
                private flashMessageService: FlashMessageService){

    }

    ngOnInit(){
        let userId = this.activatedRoute.snapshot.params['id'];
        this.usersService.getUser(userId)
            .subscribe(
                (user: User) => {
                    this.user = user;
                    this.roles.push('admin', 'user');
                    this.selectedRole = this.user.role;
                    this.userForm = new FormGroup({
                        firstName: new FormControl(this.user.firstName, Validators.required),
                        lastName: new FormControl(this.user.lastName, Validators.required),
                        email: new FormControl(this.user.email, Validators.required)
                    });
                });
    }

    onSubmit(){
        this.submitted = true;
        if (this.userForm.valid){
            this.user.firstName = this.userForm.value.firstName;
            this.user.lastName = this.userForm.value.lastName;
            this.user.email = this.userForm.value.email;
            this.user.role = this.selectedRole;

            this.usersService.updateUser(this.user)
                .subscribe(
                    (data) => {
                        this.flashMessageService.showMessage('User was updated.', 'success' );
                        this.navigateBack();
                    },
                    error => console.error(error)
                );
        }
    }

    onCancel(){
        this.navigateBack();
    }

    navigateBack(){
        this.router.navigate(['/users']);
    }

    getValue(role: string) {
        this.selectedRole = this.roles.filter((r)=> r == role)[0];
    }
}