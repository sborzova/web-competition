import { Component, OnInit, OnDestroy } from "@angular/core";
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { Subscription} from "rxjs";

import { SolutionService } from "../solution.service";
import { Validation } from "../validation.model";
import { SolutionCreate } from "../solution-create.model";
import { SolutionFindBetter } from "../solution-find-better.model";

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

    constructor(private solutionService: SolutionService) {
        this.subscription = solutionService.successValidationDelete$
            .subscribe(
                () => {
                    this.display = 'none';
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
        if (this.myForm.valid){
            this.solutionService.getBetterSolutionWithTechnique(
                new SolutionFindBetter(
                    this.validation.unassigned,
                    this.validation.total,
                    this.myForm.value.technique,
                    this.validation.instanceName)
                ).subscribe(
                    data => {

                    },
                    error => console.log(error)
            );

            this.solutionService.saveSolution(
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
}