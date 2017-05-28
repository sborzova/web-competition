import { Component } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { SolutionService } from "../shared/services/solution.service";
/**
 *  Component for showing validator info.
 */
export var ValidatorInfoComponent = (function () {
    /**
     *  When creating component, inject dependencies.
     *
     * @param solutionService
     * @param route
     */
    function ValidatorInfoComponent(solutionService, route) {
        this.solutionService = solutionService;
        this.route = route;
    }
    /**
     *  When creating component, call function to get solution by route parameter's id
     *  and show validation info
     */
    ValidatorInfoComponent.prototype.ngOnInit = function () {
        var _this = this;
        var id = this.route.snapshot.params['id'];
        this.solutionService.getSolution(id)
            .subscribe(function (solution) {
            _this.solution = solution;
        }, function (error) { return console.error(error); });
    };
    ValidatorInfoComponent.decorators = [
        { type: Component, args: [{
                    selector: 'app-solution-validator-info',
                    templateUrl: './validator-info.component.html'
                },] },
    ];
    /** @nocollapse */
    ValidatorInfoComponent.ctorParameters = [
        { type: SolutionService, },
        { type: ActivatedRoute, },
    ];
    return ValidatorInfoComponent;
}());
