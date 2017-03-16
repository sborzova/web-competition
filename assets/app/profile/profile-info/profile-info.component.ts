import { Component, Input, OnInit } from '@angular/core';

import { User } from "../user.model";
import { UserService } from "../../shared/user.service";


@Component({
    selector: 'app-profile-info',
    templateUrl: 'profile-info.component.html'
})
export class ProfileInfoComponent implements OnInit {
    @Input() user: User;

    constructor(private userService: UserService) {
    }

    ngOnInit(){
        this.userService.getUser()
            .subscribe(
                (user: User ) => {
                    this.user = user;
                },
                error => console.error(error)
            );
    }
}