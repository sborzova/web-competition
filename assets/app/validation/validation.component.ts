import { Component, ViewChild, OnInit } from "@angular/core";

import { SolutionService } from "../shared/solution.service";
import { SolutionCreate } from "./solution-create.model";
import { Validation } from "./validation.model";
import { AuthService } from "../auth/auth.service";
import { FlashMessageService } from "../flash-message/flash-messages.service";
import {SessionStorageService} from "../shared/session-storage.service";

@Component({
    selector: 'app-validation',
    templateUrl: './validation.component.html'
})
export class ValidationComponent implements OnInit {
    solution: SolutionCreate = new SolutionCreate();
    @ViewChild('solution') solutionElem;

    constructor(private validationService: SolutionService,
                private sessionStorageService: SessionStorageService,
                private flashMessageService: FlashMessageService){}

    ngOnInit(){
        if (!this.showValidator()){
            document.getElementById('openModalNotView').click();
        }
    }

    showValidator(){
        let loggedIn = this.sessionStorageService.isLoggedIn();
        let competitionIsOn = this.sessionStorageService.getCompetitionIsOn();
        let isAdmin = this.sessionStorageService.isAdmin();
        return !(!loggedIn && competitionIsOn) || isAdmin;
    }

    onValidate(){
        this.validationService.successValidationHideResult();
        let solutionInput= this.solutionElem.nativeElement;

        if (solutionInput.files && solutionInput.files[0]){
            let fd = new FormData();
            fd.append('solution', solutionInput.files[0], solutionInput.files[0].name);
            this.validationService.validate(fd)
                .subscribe(
                    data => {
                        let result = JSON.parse(data);
                        if (result.status == 400){
                                this.flashMessageService.showMessage('Invalid XML format.', 'danger' );
                        }else {
                            let info = "";
                            let logs : string[] = result.obj.log;
                            for (let log of logs){
                                info += log + "\n";
                            }
                            let instanceName = result.obj.instance;
                            let property = result.obj.property;
                            for (let p of property){
                                let value : number = parseFloat(p.value);
                                switch (p.name){
                                    case 'Assigned Variables' :
                                        var assigned = value;
                                        break;
                                    case 'Room Preferences' :
                                        var room = value;
                                        break;
                                    case 'Time Preferences' :
                                        var time = value;
                                        break;
                                    case 'Student Conflicts' :
                                        var sc = value;
                                        break;
                                    case 'Distribution Preferences' :
                                        var distr = value;
                                        break;
                                    case 'Total Cost' :
                                        var total = value;
                                        break;
                                }
                            }
                            let validation = new Validation(
                                parseFloat((100 - assigned).toFixed(2)),
                                total,
                                sc,
                                time,
                                room,
                                distr,
                                info,
                                instanceName
                            );
                            this.validationService.successValidationShowResult(validation, solutionInput.files[0]);
                            this.solutionElem.nativeElement.value = "";
                        }
                    },
                    error => console.error(error)
                )
        }
        else {
            this.flashMessageService.showMessage('Insert file.', 'info' );
        }
    }

}