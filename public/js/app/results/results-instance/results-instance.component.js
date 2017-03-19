import { Component } from "@angular/core";
import { SolutionService } from "../../validation/solution.service";
import { ResultsService } from "../results.service";
export var ResultsInstanceComponent = (function () {
    function ResultsInstanceComponent(solutionService, resultsService) {
        this.solutionService = solutionService;
        this.resultsService = resultsService;
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
    ResultsInstanceComponent.prototype.onQualityAsc = function () {
        this.solutions = this.resultsService.sortQualityAsc(this.solutions);
    };
    ResultsInstanceComponent.prototype.onQualityDesc = function () {
        this.solutions = this.resultsService.sortQualityDesc(this.solutions);
    };
    ResultsInstanceComponent.prototype.onScAsc = function () {
        this.solutions = this.resultsService.sortScAsc(this.solutions);
    };
    ResultsInstanceComponent.prototype.onScDesc = function () {
        this.solutions = this.resultsService.sortScDesc(this.solutions);
    };
    ResultsInstanceComponent.prototype.onTimeAsc = function () {
        this.solutions = this.resultsService.sortTimeAsc(this.solutions);
    };
    ResultsInstanceComponent.prototype.onTimeDesc = function () {
        this.solutions = this.resultsService.sortTimeDesc(this.solutions);
    };
    ResultsInstanceComponent.prototype.onRoomAsc = function () {
        this.solutions = this.resultsService.sortRoomAsc(this.solutions);
    };
    ResultsInstanceComponent.prototype.onRoomDesc = function () {
        this.solutions = this.resultsService.sortRoomDesc(this.solutions);
    };
    ResultsInstanceComponent.prototype.onDistributionAsc = function () {
        this.solutions = this.resultsService.sortDistributionAsc(this.solutions);
    };
    ResultsInstanceComponent.prototype.onDistributionDesc = function () {
        this.solutions = this.resultsService.sortDistributionDesc(this.solutions);
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
        { type: ResultsService, },
    ];
    return ResultsInstanceComponent;
}());
