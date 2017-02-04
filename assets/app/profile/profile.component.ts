import {Component, Input, OnInit, OnChanges} from '@angular/core';

import { User } from "../auth/user.model";
import { AuthService } from "../auth/auth.service";
import {ErrorService} from "../messages/errors/error.service";

@Component({
    selector: 'app-profile',
    templateUrl: './profile.component.html'
})
export class ProfileComponent implements OnInit {
    @Input() user: User;

    constructor(private authService: AuthService,
                private errorService: ErrorService) {

        this.errorService.deleteError();
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