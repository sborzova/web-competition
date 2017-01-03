import { Component, Input } from '@angular/core';
import { AuthService } from "../auth/auth.service";
export var ProfileComponent = (function () {
    function ProfileComponent(authService) {
        this.authService = authService;
    }
    ProfileComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.authService.getUser()
            .subscribe(function (user) {
            _this.user = user;
        });
    };
    ProfileComponent.decorators = [
        { type: Component, args: [{
                    selector: 'app-profile',
                    templateUrl: './profile.component.html'
                },] },
    ];
    /** @nocollapse */
    ProfileComponent.ctorParameters = [
        { type: AuthService, },
    ];
    ProfileComponent.propDecorators = {
        'user': [{ type: Input },],
    };
    return ProfileComponent;
}());
