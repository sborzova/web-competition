import { Component } from "@angular/core";
import { SolutionService } from "../../validation/solution.service";
export var ResultsAuthorComponent = (function () {
    function ResultsAuthorComponent(solutionService) {
        this.solutionService = solutionService;
        this.display = 'none';
        this.fileSaver = require('file-saver');
        this.showPapers = false;
    }
    ResultsAuthorComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.solutionService.resultsAuthor
            .subscribe(function (authorId) {
            _this.solutionService.getSolutionsByUser(authorId)
                .subscribe(function (solutions) {
                _this.solutions = solutions;
            }, function (error) { return console.error(error); });
            _this.display = 'block';
        });
    };
    ResultsAuthorComponent.prototype.onDownload = function (solution) {
        var file = new File([solution.data], 'solution.xml', { type: "text/xml;charset=utf-8" });
        this.fileSaver.saveAs(file);
    };
    ResultsAuthorComponent.prototype.isShowPapers = function () {
        return this.showPapers;
    };
    ResultsAuthorComponent.prototype.onShowPapers = function () {
        this.showPapers = true;
    };
    ResultsAuthorComponent.prototype.onHidePapers = function () {
        this.showPapers = false;
    };
    ResultsAuthorComponent.prototype.onTechnique = function (technique) {
        var solutions = this.solutions.filter(function (s) { return s.technique === technique; });
        this.solutionService.resultsAuthorTechniqueShow(solutions);
    };
    ResultsAuthorComponent.decorators = [
        { type: Component, args: [{
                    selector: 'app-results-author',
                    templateUrl: './results-author.component.html'
                },] },
    ];
    /** @nocollapse */
    ResultsAuthorComponent.ctorParameters = [
        { type: SolutionService, },
    ];
    return ResultsAuthorComponent;
}());
