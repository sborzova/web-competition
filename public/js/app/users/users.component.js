import { Component, Input } from '@angular/core';
import { UsersService } from "./users.service";
import { FlashMessageService } from "../flash-message/flash-messages.service";
import { SessionStorageService } from "../shared/session-storage.service";
export var UsersComponent = (function () {
    function UsersComponent(usersService, sessionStorageService, flashMessageService) {
        this.usersService = usersService;
        this.sessionStorageService = sessionStorageService;
        this.flashMessageService = flashMessageService;
    }
    UsersComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.usersService.getUsers()
            .subscribe(function (users) {
            _this.users = users;
        });
    };
    UsersComponent.prototype.onDelete = function (user) {
        var _this = this;
        this.usersService.deleteUser(user)
            .subscribe(function (result) {
            _this.flashMessageService.showMessage('User was deleted.', 'alert-success');
        }, function (error) { return console.error(error); });
    };
    UsersComponent.prototype.isMe = function (user) {
        return this.sessionStorageService.getEmailLoggedIn() == user.email;
    };
    UsersComponent.decorators = [
        { type: Component, args: [{
                    selector: 'app-users',
                    templateUrl: 'users.component.html'
                },] },
    ];
    /** @nocollapse */
    UsersComponent.ctorParameters = [
        { type: UsersService, },
        { type: SessionStorageService, },
        { type: FlashMessageService, },
    ];
    UsersComponent.propDecorators = {
        'users': [{ type: Input },],
    };
    return UsersComponent;
}());
