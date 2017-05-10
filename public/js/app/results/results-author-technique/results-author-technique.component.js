import { Component, Input } from "@angular/core";
import { SortDownloadSolutionService } from "../../shared/services/sort-download-solution.service";
import { SolutionService } from "../../shared/services/solution.service";
import { SessionStorageService } from "../../shared/services/session-storage.service";
export var ResultsAuthorTechniqueComponent = (function () {
    function ResultsAuthorTechniqueComponent(sortDownloadSolutionService, sessionStorageService, solutionService) {
        this.sortDownloadSolutionService = sortDownloadSolutionService;
        this.sessionStorageService = sessionStorageService;
        this.solutionService = solutionService;
        this.showPapers = false;
    }
    /**
     * When variable solutions change, set variable solutionsAuthorInstanceTechnique null.
     *
     * @param changes
     */
    ResultsAuthorTechniqueComponent.prototype.ngOnChanges = function (changes) {
        this.solutionsAuthorInstanceTechnique = null;
    };
    /**
     * Filter solutions by instance.
     *
     * @param instanceId
     */
    ResultsAuthorTechniqueComponent.prototype.onInstance = function (instanceId) {
        this.solutionsAuthorInstanceTechnique = this.solutions.filter(function (s) { return s.instance.instanceId == instanceId; });
    };
    ResultsAuthorTechniqueComponent.prototype.isAdmin = function () {
        return this.sessionStorageService.isAdmin();
    };
    ResultsAuthorTechniqueComponent.prototype.onDownload = function (solution) {
        this.sortDownloadSolutionService.download(solution);
    };
    ResultsAuthorTechniqueComponent.prototype.onDelete = function (solution) {
        this.solutionService.deleteSolutionObservable(solution);
    };
    ResultsAuthorTechniqueComponent.prototype.onSetVisible = function (solution) {
        this.solutionService.setVisibleObservable(solution);
    };
    ResultsAuthorTechniqueComponent.prototype.onSetNotVisible = function (solution) {
        this.solutionService.setNotVisibleObservable(solution);
    };
    ResultsAuthorTechniqueComponent.prototype.onShowPapers = function () {
        this.showPapers = true;
    };
    ResultsAuthorTechniqueComponent.prototype.onHidePapers = function () {
        this.showPapers = false;
    };
    ResultsAuthorTechniqueComponent.prototype.onQualityAsc = function () {
        this.solutions = this.sortDownloadSolutionService.sortQualityAsc(this.solutions);
    };
    ResultsAuthorTechniqueComponent.prototype.onQualityDesc = function () {
        this.solutions = this.sortDownloadSolutionService.sortQualityDesc(this.solutions);
    };
    ResultsAuthorTechniqueComponent.prototype.onScAsc = function () {
        this.solutions = this.sortDownloadSolutionService.sortScAsc(this.solutions);
    };
    ResultsAuthorTechniqueComponent.prototype.onScDesc = function () {
        this.solutions = this.sortDownloadSolutionService.sortScDesc(this.solutions);
    };
    ResultsAuthorTechniqueComponent.prototype.onTimeAsc = function () {
        this.solutions = this.sortDownloadSolutionService.sortTimeAsc(this.solutions);
    };
    ResultsAuthorTechniqueComponent.prototype.onTimeDesc = function () {
        this.solutions = this.sortDownloadSolutionService.sortTimeDesc(this.solutions);
    };
    ResultsAuthorTechniqueComponent.prototype.onRoomAsc = function () {
        this.solutions = this.sortDownloadSolutionService.sortRoomAsc(this.solutions);
    };
    ResultsAuthorTechniqueComponent.prototype.onRoomDesc = function () {
        this.solutions = this.sortDownloadSolutionService.sortRoomDesc(this.solutions);
    };
    ResultsAuthorTechniqueComponent.prototype.onDistributionAsc = function () {
        this.solutions = this.sortDownloadSolutionService.sortDistributionAsc(this.solutions);
    };
    ResultsAuthorTechniqueComponent.prototype.onDistributionDesc = function () {
        this.solutions = this.sortDownloadSolutionService.sortDistributionDesc(this.solutions);
    };
    ResultsAuthorTechniqueComponent.prototype.onTechniqueAsc = function () {
        this.solutions = this.sortDownloadSolutionService.sortTechniqueAsc(this.solutions);
    };
    ResultsAuthorTechniqueComponent.prototype.onTechniqueDesc = function () {
        this.solutions = this.sortDownloadSolutionService.sortTechniqueDesc(this.solutions);
    };
    ResultsAuthorTechniqueComponent.prototype.onSubmissionTimeAsc = function () {
        this.solutions = this.sortDownloadSolutionService.sortSubmissionTimeAsc(this.solutions);
    };
    ResultsAuthorTechniqueComponent.prototype.onSubmissionTimeDesc = function () {
        this.solutions = this.sortDownloadSolutionService.sortSubmissionTimeDesc(this.solutions);
    };
    ResultsAuthorTechniqueComponent.decorators = [
        { type: Component, args: [{
                    selector: 'app-results-author-technique',
                    templateUrl: './results-author-technique.component.html'
                },] },
    ];
    /** @nocollapse */
    ResultsAuthorTechniqueComponent.ctorParameters = [
        { type: SortDownloadSolutionService, },
        { type: SessionStorageService, },
        { type: SolutionService, },
    ];
    ResultsAuthorTechniqueComponent.propDecorators = {
        'solutions': [{ type: Input },],
    };
    return ResultsAuthorTechniqueComponent;
}());
