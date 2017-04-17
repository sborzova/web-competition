import { Component, Input } from "@angular/core";
import { SolutionService } from "../../shared/solution.service";
import { SortService } from "../../shared/sort.service";
import { FlashMessageService } from "../../flash-message/flash-messages.service";
export var ResultsAuthorInstanceComponent = (function () {
    function ResultsAuthorInstanceComponent(solutionService, flashMessageService, resultsService) {
        this.solutionService = solutionService;
        this.flashMessageService = flashMessageService;
        this.resultsService = resultsService;
        this.showPapers = false;
    }
    ResultsAuthorInstanceComponent.prototype.ngOnChanges = function (changes) {
        this.solutionsAuthorInstanceTechnique = null;
    };
    ResultsAuthorInstanceComponent.prototype.onDownload = function (solution) {
        this.resultsService.download(solution);
    };
    ResultsAuthorInstanceComponent.prototype.onDelete = function (solution) {
        this.solutionService.deleteSolutionObservable(solution);
    };
    ResultsAuthorInstanceComponent.prototype.onShowPapers = function () {
        this.showPapers = true;
    };
    ResultsAuthorInstanceComponent.prototype.onHidePapers = function () {
        this.showPapers = false;
    };
    ResultsAuthorInstanceComponent.prototype.onTechnique = function (technique) {
        this.solutionsAuthorInstanceTechnique = this.solutions.filter(function (s) { return s.technique == technique; });
    };
    ResultsAuthorInstanceComponent.prototype.onQualityAsc = function () {
        this.solutions = this.resultsService.sortQualityAsc(this.solutions);
    };
    ResultsAuthorInstanceComponent.prototype.onQualityDesc = function () {
        this.solutions = this.resultsService.sortQualityDesc(this.solutions);
    };
    ResultsAuthorInstanceComponent.prototype.onScAsc = function () {
        this.solutions = this.resultsService.sortScAsc(this.solutions);
    };
    ResultsAuthorInstanceComponent.prototype.onScDesc = function () {
        this.solutions = this.resultsService.sortScDesc(this.solutions);
    };
    ResultsAuthorInstanceComponent.prototype.onTimeAsc = function () {
        this.solutions = this.resultsService.sortTimeAsc(this.solutions);
    };
    ResultsAuthorInstanceComponent.prototype.onTimeDesc = function () {
        this.solutions = this.resultsService.sortTimeDesc(this.solutions);
    };
    ResultsAuthorInstanceComponent.prototype.onRoomAsc = function () {
        this.solutions = this.resultsService.sortRoomAsc(this.solutions);
    };
    ResultsAuthorInstanceComponent.prototype.onRoomDesc = function () {
        this.solutions = this.resultsService.sortRoomDesc(this.solutions);
    };
    ResultsAuthorInstanceComponent.prototype.onDistributionAsc = function () {
        this.solutions = this.resultsService.sortDistributionAsc(this.solutions);
    };
    ResultsAuthorInstanceComponent.prototype.onDistributionDesc = function () {
        this.solutions = this.resultsService.sortDistributionDesc(this.solutions);
    };
    ResultsAuthorInstanceComponent.prototype.onTechniqueAsc = function () {
        this.solutions = this.resultsService.sortTechniqueAsc(this.solutions);
    };
    ResultsAuthorInstanceComponent.prototype.onTechniqueDesc = function () {
        this.solutions = this.resultsService.sortTechniqueDesc(this.solutions);
    };
    ResultsAuthorInstanceComponent.prototype.onSubmissionTimeAsc = function () {
        this.solutions = this.resultsService.sortSubmissionTimeAsc(this.solutions);
    };
    ResultsAuthorInstanceComponent.prototype.onSubmissionTimeDesc = function () {
        this.solutions = this.resultsService.sortSubmissionTimeDesc(this.solutions);
    };
    ResultsAuthorInstanceComponent.decorators = [
        { type: Component, args: [{
                    selector: 'app-results-author-instance',
                    templateUrl: './results-author-instance.component.html'
                },] },
    ];
    /** @nocollapse */
    ResultsAuthorInstanceComponent.ctorParameters = [
        { type: SolutionService, },
        { type: FlashMessageService, },
        { type: SortService, },
    ];
    ResultsAuthorInstanceComponent.propDecorators = {
        'solutions': [{ type: Input },],
    };
    return ResultsAuthorInstanceComponent;
}());
