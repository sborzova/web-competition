import { Component } from "@angular/core";
import { Router } from "@angular/router";
import { SessionStorageService } from "../shared/services/session-storage.service";
/**
 * Component to show menu.
 */
export var HeaderComponent = (function () {
    /**
     * When creating component, inject dependencies.
     *
     * @param sessionStorageService
     * @param router
     */
    function HeaderComponent(sessionStorageService, router) {
        this.sessionStorageService = sessionStorageService;
        this.router = router;
    }
    /**
     * When creating component, get state of competition.
     */
    HeaderComponent.prototype.ngOnInit = function () {
        this.sessionStorageService.setSessionStorageCompetition();
    };
    HeaderComponent.prototype.isLoggedIn = function () {
        return this.sessionStorageService.isLoggedIn();
    };
    HeaderComponent.prototype.onLogout = function () {
        this.sessionStorageService.logout();
        this.router.navigate(['/home']);
    };
    HeaderComponent.prototype.isAdmin = function () {
        return this.sessionStorageService.isAdmin();
    };
    HeaderComponent.prototype.getEmailLoggedIn = function () {
        return this.sessionStorageService.getEmailLoggedIn();
    };
    HeaderComponent.prototype.competitionIsOn = function () {
        return this.sessionStorageService.getCompetitionIsOn();
    };
    HeaderComponent.decorators = [
        { type: Component, args: [{
                    selector: 'app-header',
                    templateUrl: './header.component.html'
                },] },
    ];
    /** @nocollapse */
    HeaderComponent.ctorParameters = [
        { type: SessionStorageService, },
        { type: Router, },
    ];
    return HeaderComponent;
}());
