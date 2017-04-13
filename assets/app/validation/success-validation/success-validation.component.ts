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
    myForm: FormGroup;
    private submitted: boolean = false;
    private citationMissing: boolean = false;

    constructor(private solutionService: SolutionService,
                private sessionStorageService: SessionStorageService,
                private flashMessageService: FlashMessageService) {

        this.subscription = solutionService.successValidationDelete$
            .subscribe(
                () => {
                    this.display = 'none';
                    this.myForm.reset();
                    this.submitted = false;
                    this.citationMissing = false;
                }
            );
    }

    ngOnInit(){
        this.myForm = new FormGroup({
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
        if (this.myForm.value.url && !this.myForm.value.citation){
            this.citationMissing = true;
            return;
        }
        if (this.myForm.valid){
            this.solutionService.findDuplicateSolution(
                new Solution(
                    this.validation.unassigned,
                    this.validation.total,
                    this.validation.sc,
                    this.validation.time,
                    this.validation.room,
                    this.validation.distr,
                    this.myForm.value.technique,
                    '',
                    null,
                    null,
                    new Instance(this.validation.instanceName))
                ).subscribe(
                (solution: Solution) => {
                    if (solution.postDate) {
                        this.flashMessageService.showMessage(
                            'Solution has the same unassigned variables, total cost, time preferences, ' +
                            'room preferences, distribution preferences and technique as your other ' +
                            'solution uploaded to the system ' + ', it is not ' +
                            'uploaded.', 'info');
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
                                this.myForm.value.technique,
                                this.validation.instanceName),
                            this.myForm.value.citation,
                            this.myForm.value.url,
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

    isSubmitted(){
        return this.submitted;
    }

    isCitationMissing(){
        return this.citationMissing;
    }

    competitionIsOn(){
        return this.sessionStorageService.getCompetitionIsOn();
    }
}