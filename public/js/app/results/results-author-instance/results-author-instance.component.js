import { Component, Input } from "@angular/core";
import { SolutionService } from "../../shared/services/solution.service";
import { SortDownloadService } from "../../shared/services/sort-download.service";
import { SessionStorageService } from "../../shared/services/session-storage.service";
export var ResultsAuthorInstanceComponent = (function () {
    function ResultsAuthorInstanceComponent(solutionService, sessionStorageService, sortDownloadService) {
        this.solutionService = solutionService;
        this.sessionStorageService = sessionStorageService;
        this.sortDownloadService = sortDownloadService;
        this.showPapers = false;
    }
    /**
     * When variable solutions change, set variable solutionsAuthorInstanceTechnique null.
     *
     * @param changes
     */
    ResultsAuthorInstanceComponent.prototype.ngOnChanges = function (changes) {
        this.solutionsAuthorInstanceTechnique = null;
    };
    /**
     * Filter solutions by technique.
     *
     * @param technique
     */
    ResultsAuthorInstanceComponent.prototype.onTechnique = function (technique) {
        this.solutionsAuthorInstanceTechnique = this.solutions.filter(function (s) { return s.technique == technique; });
    };
    ResultsAuthorInstanceComponent.prototype.isAdmin = function () {
        return this.sessionStorageService.isAdmin();
    };
    ResultsAuthorInstanceComponent.prototype.onDownload = function (solution) {
        this.sortDownloadService.download(solution);
    };
    ResultsAuthorInstanceComponent.prototype.onDelete = function (solution) {
        this.solutionService.deleteSolutionObservable(solution);
    };
    ResultsAuthorInstanceComponent.prototype.onEditTechnique = function (solution) {
        this.solutionService.editSolutionTechniqueObservable(solution);
    };
    ResultsAuthorInstanceComponent.prototype.onSetVisible = function (solution) {
        this.solutionService.setVisibleObservable(solution);
    };
    ResultsAuthorInstanceComponent.prototype.onSetNotVisible = function (solution) {
        this.solutionService.setNotVisibleObservable(solution);
    };
    ResultsAuthorInstanceComponent.prototype.onShowPapers = function () {
        this.showPapers = true;
    };
    ResultsAuthorInstanceComponent.prototype.onHidePapers = function () {
        this.showPapers = false;
    };
    ResultsAuthorInstanceComponent.prototype.onQualityAsc = function () {
        this.solutions = this.sortDownloadService.sortQualityAsc(this.solutions);
    };
    ResultsAuthorInstanceComponent.prototype.onQualityDesc = function () {
        this.solutions = this.sortDownloadService.sortQualityDesc(this.solutions);
    };
    ResultsAuthorInstanceComponent.prototype.onScAsc = function () {
        this.solutions = this.sortDownloadService.sortScAsc(this.solutions);
    };
    ResultsAuthorInstanceComponent.prototype.onScDesc = function () {
        this.solutions = this.sortDownloadService.sortScDesc(this.solutions);
    };
    ResultsAuthorInstanceComponent.prototype.onTimeAsc = function () {
        this.solutions = this.sortDownloadService.sortTimeAsc(this.solutions);
    };
    ResultsAuthorInstanceComponent.prototype.onTimeDesc = function () {
        this.solutions = this.sortDownloadService.sortTimeDesc(this.solutions);
    };
    ResultsAuthorInstanceComponent.prototype.onRoomAsc = function () {
        this.solutions = this.sortDownloadService.sortRoomAsc(this.solutions);
    };
    ResultsAuthorInstanceComponent.prototype.onRoomDesc = function () {
        this.solutions = this.sortDownloadService.sortRoomDesc(this.solutions);
    };
    ResultsAuthorInstanceComponent.prototype.onDistributionAsc = function () {
        this.solutions = this.sortDownloadService.sortDistributionAsc(this.solutions);
    };
    ResultsAuthorInstanceComponent.prototype.onDistributionDesc = function () {
        this.solutions = this.sortDownloadService.sortDistributionDesc(this.solutions);
    };
    ResultsAuthorInstanceComponent.prototype.onTechniqueAsc = function () {
        this.solutions = this.sortDownloadService.sortTechniqueAsc(this.solutions);
    };
    ResultsAuthorInstanceComponent.prototype.onTechniqueDesc = function () {
        this.solutions = this.sortDownloadService.sortTechniqueDesc(this.solutions);
    };
    ResultsAuthorInstanceComponent.prototype.onSubmissionTimeAsc = function () {
        this.solutions = this.sortDownloadService.sortSubmissionTimeAsc(this.solutions);
    };
    ResultsAuthorInstanceComponent.prototype.onSubmissionTimeDesc = function () {
        this.solutions = this.sortDownloadService.sortSubmissionTimeDesc(this.solutions);
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
        { type: SessionStorageService, },
        { type: SortDownloadService, },
    ];
    ResultsAuthorInstanceComponent.propDecorators = {
        'solutions': [{ type: Input },],
    };
    return ResultsAuthorInstanceComponent;
}());
