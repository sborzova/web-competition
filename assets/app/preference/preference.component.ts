import {Component, OnInit} from '@angular/core';

import {PreferenceService} from "./preference.service";
import {SessionStorageService} from "../shared/session-storage.service";

@Component({
    selector: 'app-preference',
    templateUrl: './preference.component.html',
    styleUrls: ['preference.component.css']
})
export class PreferenceComponent implements OnInit {
    competitionOn: boolean;

    constructor(private preferenceService: PreferenceService,
                private sessionStorageService: SessionStorageService){}

    /**
     * Set to variable compeitionOn competition state.
     */
    ngOnInit(){
        this.preferenceService.getValueCompetitionIsOn()
            .subscribe(
                (value : boolean) => {
                    this.competitionOn = value;
                },
                error => console.error(error)
            )
    }

    /**
     * Set competition state to during is on.
     */
    onTurnOn(){
        this.competitionOn = true;
        this.preferenceService.updateValueCompetitionIsOn(this.competitionOn)
            .subscribe(
                () => {
                    this.sessionStorageService.setSessionStorageCompetitionIsOn();
                },
                error => console.error(error)
            )
    }

    /**
     * Set competition state to during is off.
     */
    onTurnOff(){
        this.competitionOn = false;
        this.preferenceService.updateValueCompetitionIsOn(this.competitionOn)
            .subscribe(
                () => {
                    this.sessionStorageService.setSessionStorageCompetitionIsOff();
                },
                error => console.error(error)
            )
    }
}