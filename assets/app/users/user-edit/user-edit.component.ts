import {Component, OnInit} from "@angular/core";
import {FormGroup, FormControl, Validators} from "@angular/forms";
import {Router, ActivatedRoute} from "@angular/router";

import {User} from "../user.model";
import {UsersService} from "../users.service";
import {FlashMessageService} from "../../flash-message/flash-messages.service";

@Component({
    selector: 'app-user-edit',
    templateUrl: './user-edit.component.html'
})
export class UserEditComponent implements OnInit{
    userForm: FormGroup;
    passwordForm: FormGroup;
    private user: User;
    private savedRole: string;
    private roles: string[] = [];
    private selectedRole: string;
    private submitted: boolean = false;

    constructor(private router: Router,
                private usersService: UsersService,
                private activatedRoute: ActivatedRoute,
                private flashMessageService: FlashMessageService){

    }

    /**
     *  Set to variable user user by id.
     *  Create edit user form.
     */
    ngOnInit(){
        let userId = this.activatedRoute.snapshot.params['id'];
        this.usersService.getUser(userId)
            .subscribe(
                (user: User) => {
                    this.user = user;
                    this.roles.push('admin', 'user');
                    this.savedRole = this.user.role;
                    this.selectedRole = this.user.role;
                    this.userForm = new FormGroup({
                        firstName: new FormControl(this.user.firstName, Validators.required),
                        lastName: new FormControl(this.user.lastName, Validators.required),
                        email: new FormControl(this.user.email, Validators.required)
                    });
                });
    }

    /**
     * Submit user edit form.
     */
    onSubmit(){
        this.submitted = true;
        if (this.userForm.valid && !this.passwordForm){
            this.user.firstName = this.userForm.value.firstName;
            this.user.lastName = this.userForm.value.lastName;
            this.user.email = this.userForm.value.email;
            this.user.role = this.savedRole;
            this.user.confirmPassword = null;
            this.updateUser(this.user);
            return;
        }
        if (this.userForm.valid && this.passwordForm && this.passwordForm.valid){
            this.user.firstName = this.userForm.value.firstName;
            this.user.lastName = this.userForm.value.lastName;
            this.user.email = this.userForm.value.email;
            this.user.role = this.selectedRole;
            this.user.confirmPassword = this.passwordForm.value.password;
            this.updateUser(this.user);
        }
    }

    /**
     * Call function to update user.
     *
     * @param user
     */
    updateUser(user: User){
        this.usersService.updateUser(user)
            .subscribe(
                (data) => {
                    this.flashMessageService.showMessage('User was updated.', 'success' );
                    this.navigateBack();
                },
                error => console.error(error)
            );
    }

    onCancel(){
        this.navigateBack();
    }

    /**
     * Navigate to route Users Management.
     */
    navigateBack(){
        this.router.navigate(['/users']);
    }

    /**
     * Get selected role from edit user form.
     *
     * @param role
     */
    getValue(role: string) {
        this.selectedRole = this.roles.filter( r => r == role)[0];
        this.passwordForm = null;
        if (this.savedRole != this.selectedRole){
            this.passwordForm = new FormGroup({
                password: new FormControl(null, Validators.required)
            })
        }
    }
}