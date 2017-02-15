import { Component, OnInit, Input } from '@angular/core';

import { UsersService } from "./user.service";
import { User } from "./user.model";
import { SuccessService } from "../messages/successes/success.service";
import { ErrorService } from "../messages/errors/error.service";

@Component({
    selector: 'app-users',
    templateUrl: 'users.component.html'
})
export class UsersComponent implements OnInit {
    @Input() users : User[];

    constructor(private usersService: UsersService,
                private successService: SuccessService,
                private errorService: ErrorService){

        this.errorService.deleteError();
        this.successService.deleteSuccess();
    }

    ngOnInit() {
        this.usersService.getUsers()
            .subscribe(
                (users: User[] ) => {
                    this.users = users;
                }
            );
    }

}