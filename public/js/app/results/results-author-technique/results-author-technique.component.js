import { Component } from "@angular/core";
import { SolutionService } from "../../validation/solution.service";
import { ResultsService } from "../results.service";
export var ResultsAuthorTechniqueComponent = (function () {
    function ResultsAuthorTechniqueComponent(solutionService, resultsService) {
        this.solutionService = solutionService;
        this.resultsService = resultsService;
        this.display = 'none';
        this.fileSaver = require('file-saver');
        this.showPapers = false;
    }
    ResultsAuthorTechniqueComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.solutionService.resultsAuthorTechnique
            .subscribe(function (solutions) {
            _this.solutions = solutions;
            _this.display = 'block';
        });
    };
    ResultsAuthorTechniqueComponent.prototype.onDownload = function (solution) {
        var file = new File([solution.data], 'solution.xml', { type: "text/xml;charset=utf-8" });
        this.fileSaver.saveAs(file);
    };
    ResultsAuthorTechniqueComponent.prototype.isShowPapers = function () {
        return this.showPapers;
    };
    ResultsAuthorTechniqueComponent.prototype.onShowPapers = function () {
        this.showPapers = true;
    };
    ResultsAuthorTechniqueComponent.prototype.onHidePapers = function () {
        this.showPapers = false;
    };
    ResultsAuthorTechniqueComponent.prototype.onQualityAsc = function () {
        this.solutions = this.resultsService.sortQualityAsc(this.solutions);
    };
    ResultsAuthorTechniqueComponent.prototype.onQualityDesc = function () {
        this.solutions = this.resultsService.sortQualityDesc(this.solutions);
    };
    ResultsAuthorTechniqueComponent.prototype.onScAsc = function () {
        this.solutions = this.resultsService.sortScAsc(this.solutions);
    };
    ResultsAuthorTechniqueComponent.prototype.onScDesc = function () {
        this.solutions = this.resultsService.sortScDesc(this.solutions);
    };
    ResultsAuthorTechniqueComponent.prototype.onTimeAsc = function () {
        this.solutions = this.resultsService.sortTimeAsc(this.solutions);
    };
    ResultsAuthorTechniqueComponent.prototype.onTimeDesc = function () {
        this.solutions = this.resultsService.sortTimeDesc(this.solutions);
    };
    ResultsAuthorTechniqueComponent.prototype.onRoomAsc = function () {
        this.solutions = this.resultsService.sortRoomAsc(this.solutions);
    };
    ResultsAuthorTechniqueComponent.prototype.onRoomDesc = function () {
        this.solutions = this.resultsService.sortRoomDesc(this.solutions);
    };
    ResultsAuthorTechniqueComponent.prototype.onDistributionAsc = function () {
        this.solutions = this.resultsService.sortDistributionAsc(this.solutions);
    };
    ResultsAuthorTechniqueComponent.prototype.onDistributionDesc = function () {
        this.solutions = this.resultsService.sortDistributionDesc(this.solutions);
    };
    ResultsAuthorTechniqueComponent.decorators = [
        { type: Component, args: [{
                    selector: 'app-results-author-technique',
                    templateUrl: './results-author-technique.component.html'
                },] },
    ];
    /** @nocollapse */
    ResultsAuthorTechniqueComponent.ctorParameters = [
        { type: SolutionService, },
        { type: ResultsService, },
    ];
    return ResultsAuthorTechniqueComponent;
}());
