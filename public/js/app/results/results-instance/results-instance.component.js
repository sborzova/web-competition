import { Component, Input } from "@angular/core";
import { SortDownloadService } from "../../shared/services/sort-download.service";
import { SolutionService } from "../../shared/services/solution.service";
import { SessionStorageService } from "../../shared/services/session-storage.service";
/**
 * Component for showing results for instance
 */
export var ResultsInstanceComponent = (function () {
    /**
     *  When creating component, inject dependencies.
     *
     * @param sortDownloadService
     * @param solutionService
     * @param sessionStorageService
     */
    function ResultsInstanceComponent(sortDownloadService, solutionService, sessionStorageService) {
        this.sortDownloadService = sortDownloadService;
        this.solutionService = solutionService;
        this.sessionStorageService = sessionStorageService;
        this.showPapers = false;
    }
    /**
     * When variable solutions change, set variable solutionsAuthorInstance null.
     *
     * @param changes
     */
    ResultsInstanceComponent.prototype.ngOnChanges = function (changes) {
        this.solutionsAuthorInstance = null;
    };
    /**
     * Filter solutions by author.
     *
     * @param authorId
     */
    ResultsInstanceComponent.prototype.onAuthor = function (authorId) {
        this.solutionsAuthorInstance = this.solutions.filter(function (s) { return s.author.authorId == authorId; });
    };
    ResultsInstanceComponent.prototype.isAdmin = function () {
        return this.sessionStorageService.isAdmin();
    };
    ResultsInstanceComponent.prototype.onDelete = function (solution) {
        this.solutionService.deleteSolutionObservable(solution);
    };
    ResultsInstanceComponent.prototype.onEditTechnique = function (solution) {
        this.solutionService.editSolutionTechniqueObservable(solution);
    };
    ResultsInstanceComponent.prototype.onSetVisible = function (solution) {
        this.solutionService.setVisibleObservable(solution);
    };
    ResultsInstanceComponent.prototype.onSetNotVisible = function (solution) {
        this.solutionService.setNotVisibleObservable(solution);
    };
    ResultsInstanceComponent.prototype.onDownload = function (solution) {
        this.sortDownloadService.download(solution);
    };
    ResultsInstanceComponent.prototype.onShowPapers = function () {
        this.showPapers = true;
    };
    ResultsInstanceComponent.prototype.onHidePapers = function () {
        this.showPapers = false;
    };
    ResultsInstanceComponent.prototype.onQualityAsc = function () {
        this.solutions = this.sortDownloadService.sortQualityAsc(this.solutions);
    };
    ResultsInstanceComponent.prototype.onQualityDesc = function () {
        this.solutions = this.sortDownloadService.sortQualityDesc(this.solutions);
    };
    ResultsInstanceComponent.prototype.onScAsc = function () {
        this.solutions = this.sortDownloadService.sortScAsc(this.solutions);
    };
    ResultsInstanceComponent.prototype.onScDesc = function () {
        this.solutions = this.sortDownloadService.sortScDesc(this.solutions);
    };
    ResultsInstanceComponent.prototype.onTimeAsc = function () {
        this.solutions = this.sortDownloadService.sortTimeAsc(this.solutions);
    };
    ResultsInstanceComponent.prototype.onTimeDesc = function () {
        this.solutions = this.sortDownloadService.sortTimeDesc(this.solutions);
    };
    ResultsInstanceComponent.prototype.onRoomAsc = function () {
        this.solutions = this.sortDownloadService.sortRoomAsc(this.solutions);
    };
    ResultsInstanceComponent.prototype.onRoomDesc = function () {
        this.solutions = this.sortDownloadService.sortRoomDesc(this.solutions);
    };
    ResultsInstanceComponent.prototype.onDistributionAsc = function () {
        this.solutions = this.sortDownloadService.sortDistributionAsc(this.solutions);
    };
    ResultsInstanceComponent.prototype.onDistributionDesc = function () {
        this.solutions = this.sortDownloadService.sortDistributionDesc(this.solutions);
    };
    ResultsInstanceComponent.prototype.onTechniqueAsc = function () {
        this.solutions = this.sortDownloadService.sortTechniqueAsc(this.solutions);
    };
    ResultsInstanceComponent.prototype.onTechniqueDesc = function () {
        this.solutions = this.sortDownloadService.sortTechniqueDesc(this.solutions);
    };
    ResultsInstanceComponent.prototype.onSubmissionTimeAsc = function () {
        this.solutions = this.sortDownloadService.sortSubmissionTimeAsc(this.solutions);
    };
    ResultsInstanceComponent.prototype.onSubmissionTimeDesc = function () {
        this.solutions = this.sortDownloadService.sortSubmissionTimeDesc(this.solutions);
    };
    ResultsInstanceComponent.prototype.onAuthorAsc = function () {
        this.solutions = this.sortDownloadService.sortAuthorAsc(this.solutions);
    };
    ResultsInstanceComponent.prototype.onAuthorDesc = function () {
        this.solutions = this.sortDownloadService.sortAuthorDesc(this.solutions);
    };
    ResultsInstanceComponent.decorators = [
        { type: Component, args: [{
                    selector: 'app-results-instance',
                    templateUrl: './results-instance.component.html'
                },] },
    ];
    /** @nocollapse */
    ResultsInstanceComponent.ctorParameters = [
        { type: SortDownloadService, },
        { type: SolutionService, },
        { type: SessionStorageService, },
    ];
    ResultsInstanceComponent.propDecorators = {
        'solutions': [{ type: Input },],
    };
    return ResultsInstanceComponent;
}());
