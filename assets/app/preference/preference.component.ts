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

    ngOnInit(){
        this.preferenceService.getValueCompetitionIsOn()
            .subscribe(
                (value : boolean) => {
                    this.competitionOn = value;
                },
                error => console.error(error)
            )
    }

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