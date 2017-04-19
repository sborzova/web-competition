import { Component } from "@angular/core";
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { SolutionService } from "../../shared/solution.service";
import { SolutionCreate } from "../solution-create.model";
import { SessionStorageService } from "../../shared/session-storage.service";
import { Solution } from "../../shared/solution.model";
import { Instance } from "../instance.model";
import { FlashMessageService } from "../../flash-message/flash-messages.service";
export var SuccessValidationComponent = (function () {
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
        });
    }
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
    SuccessValidationComponent.prototype.onSubmit = function () {
        var _this = this;
        this.submitted = true;
        if (this.solutionForm.value.url && !this.solutionForm.value.citation) {
            this.citationMissing = true;
            return;
        }
        if (this.solutionForm.valid) {
            this.solutionService.findDuplicateSolution(new Solution(this.validation.unassigned, this.validation.total, this.validation.sc, this.validation.time, this.validation.room, this.validation.distr, this.solutionForm.value.technique, '', null, false, null, new Instance(this.validation.instanceName))).subscribe(function (solution) {
                if (solution) {
                    var date = new Date(solution.submissionTime);
                    _this.flashMessageService.showMessage('Solution has the same unassigned variables, total cost, time preferences, ' +
                        'room preferences, distribution preferences and technique as your other ' +
                        'solution uploaded to the system at ' + _this.getDateTime(date) +
                        ', it is not ' + 'uploaded.', 'info');
                    return;
                }
                else {
                    _this.solutionService.uploadSolution(new SolutionCreate(_this.validation.unassigned, _this.validation.total, _this.validation.sc, _this.validation.time, _this.validation.room, _this.validation.distr, _this.validation.info, _this.solutionForm.value.technique, _this.validation.instanceName), _this.solutionForm.value.citation, _this.solutionForm.value.url);
                }
            }, function (error) { return console.log(error); });
        }
    };
    SuccessValidationComponent.prototype.ngOnDestroy = function () {
        this.subscription.unsubscribe();
        this.solutionService.setSolutionFile(null);
    };
    SuccessValidationComponent.prototype.competitionIsOn = function () {
        return this.sessionStorageService.getCompetitionIsOn();
    };
    SuccessValidationComponent.prototype.getDateTime = function (date) {
        return date.toLocaleTimeString() + ' on ' + this.getNameOfMonth(date.getMonth()) +
            ' ' + date.getDate() + ', ' + date.getFullYear();
    };
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
