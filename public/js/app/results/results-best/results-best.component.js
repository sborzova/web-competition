import { Component } from "@angular/core";
import { SolutionService } from "../../validation/solution.service";
import { InstanceService } from "../../instances/instance.service";
import { SolutionResult } from "../solution-result.model";
export var ResultsBestComponent = (function () {
    function ResultsBestComponent(solutionService, instanceService) {
        this.solutionService = solutionService;
        this.instanceService = instanceService;
        this.fileSaver = require('file-saver');
    }
    ResultsBestComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.instanceService.getInstances()
            .subscribe(function (instances) {
            var results = [];
            var _loop_1 = function(instance) {
                _this.solutionService.getSolutionsByInstance(instance.instanceId)
                    .subscribe(function (solutions) {
                    if (solutions.length == 0) {
                        results.push(new SolutionResult(instance));
                    }
                    else {
                        solutions.sort(function (a, b) {
                            var aUnassigned = a.unassigned;
                            var bUnassigned = b.unassigned;
                            var aTotal = a.total;
                            var bTotal = b.total;
                            if (aUnassigned == bUnassigned) {
                                return (aTotal > bTotal) ? -1 : (aTotal < bTotal) ? 1 : 0;
                            }
                            else {
                                return (aUnassigned < bUnassigned) ? -1 : 1;
                            }
                        });
                        results.push(solutions[0]);
                    }
                }, function (error) { return console.error(error); });
            };
            for (var _i = 0, instances_1 = instances; _i < instances_1.length; _i++) {
                var instance = instances_1[_i];
                _loop_1(instance);
            }
            _this.solutions = results;
        }, function (error) { return console.error(error); });
    };
    ResultsBestComponent.prototype.onDownload = function (solution) {
        var file = new File([solution.data], 'solution.xml', { type: "text/xml;charset=utf-8" });
        this.fileSaver.saveAs(file);
    };
    ResultsBestComponent.prototype.onAuthor = function (authorId) {
        this.solutionService.resultsAuthorShow(authorId);
    };
    ResultsBestComponent.prototype.onViewAll = function (instanceId) {
        this.solutionService.resultsInstanceShow(instanceId);
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
    ];
    return ResultsBestComponent;
}());
