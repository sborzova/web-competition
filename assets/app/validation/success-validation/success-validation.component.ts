import { Component, OnInit, OnDestroy } from "@angular/core";
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { Subscription} from "rxjs";

import { SolutionService } from "../../shared/solution.service";
import { Validation } from "../validation.model";
import { SolutionFindWorse } from "../solution-find-worse.model";
import { SolutionCreate } from "../solution-create.model";
import {SessionStorageService} from "../../shared/session-storage.service";
import {Solution} from "../../shared/solution.model";
import {Instance} from "../instance.model";
import {Author} from "../../shared/author.model";
import {FlashMessageService} from "../../flash-message/flash-messages.service";

@Component({
    selector: 'app-success-validation',
    templateUrl: './success-validation.component.html'
})
export class SuccessValidationComponent implements OnInit, OnDestroy {
    validation: Validation;
    display = 'none';
    subscription: Subscription;
    solutionForm: FormGroup;
    submitted: boolean = false;
    citationMissing: boolean = false;

    constructor(private solutionService: SolutionService,
                private sessionStorageService: SessionStorageService,
                private flashMessageService: FlashMessageService) {

        this.subscription = solutionService.successValidationDelete$
            .subscribe(
                () => {
                    this.display = 'none';
                    this.solutionForm.reset();
                    this.submitted = false;
                    this.citationMissing = false;
                }
            );
    }

    ngOnInit(){
        this.solutionForm = new FormGroup({
            technique: new FormControl(null, Validators.required),
            citation: new FormControl(null),
            url: new FormControl(null)
        });
        this.solutionService.successValidation
            .subscribe(
                (validation: Validation) => {
                    this.validation = validation;
                    this.display = 'block';
                }
            );
    }

    onSubmit(){
        this.submitted = true;
        if (this.solutionForm.value.url && !this.solutionForm.value.citation){
            this.citationMissing = true;
            return;
        }
        if (this.solutionForm.valid){
            this.solutionService.findDuplicateSolution(
                new Solution(
                    this.validation.unassigned,
                    this.validation.total,
                    this.validation.sc,
                    this.validation.time,
                    this.validation.room,
                    this.validation.distr,
                    this.solutionForm.value.technique,
                    '',
                    null,
                    null,
                    new Instance(this.validation.instanceName))
                ).subscribe(
                (solution: Solution) => {
                    if (solution) {
                        let date = new Date(solution.submissionTime);
                        this.flashMessageService.showMessage(
                            'Solution has the same unassigned variables, total cost, time preferences, ' +
                            'room preferences, distribution preferences and technique as your other ' +
                            'solution uploaded to the system on ' + this.getDateTime(date) +
                            ', it is not ' + 'uploaded.', 'info');
                        return;
                    }else {
                        this.solutionService.uploadSolution(
                            new SolutionCreate(
                                this.validation.unassigned,
                                this.validation.total,
                                this.validation.sc,
                                this.validation.time,
                                this.validation.room,
                                this.validation.distr,
                                this.validation.info,
                                this.solutionForm.value.technique,
                                this.validation.instanceName),
                            this.solutionForm.value.citation,
                            this.solutionForm.value.url,
                            );
                        }
                    },
                    error => console.log(error)
            );
        }
    }

    ngOnDestroy(){
        this.subscription.unsubscribe();
        this.solutionService.setSolutionFile(null);
    }

    competitionIsOn(){
        return this.sessionStorageService.getCompetitionIsOn();
    }

    getDateTime(date: Date){
        let result = this.getNameOfMonth(date.getMonth()) + ' ' + date.getDate() + ', ' + date.getFullYear() + ' at ';
        const hours = date.getHours();
        if (hours < 12){
            result += date.getHours() + ':' + this.fulfillZero(date.getMinutes()) + ':' + this.fulfillZero(date.getSeconds()) + ' AM';
        }else if (hours == 12){
            result += date.getHours() + ':' + this.fulfillZero(date.getMinutes()) + ':' + this.fulfillZero(date.getSeconds()) + ' PM'
        }else {
            result += date.getHours()-10 + ':' + this.fulfillZero(date.getMinutes()) + ':' + this.fulfillZero(date.getSeconds()) + ' PM'
        }
        return result;
    }

    fulfillZero(number: number){
        if (number < 10){
            return '0' + number;
        }else {
            return number.toString();
        }
    }

    getNameOfMonth(number: number){
        switch (number){
            case 0 :
                return 'Jan';
            case 1:
                return 'Feb';
            case 2:
                return 'Mar';
            case 3:
                return 'Apr';
            case 4:
                return 'May';
            case 5:
                return 'Jun';
            case 6:
                return 'Jul';
            case 7:
                return 'Aug';
            case 8:
                return 'Sep';
            case 9:
                return 'Oct';
            case 10:
                return 'Nov';
            case 11:
                return 'Dec';
        }
    }
}