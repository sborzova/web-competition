import { Component, Input, OnInit } from '@angular/core';

import { User } from "../user.model";
import { AuthService } from "../auth.service";


@Component({
    selector: 'app-user-info',
    templateUrl: 'user.component.html'
})
export class UserInfoComponent implements OnInit {
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