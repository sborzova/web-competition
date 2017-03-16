import { Component } from "@angular/core";
import { SolutionService } from "../../validation/solution.service";
export var ResultsInstanceComponent = (function () {
    function ResultsInstanceComponent(solutionService) {
        this.solutionService = solutionService;
        this.display = 'none';
        this.fileSaver = require('file-saver');
        this.showPapers = false;
    }
    ResultsInstanceComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.solutionService.resultsInstance
            .subscribe(function (instanceId) {
            _this.solutionService.getSolutionsByInstance(instanceId)
                .subscribe(function (solutions) {
                _this.solutions = solutions;
            }, function (error) { return console.error(error); });
            _this.display = 'block';
        });
    };
    ResultsInstanceComponent.prototype.onDownload = function (solution) {
        var file = new File([solution.data], 'solution.xml', { type: "text/xml;charset=utf-8" });
        this.fileSaver.saveAs(file);
    };
    ResultsInstanceComponent.prototype.onAuthor = function (authorId) {
        this.solutionService.resultsAuthorShow(authorId);
    };
    ResultsInstanceComponent.prototype.isShowPapers = function () {
        return this.showPapers;
    };
    ResultsInstanceComponent.prototype.onShowPapers = function () {
        this.showPapers = true;
    };
    ResultsInstanceComponent.prototype.onHidePapers = function () {
        this.showPapers = false;
    };
    ResultsInstanceComponent.decorators = [
        { type: Component, args: [{
                    selector: 'app-results-instance',
                    templateUrl: './results-instance.component.html'
                },] },
    ];
    /** @nocollapse */
    ResultsInstanceComponent.ctorParameters = [
        { type: SolutionService, },
    ];
    return ResultsInstanceComponent;
}());
