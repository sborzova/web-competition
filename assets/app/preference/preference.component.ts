import {Component, OnInit} from '@angular/core';

import {PreferenceService} from "./preference.service";
import {FlashMessageService} from "../flash-message/flash-messages.service";
import {SessionStorageService} from "../shared/session-storage.service";

@Component({
    selector: 'app-preference',
    templateUrl: './preference.component.html'
})
export class PreferenceComponent implements OnInit {
    value: boolean;

    constructor(private preferenceService: PreferenceService,
                private flashMessageService: FlashMessageService,
                private sessionStorageService: SessionStorageService){}

    ngOnInit(){
        this.preferenceService.getValueCompetitionIsOn()
            .subscribe(
                (value : boolean) => {
                    this.value = value;
                },
                error => console.error(error)
            )
    }
    //
    // onChange(){
    //     this.preferenceService.updateValueCompetitionIsOn(!this.value)
    //         .subscribe(
    //             () => {
    //                 this.flashMessageService.showMessage('Preference was updated.', 'alert-success');
    //                 this.sessionStorageService.setSessionStorageCompetitionIsOn();
    //             },
    //             error => console.error(error)
    //         )
    // }
}