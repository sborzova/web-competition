import { Component, OnInit, Input } from '@angular/core';

import { UsersService } from "./user.service";
import { User } from "./user.model";
import {FlashMessagesService} from "angular2-flash-messages";

@Component({
    selector: 'app-users',
    templateUrl: 'users.component.html'
})
export class UsersComponent implements OnInit {
    @Input() users : User[];

    constructor(private usersService: UsersService,
                private flashMessagesService: FlashMessagesService){
    }

    ngOnInit() {
        this.usersService.getUsers()
            .subscribe(
                (users: User[] ) => {
                    this.users = users;
                }
            );
    }

    onDelete(user: User) {
        this.usersService.deleteUser(user)
            .subscribe(
                result => {
                    this.flashMessagesService.grayOut(true);
                    this.flashMessagesService.show('User was deleted.', { cssClass: 'alert-success', timeout:1700 } );
                },
                error => console.error(error)
            );
    }
}