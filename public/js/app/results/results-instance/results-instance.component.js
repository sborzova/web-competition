import { Component, Input } from "@angular/core";
import { SortService } from "../../shared/sort.service";
import { FlashMessageService } from "../../flash-message/flash-messages.service";
import { SolutionService } from "../../shared/solution.service";
export var ResultsInstanceComponent = (function () {
    function ResultsInstanceComponent(sortService, solutionService, flashMessageService) {
        this.sortService = sortService;
        this.solutionService = solutionService;
        this.flashMessageService = flashMessageService;
        this.showPapers = false;
    }
    ResultsInstanceComponent.prototype.ngOnChanges = function (changes) {
        this.solutionsAuthorInstance = null;
    };
    ResultsInstanceComponent.prototype.onDelete = function (solution) {
        this.solutionService.deleteSolutionObservable(solution);
    };
    ResultsInstanceComponent.prototype.onDownload = function (solution) {
        this.sortService.download(solution);
    };
    ResultsInstanceComponent.prototype.onAuthor = function (authorId) {
        this.solutionsAuthorInstance = this.solutions.filter(function (s) { return s.author.authorId == authorId; });
    };
    ResultsInstanceComponent.prototype.onShowPapers = function () {
        this.showPapers = true;
    };
    ResultsInstanceComponent.prototype.onHidePapers = function () {
        this.showPapers = false;
    };
    ResultsInstanceComponent.prototype.onQualityAsc = function () {
        this.solutions = this.sortService.sortQualityAsc(this.solutions);
    };
    ResultsInstanceComponent.prototype.onQualityDesc = function () {
        this.solutions = this.sortService.sortQualityDesc(this.solutions);
    };
    ResultsInstanceComponent.prototype.onScAsc = function () {
        this.solutions = this.sortService.sortScAsc(this.solutions);
    };
    ResultsInstanceComponent.prototype.onScDesc = function () {
        this.solutions = this.sortService.sortScDesc(this.solutions);
    };
    ResultsInstanceComponent.prototype.onTimeAsc = function () {
        this.solutions = this.sortService.sortTimeAsc(this.solutions);
    };
    ResultsInstanceComponent.prototype.onTimeDesc = function () {
        this.solutions = this.sortService.sortTimeDesc(this.solutions);
    };
    ResultsInstanceComponent.prototype.onRoomAsc = function () {
        this.solutions = this.sortService.sortRoomAsc(this.solutions);
    };
    ResultsInstanceComponent.prototype.onRoomDesc = function () {
        this.solutions = this.sortService.sortRoomDesc(this.solutions);
    };
    ResultsInstanceComponent.prototype.onDistributionAsc = function () {
        this.solutions = this.sortService.sortDistributionAsc(this.solutions);
    };
    ResultsInstanceComponent.prototype.onDistributionDesc = function () {
        this.solutions = this.sortService.sortDistributionDesc(this.solutions);
    };
    ResultsInstanceComponent.prototype.onTechniqueAsc = function () {
        this.solutions = this.sortService.sortTechniqueAsc(this.solutions);
    };
    ResultsInstanceComponent.prototype.onTechniqueDesc = function () {
        this.solutions = this.sortService.sortTechniqueDesc(this.solutions);
    };
    ResultsInstanceComponent.prototype.onSubmissionTimeAsc = function () {
        this.solutions = this.sortService.sortSubmissionTimeAsc(this.solutions);
    };
    ResultsInstanceComponent.prototype.onSubmissionTimeDesc = function () {
        this.solutions = this.sortService.sortSubmissionTimeDesc(this.solutions);
    };
    ResultsInstanceComponent.prototype.onAuthorAsc = function () {
        this.solutions = this.sortService.sortAuthorAsc(this.solutions);
    };
    ResultsInstanceComponent.prototype.onAuthorDesc = function () {
        this.solutions = this.sortService.sortAuthorDesc(this.solutions);
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
        { type: SolutionService, },
        { type: FlashMessageService, },
    ];
    ResultsInstanceComponent.propDecorators = {
        'solutions': [{ type: Input },],
    };
    return ResultsInstanceComponent;
}());
