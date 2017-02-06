import {Component, OnInit, Input} from '@angular/core';

import { UsersManagementService } from "./users-management.service";
import { User } from "./user.model";
import { SuccessService } from "../messages/successes/success.service";
import { ErrorService } from "../messages/errors/error.service";

@Component({
    selector: 'app-usersmanagement',
    templateUrl: './users-management.component.html',
    providers: [UsersManagementService]
})
export class UsersManagementComponent implements OnInit {
    @Input() users : User[];

    constructor(private usersManagementService: UsersManagementService,
                private successService: SuccessService,
                private errorService: ErrorService){

        this.errorService.deleteError();
        this.successService.deleteSuccess();
    }

    ngOnInit() {
        this.usersManagementService.getUsers()
            .subscribe(
                (users: User[] ) => {
                    this.users = users;
                }
            );
    }

}