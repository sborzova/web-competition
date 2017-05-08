import {Component, OnInit} from '@angular/core';

import {UsersService} from "./users.service";
import {User} from "./user.model";
import {FlashMessageService} from "../flash-message/flash-messages.service";
import {SessionStorageService} from "../shared/session-storage.service";

@Component({
    selector: 'app-users',
    templateUrl: './users.component.html'
})
export class UsersComponent implements OnInit {
    users : User[];
    private user: User;
    private fileSaver = require('file-saver');

    constructor(private usersService: UsersService,
                private sessionStorageService: SessionStorageService,
                private flashMessageService: FlashMessageService){
    }

    /**
     *  Set to variable users all users.
     */
    ngOnInit() {
        this.usersService.getUsers()
            .subscribe(
                (users: User[] ) => {
                    this.users = users;
                }
            );
    }

    /**
     * Open modal dialog to show delete ensure question.
     *
     * @param user
     */
    onDelete(user: User) {
        this.user = user;
        document.getElementById('openModalDelete').click();
    }

    /**
     *  Check if user is me.
     *
     * @param user
     * @returns {boolean} true if user is me, other way false
     */
    isMe(user: User){
      return this.sessionStorageService.getEmailLoggedIn() == user.email;
    }

    /**
     * Import sorted users in csv file and download the file.
     */
    onImportIntoCsvFile(){
        this.sortUsers();
        let content = '';
        for (let user of this.users){
            let line = user.firstName + ',' + user.lastName + ',' + user.email;
            content = content.concat(line, '\n');
        }
        let file = new File([(content)], 'users' + '.csv', {type: "text/csv;charset=utf-8"});
        this.fileSaver.saveAs(file);
    }

    /**
     * Sort users by lastname. When lastnames are equal, sort by firstname.
     */
    private sortUsers() {
        let users = this.users.sort(function compare(a, b) {
            let aLastName = a.lastName;
            let bLastName = b.lastName;
            let aFirstName = a.firstName;
            let bFirstName = b.firstName;

            if (aLastName == bLastName) {
                return (aFirstName > bFirstName) ? 1 : (aFirstName < bFirstName) ? -1 : 0;
            } else {
                return (aLastName < bLastName) ? -1 : 1;
            }
        });
    }

    /**
     *  Delete user.
     */
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