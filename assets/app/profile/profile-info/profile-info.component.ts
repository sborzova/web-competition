import {Component, OnInit} from '@angular/core';

import {ProfileUser} from "../profile.model";
import {ProfileService} from "../profile.service";

/**
 * Component for showing profile of logged in user.
 */
@Component({
    selector: 'app-profile-info',
    templateUrl: './profile-info.component.html'
})
export class ProfileInfoComponent implements OnInit {
    user: ProfileUser;

    /**
     * When creating component, inject dependency.
     *
     * @param userService
     */
    constructor(private userService: ProfileService) {
    }

    /**
     *  When creating component, call function to get logged in user.
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