import { Component, OnInit, OnDestroy } from "@angular/core";
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { Subscription} from "rxjs";

import { ValidationService } from "../validation.service";
import { Validation } from "../validation.model";
import {SolutionCreate} from "../solution-create.model";

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

    constructor(private validationService: ValidationService) {
        this.subscription = validationService.successValidationDelete$
            .subscribe(
                () => {
                    this.display = 'none';
                }
            );
    }

    ngOnInit(){
        this.myForm = new FormGroup({
            technique: new FormControl(null, Validators.required),
            citation: new FormControl(null, Validators.minLength(0)),
            url: new FormControl(null)
        });
        this.validationService.successValidation
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
            this.validationService.saveSolution(
                new SolutionCreate(
                    this.validation.unassigned,
                    this.validation.total,
                    this.validation.sc,
                    this.validation.time,
                    this.validation.room,
                    this.validation.distr,
                    this.validation.info,
                    this.myForm.value.technique,
                    this.myForm.value.instanceName),
                this.myForm.value.citation,
                this.myForm.value.url,
                );
            this.ngOnDestroy();
        }
    }

    ngOnDestroy(){
        this.subscription.unsubscribe();
        this.validationService.setSolutionFile(null);
    }

    isSubmitted(){
        return this.submitted;
    }
}