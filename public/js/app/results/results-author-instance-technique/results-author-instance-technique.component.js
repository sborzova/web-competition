import { Component, Input } from "@angular/core";
import { SortService } from "../../shared/sort.service";
import { SolutionService } from "../../shared/solution.service";
import { FlashMessageService } from "../../flash-message/flash-messages.service";
import { SessionStorageService } from "../../shared/session-storage.service";
export var ResultsAuthorInstanceTechniqueComponent = (function () {
    function ResultsAuthorInstanceTechniqueComponent(resultsService, sessionStorageService, flashMessageService, solutionService) {
        this.resultsService = resultsService;
        this.sessionStorageService = sessionStorageService;
        this.flashMessageService = flashMessageService;
        this.solutionService = solutionService;
        this.showPapers = false;
    }
    ResultsAuthorInstanceTechniqueComponent.prototype.onDownload = function (solution) {
        this.resultsService.download(solution);
    };
    ResultsAuthorInstanceTechniqueComponent.prototype.isAdmin = function () {
        return this.sessionStorageService.isAdmin();
    };
    ResultsAuthorInstanceTechniqueComponent.prototype.onDelete = function (solution) {
        this.solutionService.deleteSolutionObservable(solution);
    };
    ResultsAuthorInstanceTechniqueComponent.prototype.onSetVisible = function (solution) {
        this.solutionService.setVisibleObservable(solution);
    };
    ResultsAuthorInstanceTechniqueComponent.prototype.onSetNotVisible = function (solution) {
        this.solutionService.setNotVisibleObservable(solution);
    };
    ResultsAuthorInstanceTechniqueComponent.prototype.onShowPapers = function () {
        this.showPapers = true;
    };
    ResultsAuthorInstanceTechniqueComponent.prototype.onHidePapers = function () {
        this.showPapers = false;
    };
    ResultsAuthorInstanceTechniqueComponent.prototype.onQualityAsc = function () {
        this.solutions = this.resultsService.sortQualityAsc(this.solutions);
    };
    ResultsAuthorInstanceTechniqueComponent.prototype.onQualityDesc = function () {
        this.solutions = this.resultsService.sortQualityDesc(this.solutions);
    };
    ResultsAuthorInstanceTechniqueComponent.prototype.onScAsc = function () {
        this.solutions = this.resultsService.sortScAsc(this.solutions);
    };
    ResultsAuthorInstanceTechniqueComponent.prototype.onScDesc = function () {
        this.solutions = this.resultsService.sortScDesc(this.solutions);
    };
    ResultsAuthorInstanceTechniqueComponent.prototype.onTimeAsc = function () {
        this.solutions = this.resultsService.sortTimeAsc(this.solutions);
    };
    ResultsAuthorInstanceTechniqueComponent.prototype.onTimeDesc = function () {
        this.solutions = this.resultsService.sortTimeDesc(this.solutions);
    };
    ResultsAuthorInstanceTechniqueComponent.prototype.onRoomAsc = function () {
        this.solutions = this.resultsService.sortRoomAsc(this.solutions);
    };
    ResultsAuthorInstanceTechniqueComponent.prototype.onRoomDesc = function () {
        this.solutions = this.resultsService.sortRoomDesc(this.solutions);
    };
    ResultsAuthorInstanceTechniqueComponent.prototype.onDistributionAsc = function () {
        this.solutions = this.resultsService.sortDistributionAsc(this.solutions);
    };
    ResultsAuthorInstanceTechniqueComponent.prototype.onDistributionDesc = function () {
        this.solutions = this.resultsService.sortDistributionDesc(this.solutions);
    };
    ResultsAuthorInstanceTechniqueComponent.prototype.onTechniqueAsc = function () {
        this.solutions = this.resultsService.sortTechniqueAsc(this.solutions);
    };
    ResultsAuthorInstanceTechniqueComponent.prototype.onTechniqueDesc = function () {
        this.solutions = this.resultsService.sortTechniqueDesc(this.solutions);
    };
    ResultsAuthorInstanceTechniqueComponent.prototype.onSubmissionTimeAsc = function () {
        this.solutions = this.resultsService.sortSubmissionTimeAsc(this.solutions);
    };
    ResultsAuthorInstanceTechniqueComponent.prototype.onSubmissionTimeDesc = function () {
        this.solutions = this.resultsService.sortSubmissionTimeDesc(this.solutions);
    };
    ResultsAuthorInstanceTechniqueComponent.decorators = [
        { type: Component, args: [{
                    selector: 'app-results-author-instance-technique',
                    templateUrl: './results-author-instance-technique.component.html'
                },] },
    ];
    /** @nocollapse */
    ResultsAuthorInstanceTechniqueComponent.ctorParameters = [
        { type: SortService, },
        { type: SessionStorageService, },
        { type: FlashMessageService, },
        { type: SolutionService, },
    ];
    ResultsAuthorInstanceTechniqueComponent.propDecorators = {
        'solutions': [{ type: Input },],
    };
    return ResultsAuthorInstanceTechniqueComponent;
}());
