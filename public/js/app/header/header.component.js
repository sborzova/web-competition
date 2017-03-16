import { Component } from "@angular/core";
import { AuthService } from "../auth/auth.service";
import { Router } from "@angular/router";
export var HeaderComponent = (function () {
    function HeaderComponent(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    HeaderComponent.prototype.isLoggedIn = function () {
        return this.authService.isLoggedIn();
    };
    HeaderComponent.prototype.onLogout = function () {
        this.authService.logout();
        this.router.navigate(['/#home']);
    };
    HeaderComponent.prototype.isAdmin = function () {
        return this.authService.isAdmin();
    };
    HeaderComponent.prototype.getEmailLoggedIn = function () {
        return this.authService.getEmailLoggedIn();
    };
    HeaderComponent.decorators = [
        { type: Component, args: [{
                    selector: 'app-header',
                    templateUrl: 'header.component.html'
                },] },
    ];
    /** @nocollapse */
    HeaderComponent.ctorParameters = [
        { type: AuthService, },
        { type: Router, },
    ];
    return HeaderComponent;
}());
