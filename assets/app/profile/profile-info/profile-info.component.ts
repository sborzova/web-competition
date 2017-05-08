import {Component, OnInit} from '@angular/core';

import {ProfileUser} from "../profile.model";
import {ProfileService} from "../profile.service";

@Component({
    selector: 'app-profile-info',
    templateUrl: './profile-info.component.html'
})
export class ProfileInfoComponent implements OnInit {
    user: ProfileUser;

    constructor(private userService: ProfileService) {
    }

    /**
     *  Set to variable user logged in user.
     */
    ngOnInit(){
        this.userService.getLoggedInUser()
            .subscribe(
                (user: ProfileUser) => {
                    this.user = user;
                },
                error => console.error(error)
            );
    }
}