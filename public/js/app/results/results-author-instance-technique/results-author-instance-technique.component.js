import { Component, Input } from "@angular/core";
import { SortDownloadSolutionService } from "../../shared/services/sort-download-solution.service";
import { SolutionService } from "../../shared/services/solution.service";
import { SessionStorageService } from "../../shared/services/session-storage.service";
export var ResultsAuthorInstanceTechniqueComponent = (function () {
    function ResultsAuthorInstanceTechniqueComponent(sortDownloadSolutionService, sessionStorageService, solutionService) {
        this.sortDownloadSolutionService = sortDownloadSolutionService;
        this.sessionStorageService = sessionStorageService;
        this.solutionService = solutionService;
        this.showPapers = false;
    }
    ResultsAuthorInstanceTechniqueComponent.prototype.onDownload = function (solution) {
        this.sortDownloadSolutionService.download(solution);
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
        this.solutions = this.sortDownloadSolutionService.sortQualityAsc(this.solutions);
    };
    ResultsAuthorInstanceTechniqueComponent.prototype.onQualityDesc = function () {
        this.solutions = this.sortDownloadSolutionService.sortQualityDesc(this.solutions);
    };
    ResultsAuthorInstanceTechniqueComponent.prototype.onScAsc = function () {
        this.solutions = this.sortDownloadSolutionService.sortScAsc(this.solutions);
    };
    ResultsAuthorInstanceTechniqueComponent.prototype.onScDesc = function () {
        this.solutions = this.sortDownloadSolutionService.sortScDesc(this.solutions);
    };
    ResultsAuthorInstanceTechniqueComponent.prototype.onTimeAsc = function () {
        this.solutions = this.sortDownloadSolutionService.sortTimeAsc(this.solutions);
    };
    ResultsAuthorInstanceTechniqueComponent.prototype.onTimeDesc = function () {
        this.solutions = this.sortDownloadSolutionService.sortTimeDesc(this.solutions);
    };
    ResultsAuthorInstanceTechniqueComponent.prototype.onRoomAsc = function () {
        this.solutions = this.sortDownloadSolutionService.sortRoomAsc(this.solutions);
    };
    ResultsAuthorInstanceTechniqueComponent.prototype.onRoomDesc = function () {
        this.solutions = this.sortDownloadSolutionService.sortRoomDesc(this.solutions);
    };
    ResultsAuthorInstanceTechniqueComponent.prototype.onDistributionAsc = function () {
        this.solutions = this.sortDownloadSolutionService.sortDistributionAsc(this.solutions);
    };
    ResultsAuthorInstanceTechniqueComponent.prototype.onDistributionDesc = function () {
        this.solutions = this.sortDownloadSolutionService.sortDistributionDesc(this.solutions);
    };
    ResultsAuthorInstanceTechniqueComponent.prototype.onTechniqueAsc = function () {
        this.solutions = this.sortDownloadSolutionService.sortTechniqueAsc(this.solutions);
    };
    ResultsAuthorInstanceTechniqueComponent.prototype.onTechniqueDesc = function () {
        this.solutions = this.sortDownloadSolutionService.sortTechniqueDesc(this.solutions);
    };
    ResultsAuthorInstanceTechniqueComponent.prototype.onSubmissionTimeAsc = function () {
        this.solutions = this.sortDownloadSolutionService.sortSubmissionTimeAsc(this.solutions);
    };
    ResultsAuthorInstanceTechniqueComponent.prototype.onSubmissionTimeDesc = function () {
        this.solutions = this.sortDownloadSolutionService.sortSubmissionTimeDesc(this.solutions);
    };
    ResultsAuthorInstanceTechniqueComponent.decorators = [
        { type: Component, args: [{
                    selector: 'app-results-author-instance-technique',
                    templateUrl: './results-author-instance-technique.component.html'
                },] },
    ];
    /** @nocollapse */
    ResultsAuthorInstanceTechniqueComponent.ctorParameters = [
        { type: SortDownloadSolutionService, },
        { type: SessionStorageService, },
        { type: SolutionService, },
    ];
    ResultsAuthorInstanceTechniqueComponent.propDecorators = {
        'solutions': [{ type: Input },],
    };
    return ResultsAuthorInstanceTechniqueComponent;
}());
