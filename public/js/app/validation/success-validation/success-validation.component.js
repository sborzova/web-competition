import { Component } from "@angular/core";
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { SolutionService } from "../../shared/solution.service";
import { SolutionFindWorse } from "../solution-find-worse.model";
import { SolutionCreate } from "../solution-create.model";
import { SessionStorageService } from "../../shared/session-storage.service";
import { Solution } from "../../shared/solution.model";
export var SuccessValidationComponent = (function () {
    function SuccessValidationComponent(solutionService, sessionStorageService) {
        var _this = this;
        this.solutionService = solutionService;
        this.sessionStorageService = sessionStorageService;
        this.display = 'none';
        this.submitted = false;
        this.citationMissing = false;
        this.subscription = solutionService.successValidationDelete$
            .subscribe(function () {
            _this.display = 'none';
            _this.myForm.reset();
            _this.submitted = false;
            _this.citationMissing = false;
        });
    }
    SuccessValidationComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.myForm = new FormGroup({
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
        if (this.myForm.value.url && !this.myForm.value.citation) {
            this.citationMissing = true;
            return;
        }
        if (this.myForm.valid) {
            this.solutionService.getWorseSolutions(new SolutionFindWorse(this.validation.unassigned, this.validation.total, this.myForm.value.technique, this.validation.instanceName)).subscribe(function (solutions) {
                solutions.push(new Solution(_this.validation.unassigned, _this.validation.total));
                solutions.sort(function (a, b) {
                    var aUnassigned = a.unassigned;
                    var bUnassigned = b.unassigned;
                    var aTotal = a.total;
                    var bTotal = b.total;
                    if (aUnassigned == bUnassigned) {
                        return (aTotal < bTotal) ? -1 : (aTotal >= bTotal) ? 1 : 0;
                    }
                    else {
                        return (aUnassigned > bUnassigned) ? -1 : 1;
                    }
                });
                var worseSolutions = [];
                var i = 0;
                while (i < solutions.length && solutions[i].solutionId) {
                    worseSolutions.push(solutions[i]);
                    i++;
                }
                if (worseSolutions.length > 0) {
                    _this.solutionService.worseSolutionsShow(worseSolutions);
                }
            }, function (error) { return console.log(error); });
            this.solutionService.saveSolution(new SolutionCreate(this.validation.unassigned, this.validation.total, this.validation.sc, this.validation.time, this.validation.room, this.validation.distr, this.validation.info, this.myForm.value.technique, this.validation.instanceName), this.myForm.value.citation, this.myForm.value.url);
        }
    };
    SuccessValidationComponent.prototype.ngOnDestroy = function () {
        this.subscription.unsubscribe();
        this.solutionService.setSolutionFile(null);
    };
    SuccessValidationComponent.prototype.isSubmitted = function () {
        return this.submitted;
    };
    SuccessValidationComponent.prototype.isCitationMissing = function () {
        return this.citationMissing;
    };
    SuccessValidationComponent.prototype.competitionIsOn = function () {
        return this.sessionStorageService.getCompetitionIsOn();
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
    ];
    return SuccessValidationComponent;
}());
