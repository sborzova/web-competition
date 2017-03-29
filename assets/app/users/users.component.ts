import { Component, OnInit, Input } from '@angular/core';

import { UsersService } from "./users.service";
import { User } from "./user.model";
import { FlashMessageService } from "../flash-message/flash-messages.service";
import { AuthService } from "../auth/auth.service";
import {SessionStorageService} from "../shared/session-storage.service";

@Component({
    selector: 'app-users',
    templateUrl: 'users.component.html'
})
export class UsersComponent implements OnInit {
    @Input() users : User[];

    constructor(private usersService: UsersService,
                private sessionStorageService: SessionStorageService,
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
                    this.flashMessageService.showMessage('User was deleted.', 'success' );
                },
                error => console.error(error)
            );
    }

    isMe(user: User){
      return this.sessionStorageService.getEmailLoggedIn() == user.email;
    }
}