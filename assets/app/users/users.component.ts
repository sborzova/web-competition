import { Component, OnInit, Input } from '@angular/core';

import { UsersService } from "./user.service";
import { User } from "./user.model";
import { FlashMessageService } from "../flash-message/flash-messages.service";
import { AuthService } from "../auth/auth.service";

@Component({
    selector: 'app-users',
    templateUrl: 'users.component.html'
})
export class UsersComponent implements OnInit {
    @Input() users : User[];

    constructor(private usersService: UsersService,
                private authService: AuthService,
                private flashMessageService: FlashMessageService){
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
                    this.flashMessageService.showMessage('User was deleted.', 'alert-success' );
                },
                error => console.error(error)
            );
    }

    isMe(user: User){
      return this.authService.getEmailLoggedIn() == user.email;
    }
}