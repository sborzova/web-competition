import {Component, OnInit} from '@angular/core';

import {SessionStorageService} from "../shared/session-storage.service";

@Component({
    selector: 'app-instances',
    templateUrl: './instances.component.html'
})
export class InstancesComponent implements OnInit{

    constructor(private sessionStorageService: SessionStorageService){}

    ngOnInit(){
        if (!this.showInstances()){
            document.getElementById('openModalNotView').click();
        }
    }

    showInstances(){
        let loggedIn = this.isLoggedIn();
        let competitionIsOn = this.competitionIsOn();
        let isAdmin = this.isAdmin();
        return !(!loggedIn && competitionIsOn) || isAdmin;
    }

    isAdmin(){
       return this.sessionStorageService.isAdmin();
    }

    isLoggedIn(){
        return this.sessionStorageService.isLoggedIn();
    }

    competitionIsOn(){
        return this.sessionStorageService.getCompetitionIsOn();
    }
}
