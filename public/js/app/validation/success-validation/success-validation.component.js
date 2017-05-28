import { Component } from "@angular/core";
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { SolutionService } from "../../shared/services/solution.service";
import { SolutionCreate } from "../solution-create.model";
import { SessionStorageService } from "../../shared/services/session-storage.service";
import { Solution } from "../../shared/models/solution.model";
import { FlashMessageService } from "../../flash-message/flash-messages.service";
import { Instance } from "../../shared/models/instance.model";
/**
 * Component for showing success validation result and uploading solution.
 */
export var SuccessValidationComponent = (function () {
    /**
     *  When creating component, create subscription for showing validation result
     *  and inject dependencies
     *
     * @param solutionService
     * @param sessionStorageService
     * @param flashMessageService
     */
    function SuccessValidationComponent(solutionService, sessionStorageService, flashMessageService) {
        var _this = this;
        this.solutionService = solutionService;
        this.sessionStorageService = sessionStorageService;
        this.flashMessageService = flashMessageService;
        this.display = 'none';
        this.submitted = false;
        this.citationMissing = false;
        this.subscription = solutionService.successValidationDelete$
            .subscribe(function () {
            _this.display = 'none';
            _this.solutionForm.reset();
            _this.submitted = false;
            _this.citationMissing = false;
            _this.setShowUploadForm();
        });
    }
    /**
     * When creating component, create upload solution form, set received validation to
     * variable validation and show it.
     */
    SuccessValidationComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.solutionForm = new FormGroup({
            technique: new FormControl(null, Validators.required),
            citation: new FormControl(null),
            url: new FormControl(null)
        });
        this.solutionService.successValidation
            .subscribe(function (validation) {
            _this.validation = validation;
            _this.display = 'block';
        });
    };
    /**
     *  When destroying component, unsubscribe subscription.
     */
    SuccessValidationComponent.prototype.ngOnDestroy = function () {
        this.subscription.unsubscribe();
        this.solutionService.setSolutionFile(null);
    };
    /**
     * If form is valid, call function for finding duplicate solution.
     */
    SuccessValidationComponent.prototype.onSubmit = function () {
        var _this = this;
        this.submitted = true;
        if (this.solutionForm.value.url && !this.solutionForm.value.citation) {
            this.citationMissing = true;
            return;
        }
        if (this.solutionForm.valid) {
            this.solutionService.findDuplicateSolution(new Solution(this.validation.unassigned, this.validation.total, this.validation.sc, this.validation.time, this.validation.room, this.validation.distr, this.solutionForm.value.technique, '', null, false, null, new Instance(this.validation.instanceName))).subscribe(function (solution) {
                _this.handleDuplicateSolution(solution);
            }, function (error) { return console.log(error); });
        }
    };
    /**
     *  If solution is not null show flash message with its properties, other way call function for uploading
     *  solution from variable validation.
     *
     * @param solution - duplicate solution
     */
    SuccessValidationComponent.prototype.handleDuplicateSolution = function (solution) {
        if (solution) {
            var date = new Date(solution.submissionTime);
            this.flashMessageService.showMessage('Solution has the same unassigned variables, total cost, student conflicts, ' +
                'time preferences, room preferences and distribution preferences as your other ' +
                'solution uploaded to the system at ' + this.getDateTime(date) +
                ', it is not ' + 'uploaded.', 'info');
            return;
        }
        else {
            this.solutionService.uploadSolution(new SolutionCreate(this.validation.unassigned, this.validation.total, this.validation.sc, this.validation.time, this.validation.room, this.validation.distr, this.validation.info, this.solutionForm.value.technique, this.validation.instanceName), this.solutionForm.value.citation, this.solutionForm.value.url);
        }
    };
    /**
     *  Set variable showUploadForm as true if user is logged in.
     */
    SuccessValidationComponent.prototype.setShowUploadForm = function () {
        this.showUploadForm = this.sessionStorageService.isLoggedIn();
    };
    /**
     * Format date to string.
     *
     * @param date
     * @returns {string} formatted date
     */
    SuccessValidationComponent.prototype.getDateTime = function (date) {
        return date.toLocaleTimeString() + ' on ' + this.getNameOfMonth(date.getMonth()) +
            ' ' + date.getDate() + ', ' + date.getFullYear();
    };
    /**
     * Get name of month by number.
     *
     * @param number
     * @returns {string} name of month
     */
    SuccessValidationComponent.prototype.getNameOfMonth = function (number) {
        switch (number) {
            case 0:
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
    };
    SuccessValidationComponent.decorators = [
        { type: Component, args: [{
                    selector: 'app-success-validation',
                    templateUrl: './success-validation.component.html'
                },] },
    ];
    /** @nocollapse */
    SuccessValidationComponent.ctorParameters = [
        { type: SolutionService, },
        { type: SessionStorageService, },
        { type: FlashMessageService, },
    ];
    return SuccessValidationComponent;
}());
