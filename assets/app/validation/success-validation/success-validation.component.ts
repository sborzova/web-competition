import { Component, OnInit, OnDestroy } from "@angular/core";
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { Subscription} from "rxjs";

import { SolutionService } from "../../shared/solution.service";
import { Validation } from "../validation.model";
import { SolutionFindWorse } from "../solution-find-worse.model";
import { SolutionCreate } from "../solution-create.model";
import {SessionStorageService} from "../../shared/session-storage.service";
import {Solution} from "../../shared/solution.model";

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
                private sessionStorageService: SessionStorageService) {

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
            // this.solutionService.getWorseSolutions(
            //     new SolutionFindWorse(
            //         this.validation.unassigned,
            //         this.validation.total,
            //         this.myForm.value.technique,
            //         this.validation.instanceName)
            //     ).subscribe(
            //     (solutions: Solution[]) => {
            //             solutions.push(new Solution(
            //                 this.validation.unassigned,
            //                 this.validation.total,
            //             ));
            //             solutions.sort(function (a, b) {
            //                 let aUnassigned = a.unassigned;
            //                 let bUnassigned = b.unassigned;
            //                 let aTotal = a.total;
            //                 let bTotal = b.total;
            //
            //                 if (aUnassigned == bUnassigned){
            //                     return (aTotal < bTotal) ? -1 : (aTotal >= bTotal) ? 1 : 0;
            //                 }else {
            //                     return (aUnassigned > bUnassigned) ? -1 : 1;
            //                 }
            //             });
            //             let worseSolutions: Solution [] = [];
            //             let i : number = 0;
            //             while(i < solutions.length && solutions[i].solutionId){
            //                 worseSolutions.push(solutions[i]);
            //                 i++;
            //             }
            //             if (worseSolutions.length > 0){
            //                 this.solutionService.worseSolutionsShow(worseSolutions);
            //             }
            //         },
            //         error => console.log(error)
            // );

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