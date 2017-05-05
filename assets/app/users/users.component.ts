import { Component, OnInit } from '@angular/core';

import { UsersService } from "./users.service";
import { User } from "./user.model";
import { FlashMessageService } from "../flash-message/flash-messages.service";
import {SessionStorageService} from "../shared/session-storage.service";

@Component({
    selector: 'app-users',
    templateUrl: './users.component.html'
})
export class UsersComponent implements OnInit {
    users : User[];
    user: User;
    fileSaver = require('file-saver');

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
        this.user = user;
        document.getElementById('openModalDelete').click();
    }

    isMe(user: User){
      return this.sessionStorageService.getEmailLoggedIn() == user.email;
    }

    onImportIntoCsvFile(){
        let users = this.users.sort(function compare(a,b) {
            let aLastName = a.lastName;
            let bLastName = b.lastName;
            let aFirstName = a.firstName;
            let bFirstName = b.firstName;

            if (aLastName == bLastName){
                return (aFirstName > bFirstName) ? 1 : (aFirstName < bFirstName) ? -1 : 0;
            }else {
                return (aLastName < bLastName) ? -1 : 1;
            }
        });
        let content = '';
        for (let user of this.users){
            let line = user.firstName + ',' + user.lastName + ',' + user.email;
            content = content.concat(line, '\n');
        }

        let file = new File([(content)],
            'users' + '.csv', {type: "text/csv;charset=utf-8"});
        this.fileSaver.saveAs(file);
    }

    onOk(){
        this.usersService.deleteUser(this.user)
            .subscribe(
                result => {
                    this.user = null;
                    this.flashMessageService.showMessage('User was deleted.', 'success' );
                },
                error => console.error(error)
            );
    }

}