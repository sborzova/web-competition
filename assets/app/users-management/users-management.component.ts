import {Component, OnInit, Input} from '@angular/core';
import { Router } from "@angular/router";

import { UsersManagementService } from "./users-management.service";
import { User } from "./user.model";

@Component({
    selector: 'app-usersmanagement',
    templateUrl: './users-management.component.html',
    providers: [UsersManagementService]
})
export class UsersManagementComponent implements OnInit {
    @Input() users : User[];

    constructor(private usersManagementService: UsersManagementService,
                private router: Router){}

    ngOnInit() {
        this.usersManagementService.getUsers()
            .subscribe(
                (users: User[] ) => {
                    this.users = users;
                }
            );
    }
}