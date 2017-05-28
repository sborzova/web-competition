import {Component, ViewChild, OnInit} from "@angular/core";

import {SolutionService} from "../shared/services/solution.service";
import {Validation} from "./validation.model";
import {FlashMessageService} from "../flash-message/flash-messages.service";
import {SessionStorageService} from "../shared/services/session-storage.service";

@Component({
    selector: 'app-validation',
    templateUrl: './validation.component.html'
})
export class ValidationComponent implements OnInit {
    @ViewChild('solution') solutionElem;
    logMessage: string;

    /**
     *
     * @param validationService
     * @param sessionStorageService
     * @param flashMessageService
     */

    constructor(private validationService: SolutionService,
                private sessionStorageService: SessionStorageService,
                private flashMessageService: FlashMessageService){}

    /**
     * Check if validation component can be shown.
     */
    ngOnInit(){
        if (!this.showValidator()){
            document.getElementById('openModalNotView').click();
        }
    }


    /**
     *  When different file is inserted, hide result of the previous one.
     */
    onChange(){
        this.validationService.successValidationHideResult();
    }
    /**
     * Return true if validation component can be shown, other way false.
     *
     * @returns {boolean} true if logged in user is admin or competition state is off
     *  or (competition state is on and user is logged in), other way false
     */
    showValidator(){
        let isLoggedIn = this.sessionStorageService.isLoggedIn();
        let competitionIsOn = this.sessionStorageService.getCompetitionIsOn();
        let isAdmin = this.sessionStorageService.isAdmin();

        return !competitionIsOn || isAdmin || (competitionIsOn && isLoggedIn);
    }

    /**
     * Check if input for solution is empty.
     */
    onValidate(){
        this.validationService.successValidationHideResult();
        let solutionInput = this.solutionElem.nativeElement;
        if (solutionInput.files && solutionInput.files[0]){
            this.validateSolution(solutionInput.files[0]);
        }
        else {
            this.flashMessageService.showMessage('Insert file.', 'info' );
        }
    }

    /**
     *  Validate solution and show result.
     *
     * @param file - solution's file to save
     */
    validateSolution(file: any){
        let fd = new FormData();
        fd.append('solution', file, file.name);
        this.validationService.validate(fd)
            .subscribe(
                data => {
                    this.logMessage = null;
                    let result = JSON.parse(data);
                    if (result.status == 400){
                        this.flashMessageService.showMessage('Invalid XML format.', 'danger' );
                    }
                    if (result.obj.result != 'OK'){
                        let info = "";
                        let logs : string[] = result.obj.log;
                        for (let log of logs){
                            info += log + "\n";
                        }
                        this.logMessage = info;
                    }else {
                        let validation = this.createValidationWithProperties(result);
                        this.validationService.successValidationShowResult(validation, file);
                    }
                },
                error => console.error(error)
            )
    }

    /**
     * Fill validation model with result.
     *
     * @param result - result of validation
     * @returns {Validation} validation model
     */
    createValidationWithProperties(result){

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

        return validation;
    }

}