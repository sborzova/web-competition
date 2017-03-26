import { Component, Input } from "@angular/core";
import { SortService } from "../../shared/sort.service";
export var ResultsInstanceComponent = (function () {
    function ResultsInstanceComponent(resultsService) {
        this.resultsService = resultsService;
        this.fileSaver = require('file-saver');
        this.showPapers = false;
    }
    ResultsInstanceComponent.prototype.ngOnChanges = function (changes) {
        this.solutionsAuthorInstance = null;
    };
    ResultsInstanceComponent.prototype.onDownload = function (solution) {
        var file = new File([solution.data], 'solution.xml', { type: "text/xml;charset=utf-8" });
        this.fileSaver.saveAs(file);
    };
    ResultsInstanceComponent.prototype.onAuthor = function (authorId) {
        this.solutionsAuthorInstance = this.solutions.filter(function (s) { return s.author.authorId == authorId; });
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
        { type: SortService, },
    ];
    ResultsInstanceComponent.propDecorators = {
        'solutions': [{ type: Input },],
    };
    return ResultsInstanceComponent;
}());
