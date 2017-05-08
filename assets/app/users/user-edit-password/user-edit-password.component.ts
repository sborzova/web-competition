import {Component, OnInit} from "@angular/core";
import {FormGroup, FormControl, Validators} from "@angular/forms";
import {User} from "../user.model";
import {Router, ActivatedRoute} from "@angular/router";
import {UsersService} from "../users.service";
import {FlashMessageService} from "../../flash-message/flash-messages.service";

@Component({
    selector: 'app-user-edit-password',
    templateUrl: './user-edit-password.component.html'
})
export class UserEditPasswordComponent implements OnInit{
    passwordForm: FormGroup;
    private user: User;
    private submitted: boolean = false;

    constructor(private router: Router,
                private usersService: UsersService,
                private activatedRoute: ActivatedRoute,
                private flashMessageService: FlashMessageService){

    }

    /**
     *  Set to variable user user by id.
     *  Create edit user's password form.
     */
    ngOnInit(){
        let id = this.activatedRoute.snapshot.params['id'];
        this.usersService.getUser(id)
            .subscribe(
                (user: User) => {
                    this.user = user;
                    this.passwordForm = new FormGroup({
                        password: new FormControl(null, [Validators.required, Validators.minLength(6), Validators.maxLength(100)]),
                        confirmPassword: new FormControl(null, Validators.required)
                    });
                });
    }

    /**
     * Submit edit user's password form.
     */
    onSubmit(){
        this.submitted = true;
        if (this.passwordForm.valid){
            this.user.password = this.passwordForm.value.password;

            this.usersService.updateUserPassword(this.user)
                .subscribe(
                    (data) => {
                        this.flashMessageService.showMessage('Password was changed.', 'success' );
                        this.navigateBack();
                    },
                    error => console.error(error)
                );
        }
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
}