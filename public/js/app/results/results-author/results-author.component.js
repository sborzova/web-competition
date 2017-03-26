import { Component, Input } from "@angular/core";
import { SortService } from "../../shared/sort.service";
export var ResultsAuthorComponent = (function () {
    function ResultsAuthorComponent(resultsService) {
        this.resultsService = resultsService;
        this.fileSaver = require('file-saver');
        this.showPapers = false;
    }
    ResultsAuthorComponent.prototype.ngOnChanges = function (changes) {
        this.solutionsAuthorInstance = null;
        this.solutionsAuthorTechnique = null;
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
    ResultsAuthorComponent.prototype.onInstance = function (instanceId) {
        this.solutionsAuthorInstance = this.solutions.filter(function (s) { return s.instance.instanceId == instanceId; });
    };
    ResultsAuthorComponent.prototype.onTechnique = function (technique) {
        this.solutionsAuthorTechnique = this.solutions.filter(function (s) { return s.technique === technique; });
    };
    ResultsAuthorComponent.prototype.onQualityAsc = function () {
        this.solutions = this.resultsService.sortQualityAsc(this.solutions);
    };
    ResultsAuthorComponent.prototype.onQualityDesc = function () {
        this.solutions = this.resultsService.sortQualityDesc(this.solutions);
    };
    ResultsAuthorComponent.prototype.onScAsc = function () {
        this.solutions = this.resultsService.sortScAsc(this.solutions);
    };
    ResultsAuthorComponent.prototype.onScDesc = function () {
        this.solutions = this.resultsService.sortScDesc(this.solutions);
    };
    ResultsAuthorComponent.prototype.onTimeAsc = function () {
        this.solutions = this.resultsService.sortTimeAsc(this.solutions);
    };
    ResultsAuthorComponent.prototype.onTimeDesc = function () {
        this.solutions = this.resultsService.sortTimeDesc(this.solutions);
    };
    ResultsAuthorComponent.prototype.onRoomAsc = function () {
        this.solutions = this.resultsService.sortRoomAsc(this.solutions);
    };
    ResultsAuthorComponent.prototype.onRoomDesc = function () {
        this.solutions = this.resultsService.sortRoomDesc(this.solutions);
    };
    ResultsAuthorComponent.prototype.onDistributionAsc = function () {
        this.solutions = this.resultsService.sortDistributionAsc(this.solutions);
    };
    ResultsAuthorComponent.prototype.onDistributionDesc = function () {
        this.solutions = this.resultsService.sortDistributionDesc(this.solutions);
    };
    ResultsAuthorComponent.decorators = [
        { type: Component, args: [{
                    selector: 'app-results-author',
                    templateUrl: './results-author.component.html'
                },] },
    ];
    /** @nocollapse */
    ResultsAuthorComponent.ctorParameters = [
        { type: SortService, },
    ];
    ResultsAuthorComponent.propDecorators = {
        'solutions': [{ type: Input },],
    };
    return ResultsAuthorComponent;
}());
