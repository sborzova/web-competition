import { Component, Input, OnInit } from '@angular/core';

import { User } from "../user.model";
import { AuthService } from "../auth.service";
import { ErrorService } from "../../messages/errors/error.service";
import { SuccessService } from "../../messages/successes/success.service";


@Component({
    selector: 'app-user-info',
    templateUrl: 'user.component.html'
})
export class UserInfoComponent implements OnInit {
    @Input() user: User;

    constructor(private authService: AuthService,
                private errorService: ErrorService,
                private successService: SuccessService) {

        this.errorService.deleteError();
        this.successService.deleteSuccess();
    }

    ngOnInit(){
        this.authService.getUser()
            .subscribe(
                (user: User ) => {
                    this.user = user;
                }
            );
    }
}