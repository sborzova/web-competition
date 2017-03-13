import { Component, Input, OnInit } from '@angular/core';

import { AuthService } from "../../auth/auth.service";
import { User } from "../user.model";


@Component({
    selector: 'app-profile-info',
    templateUrl: 'profile-info.component.html'
})
export class ProfileInfoComponent implements OnInit {
    @Input() user: User;

    constructor(private authService: AuthService) {
    }

    ngOnInit(){
        this.authService.getUser()
            .subscribe(
                (user: User ) => {
                    this.user = user;
                },
                error => console.error(error)
            );
    }
}