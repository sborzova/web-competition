import { Component } from "@angular/core";
import { SolutionService } from "../../shared/solution.service";
export var WorseSolutionsComponent = (function () {
    function WorseSolutionsComponent(solutionService) {
        var _this = this;
        this.solutionService = solutionService;
        this.display = 'none';
        this.subscription = solutionService.worseSolutionsDeleteSource$
            .subscribe(function () {
            _this.display = 'none';
        });
    }
    Object.defineProperty(WorseSolutionsComponent.prototype, "selectedSolutions", {
        get: function () {
            return this.solutions.filter(function (s) { return s.isChecked; });
        },
        enumerable: true,
        configurable: true
    });
    WorseSolutionsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.solutionService.worseSolutions
            .subscribe(function (solutions) {
            _this.solutions = solutions;
            _this.display = 'block';
        });
    };
    WorseSolutionsComponent.prototype.ngOnDestroy = function () {
        this.subscription.unsubscribe();
    };
    WorseSolutionsComponent.prototype.onDeleteSelected = function () {
        if (this.selectedSolutions.length == 0) {
            this.solutionService.worseSolutionsHide();
        }
        this.solutionService.deleteSolutions(this.selectedSolutions);
        this.solutionService.worseSolutionsHide();
    };
    WorseSolutionsComponent.prototype.onDeleteNone = function () {
        this.solutionService.worseSolutionsHide();
    };
    WorseSolutionsComponent.decorators = [
        { type: Component, args: [{
                    selector: 'app-worse-solutions',
                    templateUrl: './worse-solutions.component.html'
                },] },
    ];
    /** @nocollapse */
    WorseSolutionsComponent.ctorParameters = [
        { type: SolutionService, },
    ];
    return WorseSolutionsComponent;
}());
