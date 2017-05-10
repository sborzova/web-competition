import { Component, Input } from "@angular/core";
import { SortDownloadSolutionService } from "../../shared/services/sort-download-solution.service";
import { SolutionService } from "../../shared/services/solution.service";
import { SessionStorageService } from "../../shared/services/session-storage.service";
export var ResultsAuthorComponent = (function () {
    function ResultsAuthorComponent(sortDownloadSolutionService, solutionService, sessionStorageService) {
        this.sortDownloadSolutionService = sortDownloadSolutionService;
        this.solutionService = solutionService;
        this.sessionStorageService = sessionStorageService;
        this.showPapers = false;
    }
    /**
     * When variable solutions change, set variable solutionsAuthorInstance and solutionsAuthorTechnique null.
     *
     * @param changes
     */
    ResultsAuthorComponent.prototype.ngOnChanges = function (changes) {
        this.solutionsAuthorInstance = null;
        this.solutionsAuthorTechnique = null;
    };
    /**
     * Filter solutions by instance.
     *
     * @param instanceId
     */
    ResultsAuthorComponent.prototype.onInstance = function (instanceId) {
        this.solutionsAuthorTechnique = null;
        this.solutionsAuthorInstance = this.solutions.filter(function (s) { return s.instance.instanceId == instanceId; });
    };
    /**
     * Filter solutions by technique.
     *
     * @param technique
     */
    ResultsAuthorComponent.prototype.onTechnique = function (technique) {
        this.solutionsAuthorInstance = null;
        this.solutionsAuthorTechnique = this.solutions.filter(function (s) { return s.technique === technique; });
    };
    ResultsAuthorComponent.prototype.isAdmin = function () {
        return this.sessionStorageService.isAdmin();
    };
    ResultsAuthorComponent.prototype.onDownload = function (solution) {
        this.sortDownloadSolutionService.download(solution);
    };
    ResultsAuthorComponent.prototype.onDelete = function (solution) {
        this.solutionService.deleteSolutionObservable(solution);
    };
    ResultsAuthorComponent.prototype.onSetVisible = function (solution) {
        this.solutionService.setVisibleObservable(solution);
    };
    ResultsAuthorComponent.prototype.onSetNotVisible = function (solution) {
        this.solutionService.setNotVisibleObservable(solution);
    };
    ResultsAuthorComponent.prototype.onShowPapers = function () {
        this.showPapers = true;
    };
    ResultsAuthorComponent.prototype.onHidePapers = function () {
        this.showPapers = false;
    };
    ResultsAuthorComponent.prototype.onQualityAsc = function () {
        this.solutions = this.sortDownloadSolutionService.sortQualityAsc(this.solutions);
    };
    ResultsAuthorComponent.prototype.onQualityDesc = function () {
        this.solutions = this.sortDownloadSolutionService.sortQualityDesc(this.solutions);
    };
    ResultsAuthorComponent.prototype.onScAsc = function () {
        this.solutions = this.sortDownloadSolutionService.sortScAsc(this.solutions);
    };
    ResultsAuthorComponent.prototype.onScDesc = function () {
        this.solutions = this.sortDownloadSolutionService.sortScDesc(this.solutions);
    };
    ResultsAuthorComponent.prototype.onTimeAsc = function () {
        this.solutions = this.sortDownloadSolutionService.sortTimeAsc(this.solutions);
    };
    ResultsAuthorComponent.prototype.onTimeDesc = function () {
        this.solutions = this.sortDownloadSolutionService.sortTimeDesc(this.solutions);
    };
    ResultsAuthorComponent.prototype.onRoomAsc = function () {
        this.solutions = this.sortDownloadSolutionService.sortRoomAsc(this.solutions);
    };
    ResultsAuthorComponent.prototype.onRoomDesc = function () {
        this.solutions = this.sortDownloadSolutionService.sortRoomDesc(this.solutions);
    };
    ResultsAuthorComponent.prototype.onDistributionAsc = function () {
        this.solutions = this.sortDownloadSolutionService.sortDistributionAsc(this.solutions);
    };
    ResultsAuthorComponent.prototype.onDistributionDesc = function () {
        this.solutions = this.sortDownloadSolutionService.sortDistributionDesc(this.solutions);
    };
    ResultsAuthorComponent.prototype.onTechniqueAsc = function () {
        this.solutions = this.sortDownloadSolutionService.sortTechniqueAsc(this.solutions);
    };
    ResultsAuthorComponent.prototype.onTechniqueDesc = function () {
        this.solutions = this.sortDownloadSolutionService.sortTechniqueDesc(this.solutions);
    };
    ResultsAuthorComponent.prototype.onSubmissionTimeAsc = function () {
        this.solutions = this.sortDownloadSolutionService.sortSubmissionTimeAsc(this.solutions);
    };
    ResultsAuthorComponent.prototype.onSubmissionTimeDesc = function () {
        this.solutions = this.sortDownloadSolutionService.sortSubmissionTimeDesc(this.solutions);
    };
    ResultsAuthorComponent.decorators = [
        { type: Component, args: [{
                    selector: 'app-results-author',
                    templateUrl: './results-author.component.html'
                },] },
    ];
    /** @nocollapse */
    ResultsAuthorComponent.ctorParameters = [
        { type: SortDownloadSolutionService, },
        { type: SolutionService, },
        { type: SessionStorageService, },
    ];
    ResultsAuthorComponent.propDecorators = {
        'solutions': [{ type: Input },],
    };
    return ResultsAuthorComponent;
}());
