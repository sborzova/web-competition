import { Component, Input } from "@angular/core";
import { SortDownloadService } from "../../shared/services/sort-download.service";
import { SolutionService } from "../../shared/services/solution.service";
import { SessionStorageService } from "../../shared/services/session-storage.service";
/**
 * Component for showing results for author.
 */
export var ResultsAuthorComponent = (function () {
    /**
     *  When creating component, inject dependencies.
     *
     * @param sortDownloadService
     * @param solutionService
     * @param sessionStorageService
     */
    function ResultsAuthorComponent(sortDownloadService, solutionService, sessionStorageService) {
        this.sortDownloadService = sortDownloadService;
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
        this.sortDownloadService.download(solution);
    };
    ResultsAuthorComponent.prototype.onDelete = function (solution) {
        this.solutionService.deleteSolutionObservable(solution);
    };
    ResultsAuthorComponent.prototype.onEditTechnique = function (solution) {
        this.solutionService.editSolutionTechniqueObservable(solution);
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
        this.solutions = this.sortDownloadService.sortQualityAsc(this.solutions);
    };
    ResultsAuthorComponent.prototype.onQualityDesc = function () {
        this.solutions = this.sortDownloadService.sortQualityDesc(this.solutions);
    };
    ResultsAuthorComponent.prototype.onScAsc = function () {
        this.solutions = this.sortDownloadService.sortScAsc(this.solutions);
    };
    ResultsAuthorComponent.prototype.onScDesc = function () {
        this.solutions = this.sortDownloadService.sortScDesc(this.solutions);
    };
    ResultsAuthorComponent.prototype.onTimeAsc = function () {
        this.solutions = this.sortDownloadService.sortTimeAsc(this.solutions);
    };
    ResultsAuthorComponent.prototype.onTimeDesc = function () {
        this.solutions = this.sortDownloadService.sortTimeDesc(this.solutions);
    };
    ResultsAuthorComponent.prototype.onRoomAsc = function () {
        this.solutions = this.sortDownloadService.sortRoomAsc(this.solutions);
    };
    ResultsAuthorComponent.prototype.onRoomDesc = function () {
        this.solutions = this.sortDownloadService.sortRoomDesc(this.solutions);
    };
    ResultsAuthorComponent.prototype.onDistributionAsc = function () {
        this.solutions = this.sortDownloadService.sortDistributionAsc(this.solutions);
    };
    ResultsAuthorComponent.prototype.onDistributionDesc = function () {
        this.solutions = this.sortDownloadService.sortDistributionDesc(this.solutions);
    };
    ResultsAuthorComponent.prototype.onTechniqueAsc = function () {
        this.solutions = this.sortDownloadService.sortTechniqueAsc(this.solutions);
    };
    ResultsAuthorComponent.prototype.onTechniqueDesc = function () {
        this.solutions = this.sortDownloadService.sortTechniqueDesc(this.solutions);
    };
    ResultsAuthorComponent.prototype.onSubmissionTimeAsc = function () {
        this.solutions = this.sortDownloadService.sortSubmissionTimeAsc(this.solutions);
    };
    ResultsAuthorComponent.prototype.onSubmissionTimeDesc = function () {
        this.solutions = this.sortDownloadService.sortSubmissionTimeDesc(this.solutions);
    };
    ResultsAuthorComponent.prototype.onInstanceAsc = function () {
        this.solutions = this.sortDownloadService.sortInstanceAsc(this.solutions);
    };
    ResultsAuthorComponent.prototype.onInstanceDesc = function () {
        this.solutions = this.sortDownloadService.sortInstanceDesc(this.solutions);
    };
    ResultsAuthorComponent.decorators = [
        { type: Component, args: [{
                    selector: 'app-results-author',
                    templateUrl: './results-author.component.html'
                },] },
    ];
    /** @nocollapse */
    ResultsAuthorComponent.ctorParameters = [
        { type: SortDownloadService, },
        { type: SolutionService, },
        { type: SessionStorageService, },
    ];
    ResultsAuthorComponent.propDecorators = {
        'solutions': [{ type: Input },],
    };
    return ResultsAuthorComponent;
}());
