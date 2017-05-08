import { Component } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { SolutionService } from "../shared/solution.service";
export var ValidatorInfoComponent = (function () {
    function ValidatorInfoComponent(solutionService, route) {
        this.solutionService = solutionService;
        this.route = route;
    }
    /**
     * Set to variable solution solution by route parameter's id.
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
