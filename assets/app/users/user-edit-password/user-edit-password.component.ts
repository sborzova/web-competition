import { Component, OnInit, Input } from "@angular/core";
import {FormGroup, FormControl, Validators} from "@angular/forms";
import {User} from "../user.model";
import {Subscription} from "rxjs";
import {Router, ActivatedRoute, Params} from "@angular/router";
import {UsersService} from "../user.service";
import {FlashMessageService} from "../../flash-message/flash-messages.service";

@Component({
    selector: 'app-user-edit-password',
    templateUrl: 'user-edit-password.component.html'
})
export class UserEditPasswordComponent{
    myForm: FormGroup;
    @Input() user: User;
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
                            this.myForm = new FormGroup({
                                password: new FormControl(null, Validators.required)
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
            this.user.password = this.myForm.value.password;

            this.usersService.updateUserPassword(this.user)
                .subscribe(
                    (data) => {
                        this.flashMessageService.showMessage('Password was changed.', 'alert-success' );
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
}