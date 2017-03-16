import { Component } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { SolutionService } from "../../validation/solution.service";
export var ValidatorInfoComponent = (function () {
    function ValidatorInfoComponent(solutionService, activatedRoute) {
        this.solutionService = solutionService;
        this.activatedRoute = activatedRoute;
    }
    ValidatorInfoComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.subscription = this.activatedRoute.queryParams.subscribe(function (params) {
            var solutionId = params['solutionId'];
            _this.solutionService.getSolution(solutionId)
                .subscribe(function (solution) {
                _this.solution = solution;
            }, function (error) { return console.error(error); });
        });
    };
    ValidatorInfoComponent.prototype.ngOnDestroy = function () {
        this.subscription.unsubscribe();
    };
    ValidatorInfoComponent.decorators = [
        { type: Component, args: [{
                    selector: 'app-solution-validator-info',
                    templateUrl: 'validator-info.component.html'
                },] },
    ];
    /** @nocollapse */
    ValidatorInfoComponent.ctorParameters = [
        { type: SolutionService, },
        { type: ActivatedRoute, },
    ];
    return ValidatorInfoComponent;
}());
