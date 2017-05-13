import { Component, Input } from "@angular/core";
import { SortDownloadService } from "../../shared/services/sort-download.service";
import { SolutionService } from "../../shared/services/solution.service";
import { SessionStorageService } from "../../shared/services/session-storage.service";
export var ResultsAuthorTechniqueComponent = (function () {
    function ResultsAuthorTechniqueComponent(sortDownloadService, sessionStorageService, solutionService) {
        this.sortDownloadService = sortDownloadService;
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
        this.sortDownloadService.download(solution);
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
        this.solutions = this.sortDownloadService.sortQualityAsc(this.solutions);
    };
    ResultsAuthorTechniqueComponent.prototype.onQualityDesc = function () {
        this.solutions = this.sortDownloadService.sortQualityDesc(this.solutions);
    };
    ResultsAuthorTechniqueComponent.prototype.onScAsc = function () {
        this.solutions = this.sortDownloadService.sortScAsc(this.solutions);
    };
    ResultsAuthorTechniqueComponent.prototype.onScDesc = function () {
        this.solutions = this.sortDownloadService.sortScDesc(this.solutions);
    };
    ResultsAuthorTechniqueComponent.prototype.onTimeAsc = function () {
        this.solutions = this.sortDownloadService.sortTimeAsc(this.solutions);
    };
    ResultsAuthorTechniqueComponent.prototype.onTimeDesc = function () {
        this.solutions = this.sortDownloadService.sortTimeDesc(this.solutions);
    };
    ResultsAuthorTechniqueComponent.prototype.onRoomAsc = function () {
        this.solutions = this.sortDownloadService.sortRoomAsc(this.solutions);
    };
    ResultsAuthorTechniqueComponent.prototype.onRoomDesc = function () {
        this.solutions = this.sortDownloadService.sortRoomDesc(this.solutions);
    };
    ResultsAuthorTechniqueComponent.prototype.onDistributionAsc = function () {
        this.solutions = this.sortDownloadService.sortDistributionAsc(this.solutions);
    };
    ResultsAuthorTechniqueComponent.prototype.onDistributionDesc = function () {
        this.solutions = this.sortDownloadService.sortDistributionDesc(this.solutions);
    };
    ResultsAuthorTechniqueComponent.prototype.onTechniqueAsc = function () {
        this.solutions = this.sortDownloadService.sortTechniqueAsc(this.solutions);
    };
    ResultsAuthorTechniqueComponent.prototype.onTechniqueDesc = function () {
        this.solutions = this.sortDownloadService.sortTechniqueDesc(this.solutions);
    };
    ResultsAuthorTechniqueComponent.prototype.onSubmissionTimeAsc = function () {
        this.solutions = this.sortDownloadService.sortSubmissionTimeAsc(this.solutions);
    };
    ResultsAuthorTechniqueComponent.prototype.onSubmissionTimeDesc = function () {
        this.solutions = this.sortDownloadService.sortSubmissionTimeDesc(this.solutions);
    };
    ResultsAuthorTechniqueComponent.prototype.onInstanceAsc = function () {
        this.solutions = this.sortDownloadService.sortInstanceAsc(this.solutions);
    };
    ResultsAuthorTechniqueComponent.prototype.onInstanceDesc = function () {
        this.solutions = this.sortDownloadService.sortInstanceDesc(this.solutions);
    };
    ResultsAuthorTechniqueComponent.decorators = [
        { type: Component, args: [{
                    selector: 'app-results-author-technique',
                    templateUrl: './results-author-technique.component.html'
                },] },
    ];
    /** @nocollapse */
    ResultsAuthorTechniqueComponent.ctorParameters = [
        { type: SortDownloadService, },
        { type: SessionStorageService, },
        { type: SolutionService, },
    ];
    ResultsAuthorTechniqueComponent.propDecorators = {
        'solutions': [{ type: Input },],
    };
    return ResultsAuthorTechniqueComponent;
}());
