import { Component } from "@angular/core";
import { SolutionService } from "../../shared/solution.service";
import { InstanceService } from "../../shared/instance.service";
import { SortService } from "../../shared/sort.service";
import { FlashMessageService } from "../../flash-message/flash-messages.service";
export var ResultsBestComponent = (function () {
    function ResultsBestComponent(solutionService, instanceService, resultsService, flashMessageService) {
        var _this = this;
        this.solutionService = solutionService;
        this.instanceService = instanceService;
        this.resultsService = resultsService;
        this.flashMessageService = flashMessageService;
        this.solutionsAll = [];
        this.showPapers = false;
        this.subscription = solutionService.solutionDelete$.subscribe(function (solution) {
            _this.onDelete(solution);
        });
    }
    ResultsBestComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.instanceService.getInstances()
            .subscribe(function (instances) {
            var results = [];
            for (var _i = 0, instances_1 = instances; _i < instances_1.length; _i++) {
                var instance = instances_1[_i];
                _this.solutionService.getSolutionsByInstance(instance.instanceId)
                    .subscribe(function (solutions) {
                    if (solutions.length != 0) {
                        solutions = _this.resultsService.sortQualityAsc(solutions);
                        results.push(solutions[0]);
                        _this.solutionsAll = _this.solutionsAll.concat(solutions);
                    }
                }, function (error) { return console.error(error); });
            }
            _this.results = results;
        }, function (error) { return console.error(error); });
    };
    ResultsBestComponent.prototype.ngOnDestroy = function () {
        this.subscription.unsubscribe();
    };
    ResultsBestComponent.prototype.onDelete = function (solution) {
        this.solution = solution;
        document.getElementById('openModalDelete').click();
    };
    ResultsBestComponent.prototype.onDownload = function (solution) {
        this.resultsService.download(solution);
    };
    ResultsBestComponent.prototype.onAuthor = function (authorId) {
        this.solutionsInstance = null;
        this.solutionsAuthor = this.solutionsAll.filter(function (s) { return s.author.authorId == authorId; });
    };
    ResultsBestComponent.prototype.onInstance = function (instanceId) {
        this.solutionsAuthor = null;
        this.solutionsInstance = this.solutionsAll.filter(function (s) { return s.instance.instanceId == instanceId; });
    };
    ResultsBestComponent.prototype.onOk = function () {
        var _this = this;
        this.solutionService.deleteSolution(this.solution)
            .subscribe(function (result) {
            _this.solutionsAll.splice(_this.solutionsAll.indexOf(_this.solution), 1);
            if (_this.results.includes(_this.solution)) {
                _this.results.splice(_this.results.indexOf(_this.solution), 1);
                var solutionsInstance = _this.solutionsAll.filter(function (s) { return s.instance.instanceId = _this.solution.instance.instanceId; });
                var solutionsInstanceSorted = _this.resultsService.sortQualityAsc(solutionsInstance);
                _this.results.push(solutionsInstanceSorted[0]);
            }
            _this.solutionsInstance = null;
            _this.solutionsAuthor = null;
            _this.solution = null;
            _this.flashMessageService.showMessage('Solution was deleted.', 'success');
        }, function (error) { return console.error(error); });
    };
    ResultsBestComponent.prototype.onShowPapers = function () {
        this.showPapers = true;
    };
    ResultsBestComponent.prototype.onHidePapers = function () {
        this.showPapers = false;
    };
    ResultsBestComponent.decorators = [
        { type: Component, args: [{
                    selector: 'app-results-best',
                    templateUrl: './results-best.component.html'
                },] },
    ];
    /** @nocollapse */
    ResultsBestComponent.ctorParameters = [
        { type: SolutionService, },
        { type: InstanceService, },
        { type: SortService, },
        { type: FlashMessageService, },
    ];
    return ResultsBestComponent;
}());
