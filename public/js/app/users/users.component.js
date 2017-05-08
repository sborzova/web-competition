import { Component } from '@angular/core';
import { UsersService } from "./users.service";
import { FlashMessageService } from "../flash-message/flash-messages.service";
import { SessionStorageService } from "../shared/session-storage.service";
export var UsersComponent = (function () {
    function UsersComponent(usersService, sessionStorageService, flashMessageService) {
        this.usersService = usersService;
        this.sessionStorageService = sessionStorageService;
        this.flashMessageService = flashMessageService;
        this.fileSaver = require('file-saver');
    }
    /**
     *  Set to variable users all users.
     */
    UsersComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.usersService.getUsers()
            .subscribe(function (users) {
            _this.users = users;
        });
    };
    /**
     * Open modal dialog to show delete ensure question.
     *
     * @param user
     */
    UsersComponent.prototype.onDelete = function (user) {
        this.user = user;
        document.getElementById('openModalDelete').click();
    };
    /**
     *  Check if user is me.
     *
     * @param user
     * @returns {boolean} true if user is me, other way false
     */
    UsersComponent.prototype.isMe = function (user) {
        return this.sessionStorageService.getEmailLoggedIn() == user.email;
    };
    /**
     * Import sorted users in csv file and download the file.
     */
    UsersComponent.prototype.onImportIntoCsvFile = function () {
        this.sortUsers();
        var content = '';
        for (var _i = 0, _a = this.users; _i < _a.length; _i++) {
            var user = _a[_i];
            var line = user.firstName + ',' + user.lastName + ',' + user.email;
            content = content.concat(line, '\n');
        }
        var file = new File([(content)], 'users' + '.csv', { type: "text/csv;charset=utf-8" });
        this.fileSaver.saveAs(file);
    };
    /**
     * Sort users by lastname. When lastnames are equal, sort by firstname.
     */
    UsersComponent.prototype.sortUsers = function () {
        var users = this.users.sort(function compare(a, b) {
            var aLastName = a.lastName;
            var bLastName = b.lastName;
            var aFirstName = a.firstName;
            var bFirstName = b.firstName;
            if (aLastName == bLastName) {
                return (aFirstName > bFirstName) ? 1 : (aFirstName < bFirstName) ? -1 : 0;
            }
            else {
                return (aLastName < bLastName) ? -1 : 1;
            }
        });
    };
    /**
     *  Delete user.
     */
    UsersComponent.prototype.onOk = function () {
        var _this = this;
        this.usersService.deleteUser(this.user)
            .subscribe(function (result) {
            _this.user = null;
            _this.flashMessageService.showMessage('User was deleted.', 'success');
        }, function (error) { return console.error(error); });
    };
    UsersComponent.decorators = [
        { type: Component, args: [{
                    selector: 'app-users',
                    templateUrl: './users.component.html'
                },] },
    ];
    /** @nocollapse */
    UsersComponent.ctorParameters = [
        { type: UsersService, },
        { type: SessionStorageService, },
        { type: FlashMessageService, },
    ];
    return UsersComponent;
}());
