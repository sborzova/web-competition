import { Component, OnInit, Input } from '@angular/core';

import { UsersService } from "./users.service";
import { User } from "./user.model";
import { FlashMessageService } from "../flash-message/flash-messages.service";
import {SessionStorageService} from "../shared/session-storage.service";

@Component({
    selector: 'app-users',
    templateUrl: 'users.component.html'
})
export class UsersComponent implements OnInit {
    users : User[];
    user: User;
    fileSaver = require('file-saver');
    iconv = require('iconv-lite');

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

    toUTF8Array(str) {
        var utf8 = [];
        for (var i=0; i < str.length; i++) {
            var charcode = str.charCodeAt(i);
            if (charcode < 0x80) utf8.push(charcode);
            else if (charcode < 0x800) {
                utf8.push(0xc0 | (charcode >> 6),
                    0x80 | (charcode & 0x3f));
            }
            else if (charcode < 0xd800 || charcode >= 0xe000) {
                utf8.push(0xe0 | (charcode >> 12),
                    0x80 | ((charcode>>6) & 0x3f),
                    0x80 | (charcode & 0x3f));
            }
            // surrogate pair
            else {
                i++;
                // UTF-16 encodes 0x10000-0x10FFFF by
                // subtracting 0x10000 and splitting the
                // 20 bits of 0x0-0xFFFFF into two halves
                charcode = 0x10000 + (((charcode & 0x3ff)<<10)
                    | (str.charCodeAt(i) & 0x3ff))
                utf8.push(0xf0 | (charcode >>18),
                    0x80 | ((charcode>>12) & 0x3f),
                    0x80 | ((charcode>>6) & 0x3f),
                    0x80 | (charcode & 0x3f));
            }
        }
        return utf8;
}

}