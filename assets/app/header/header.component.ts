import {Component, OnInit} from "@angular/core";
import { Router } from "@angular/router";
import {SessionStorageService} from "../shared/session-storage.service";

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html'
})
export class HeaderComponent implements OnInit {

    constructor(private sessionStorageService: SessionStorageService,
                private router: Router) {}

    ngOnInit(){
        this.sessionStorageService.setSessionStorageCompetitionIsOn();
    }

    isLoggedIn() {
        return this.sessionStorageService.isLoggedIn();
    }

    onLogout(){
        this.sessionStorageService.logout();
        this.router.navigate(['/#home']);
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