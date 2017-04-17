import { Component, Input } from "@angular/core";
import { SortService } from "../../shared/sort.service";
import { SolutionService } from "../../shared/solution.service";
import { FlashMessageService } from "../../flash-message/flash-messages.service";
export var ResultsAuthorTechniqueComponent = (function () {
    function ResultsAuthorTechniqueComponent(resultsService, flashMessageService, solutionService) {
        this.resultsService = resultsService;
        this.flashMessageService = flashMessageService;
        this.solutionService = solutionService;
        this.showPapers = false;
    }
    ResultsAuthorTechniqueComponent.prototype.ngOnChanges = function (changes) {
        this.solutionsAuthorInstanceTechnique = null;
    };
    ResultsAuthorTechniqueComponent.prototype.onDownload = function (solution) {
        this.resultsService.download(solution);
    };
    ResultsAuthorTechniqueComponent.prototype.onDelete = function (solution) {
        this.solutionService.deleteSolutionObservable(solution);
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
    ResultsAuthorTechniqueComponent.prototype.onTechniqueAsc = function () {
        this.solutions = this.resultsService.sortTechniqueAsc(this.solutions);
    };
    ResultsAuthorTechniqueComponent.prototype.onTechniqueDesc = function () {
        this.solutions = this.resultsService.sortTechniqueDesc(this.solutions);
    };
    ResultsAuthorTechniqueComponent.prototype.onSubmissionTimeAsc = function () {
        this.solutions = this.resultsService.sortSubmissionTimeAsc(this.solutions);
    };
    ResultsAuthorTechniqueComponent.prototype.onSubmissionTimeDesc = function () {
        this.solutions = this.resultsService.sortSubmissionTimeDesc(this.solutions);
    };
    ResultsAuthorTechniqueComponent.decorators = [
        { type: Component, args: [{
                    selector: 'app-results-author-technique',
                    templateUrl: './results-author-technique.component.html'
                },] },
    ];
    /** @nocollapse */
    ResultsAuthorTechniqueComponent.ctorParameters = [
        { type: SortService, },
        { type: FlashMessageService, },
        { type: SolutionService, },
    ];
    ResultsAuthorTechniqueComponent.propDecorators = {
        'solutions': [{ type: Input },],
    };
    return ResultsAuthorTechniqueComponent;
}());
