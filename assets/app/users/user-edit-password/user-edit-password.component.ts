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
    user: User;
    submitted: boolean = false;

    constructor(private router: Router,
                private usersService: UsersService,
                private activatedRoute: ActivatedRoute,
                private flashMessageService: FlashMessageService){

    }

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

    navigateBack(){
        this.router.navigate(['/users']);
    }
}