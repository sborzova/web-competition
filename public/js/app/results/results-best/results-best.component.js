import { Component } from "@angular/core";
import { SolutionService } from "../../shared/solution.service";
import { InstanceService } from "../../instances/instance.service";
import { SortService } from "../../shared/sort.service";
export var ResultsBestComponent = (function () {
    function ResultsBestComponent(solutionService, instanceService, resultsService) {
        this.solutionService = solutionService;
        this.instanceService = instanceService;
        this.resultsService = resultsService;
        this.solutionsAll = [];
        this.fileSaver = require('file-saver');
        this.showPapers = false;
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
    ResultsBestComponent.prototype.onDownload = function (solution) {
        var file = new File([solution.data], 'solution.xml', { type: "text/xml;charset=utf-8" });
        this.fileSaver.saveAs(file);
    };
    ResultsBestComponent.prototype.onAuthor = function (authorId) {
        this.solutionsInstance = null;
        this.solutionsAuthor = this.solutionsAll.filter(function (s) { return s.author.authorId == authorId; });
    };
    ResultsBestComponent.prototype.onInstance = function (instanceId) {
        this.solutionsAuthor = null;
        this.solutionsInstance = this.solutionsAll.filter(function (s) { return s.instance.instanceId == instanceId; });
    };
    ResultsBestComponent.prototype.isShowPapers = function () {
        return this.showPapers;
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
    ];
    return ResultsBestComponent;
}());
