import { Component, OnInit, Input, OnDestroy } from "@angular/core";
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { Subscription } from "rxjs";
import { Router, ActivatedRoute, Params } from "@angular/router";

import { User } from "../user.model";
import { UsersService } from "../users.service";
import { FlashMessageService } from "../../flash-message/flash-messages.service";

@Component({
    selector: 'app-user-edit',
    templateUrl: 'user-edit.component.html'
})
export class UserEditComponent implements OnInit, OnDestroy {
    myForm: FormGroup;
    @Input() user: User;
    roles: string[] = [];
    selectedRole: string;
    private submitted: boolean = false;
    private subscription: Subscription;

    constructor(private router: Router,
                private usersService: UsersService,
                private activatedRoute: ActivatedRoute,
                private flashMessageService: FlashMessageService){

    }

    ngOnInit(){
        this.subscription = this.activatedRoute.queryParams
            .subscribe((params: Params) => {
                let userId = params['userId'];
                this.usersService.getUser(userId)
                    .subscribe(
                        (user: User) => {
                            this.user = user;
                            this.roles.push('admin', 'user');
                            this.selectedRole = this.user.role;
                            this.myForm = new FormGroup({
                                firstName: new FormControl(this.user.firstName, Validators.required),
                                lastName: new FormControl(this.user.lastName, Validators.required),
                                email: new FormControl(this.user.email, Validators.required)
                            });
                        });
            });
    }

    ngOnDestroy(){
        this.subscription.unsubscribe();
    }

    onSubmit(){
        this.submitted = true;
        if (this.myForm.valid){
            this.user.firstName = this.myForm.value.firstName;
            this.user.lastName = this.myForm.value.lastName;
            this.user.email = this.myForm.value.email;
            this.user.role = this.selectedRole;

            this.usersService.updateUser(this.user)
                .subscribe(
                    (data) => {
                        this.flashMessageService.showMessage('User was updated.', 'alert-success' );
                        this.navigateBack();
                    },
                    error => console.error(error)
                );
        }
    }

    isSubmitted(){
        return this.submitted;
    }

    onCancel(){
        this.navigateBack();
    }

    navigateBack(){
        this.router.navigate(['/#users']);
    }

    getValue(role: string) {
        this.selectedRole = this.roles.filter((r)=> r == role)[0];
    }
}