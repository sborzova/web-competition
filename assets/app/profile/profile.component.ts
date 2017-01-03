import {Component, Input, OnInit, OnChanges} from '@angular/core';

import { User } from "../auth/user.model";
import { AuthService } from "../auth/auth.service";

@Component({
    selector: 'app-profile',
    templateUrl: './profile.component.html'
})
export class ProfileComponent implements OnInit {
    @Input() user: User;

    constructor(private authService: AuthService) {
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