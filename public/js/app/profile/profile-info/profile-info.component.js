import { Component } from '@angular/core';
import { UserService } from "../../shared/user.service";
export var ProfileInfoComponent = (function () {
    function ProfileInfoComponent(userService) {
        this.userService = userService;
    }
    ProfileInfoComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.userService.getUser()
            .subscribe(function (user) {
            _this.user = user;
        }, function (error) { return console.error(error); });
    };
    ProfileInfoComponent.decorators = [
        { type: Component, args: [{
                    selector: 'app-profile-info',
                    templateUrl: './profile-info.component.html'
                },] },
    ];
    /** @nocollapse */
    ProfileInfoComponent.ctorParameters = [
        { type: UserService, },
    ];
    return ProfileInfoComponent;
}());
