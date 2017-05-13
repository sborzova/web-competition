import {Component, OnInit, OnDestroy} from "@angular/core";
import {FormGroup, FormControl, Validators} from "@angular/forms";
import {Subscription} from "rxjs";

import {SolutionService} from "../../shared/services/solution.service";
import {Validation} from "../validation.model";
import {SolutionCreate} from "../solution-create.model";
import {SessionStorageService} from "../../shared/services/session-storage.service";
import {Solution} from "../../shared/models/solution.model";
import {FlashMessageService} from "../../flash-message/flash-messages.service";
import {Instance} from "../../shared/models/instance.model";

@Component({
    selector: 'app-success-validation',
    templateUrl: './success-validation.component.html'
})
export class SuccessValidationComponent implements OnInit, OnDestroy {
    private display = 'none';
    private subscription: Subscription;
    private submitted: boolean = false;
    private fileName: string;
    private citationMissing: boolean = false;
    validation: Validation;
    solutionForm: FormGroup;
    showUploadForm: boolean;

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
                    this.setShowUploadForm();
                }
            );
    }

    /**
     * Show result of validation. Create upload solution form.
     */
    ngOnInit(){
        this.solutionForm = new FormGroup({
            technique: new FormControl(null, Validators.required),
            citation: new FormControl(null),
            url: new FormControl(null)
        });
        this.solutionService.successValidation
            .subscribe(
                (validation: Validation) => {
                    this.fileName = this.solutionService.getSolutionFile().fileName;
                    this.validation = validation;
                    this.display = 'block';
                }
            );
    }

    /**
     *  When component destroy, unsubscribe subscription.
     */
    ngOnDestroy(){
        this.subscription.unsubscribe();
        this.solutionService.setSolutionFile(null);
    }

    /**
     * Submit upload solution form.
     */
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
                    false,
                    null,
                    new Instance(this.validation.instanceName))
                ).subscribe(
                (solution: Solution) => {
                    this.handleDuplicateSolution(solution);
                    },
                    error => console.log(error)
            );
        }
    }

    /**
     *  If solution is not null show flash message with its properties, other way upload solution from
     *  variable validation.
     *
     * @param solution - duplicate solution
     */
    handleDuplicateSolution(solution){
        if (solution) {
            let date = new Date(solution.submissionTime);
            this.flashMessageService.showMessage(
                'Solution has the same unassigned variables, total cost, student conflicts, ' +
                'time preferences, room preferences and distribution preferences as your other ' +
                'solution uploaded to the system at ' + this.getDateTime(date) +
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
    }

    /**
     *  Set variable showUploadForm.
     */
    setShowUploadForm(){
        this.showUploadForm = this.sessionStorageService.isLoggedIn();
    }

    /**
     * Format date to string.
     *
     * @param date
     * @returns {string} formatted date
     */
    getDateTime(date: Date){
        return  date.toLocaleTimeString() + ' on ' + this.getNameOfMonth(date.getMonth()) +
            ' ' + date.getDate() + ', ' + date.getFullYear();
    }

    /**
     * Get name of month by number.
     *
     * @param number
     * @returns {string} name of month
     */
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