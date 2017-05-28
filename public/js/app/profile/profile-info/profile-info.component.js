import { Component } from '@angular/core';
import { ProfileService } from "../profile.service";
/**
 * Component for showing profile of logged in user.
 */
export var ProfileInfoComponent = (function () {
    /**
     * When creating component, inject dependency.
     *
     * @param userService
     */
    function ProfileInfoComponent(userService) {
        this.userService = userService;
    }
    /**
     *  When creating component, call function to get logged in user.
     */
    ProfileInfoComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.userService.getLoggedInUser()
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
        { type: ProfileService, },
    ];
    return ProfileInfoComponent;
}());
