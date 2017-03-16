import { Component } from '@angular/core';
import { AuthService } from "../auth/auth.service";
export var InstancesComponent = (function () {
    function InstancesComponent(authService) {
        this.authService = authService;
        this.display = 'none';
    }
    InstancesComponent.prototype.ngOnInit = function () {
        if (!this.isLoggedIn()) {
            this.display = 'block';
        }
    };
    InstancesComponent.prototype.isAdmin = function () {
        return this.authService.isAdmin();
    };
    InstancesComponent.prototype.isLoggedIn = function () {
        return this.authService.isLoggedIn();
    };
    InstancesComponent.decorators = [
        { type: Component, args: [{
                    selector: 'app-instances',
                    templateUrl: 'instances.component.html'
                },] },
    ];
    /** @nocollapse */
    InstancesComponent.ctorParameters = [
        { type: AuthService, },
    ];
    return InstancesComponent;
}());
