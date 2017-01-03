import { Component, Input } from '@angular/core';
import { Router } from "@angular/router";
import { UsersManagementService } from "./usersManagement.service";
export var UsersManagementComponent = (function () {
    function UsersManagementComponent(usersManagementService, router) {
        this.usersManagementService = usersManagementService;
        this.router = router;
    }
    UsersManagementComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.usersManagementService.getUsers()
            .subscribe(function (users) {
            _this.users = users;
        });
    };
    UsersManagementComponent.decorators = [
        { type: Component, args: [{
                    selector: 'app-usersmanagement',
                    templateUrl: './usersManagement.component.html',
                    providers: [UsersManagementService]
                },] },
    ];
    /** @nocollapse */
    UsersManagementComponent.ctorParameters = [
        { type: UsersManagementService, },
        { type: Router, },
    ];
    UsersManagementComponent.propDecorators = {
        'users': [{ type: Input },],
    };
    return UsersManagementComponent;
}());
