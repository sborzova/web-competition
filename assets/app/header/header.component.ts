import {Component, OnInit} from "@angular/core";
import {Router} from "@angular/router";

import {SessionStorageService} from "../shared/services/session-storage.service";

/**
 * Component to show menu.
 */
@Component({
    selector: 'app-header',
    templateUrl: './header.component.html'
})
export class HeaderComponent implements OnInit {

    /**
     * When creating component, inject dependencies.
     *
     * @param sessionStorageService
     * @param router
     */
    constructor(private sessionStorageService: SessionStorageService,
                private router: Router) {}

    /**
     * When creating component, get state of competition.
     */
    ngOnInit(){
        this.sessionStorageService.setSessionStorageCompetition();
    }

    isLoggedIn() {
        return this.sessionStorageService.isLoggedIn();
    }

    onLogout(){
        this.sessionStorageService.logout();
        this.router.navigate(['/home']);
    }

    isAdmin(){
        return this.sessionStorageService.isAdmin();
    }

    getEmailLoggedIn(){
        return this.sessionStorageService.getEmailLoggedIn();
    }

    competitionIsOn(){
        return this.sessionStorageService.getCompetitionIsOn();
    }
}