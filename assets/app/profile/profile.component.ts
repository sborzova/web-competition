import {Component, Input, OnInit, OnChanges} from '@angular/core';

import { User } from "../auth/user.model";
import { AuthService } from "../auth/auth.service";
import {ErrorService} from "../messages/errors/error.service";
import {SuccessService} from "../messages/successes/success.service";

@Component({
    selector: 'app-profile',
    templateUrl: './profile.component.html'
})
export class ProfileComponent implements OnInit {
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