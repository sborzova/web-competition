import {Component, OnInit} from '@angular/core';

import {PreferenceService} from "./preference.service";
import {SessionStorageService} from "../shared/services/session-storage.service";

/**
 * Component to manage preference.
 */
@Component({
    selector: 'app-preference',
    templateUrl: './preference.component.html',
})
export class PreferenceComponent implements OnInit {
    competitionOn: boolean;

    /**
     * When creating component, inject dependencies.
     *
     * @param preferenceService
     * @param sessionStorageService
     */
    constructor(private preferenceService: PreferenceService,
                private sessionStorageService: SessionStorageService){}

    /**
     * When creating component, call function to get state of competition.
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