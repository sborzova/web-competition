import { Component, Input } from "@angular/core";
import { SortService } from "../../shared/sort.service";
import { SolutionService } from "../../shared/solution.service";
import { FlashMessageService } from "../../flash-message/flash-messages.service";
import { SessionStorageService } from "../../shared/session-storage.service";
export var ResultsAuthorComponent = (function () {
    function ResultsAuthorComponent(sortService, solutionService, sessionStorageService, flashMessageService) {
        this.sortService = sortService;
        this.solutionService = solutionService;
        this.sessionStorageService = sessionStorageService;
        this.flashMessageService = flashMessageService;
        this.showPapers = false;
    }
    ResultsAuthorComponent.prototype.ngOnChanges = function (changes) {
        this.solutionsAuthorInstance = null;
        this.solutionsAuthorTechnique = null;
    };
    ResultsAuthorComponent.prototype.isAdmin = function () {
        return this.sessionStorageService.isAdmin();
    };
    ResultsAuthorComponent.prototype.onDownload = function (solution) {
        this.sortService.download(solution);
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
    ResultsAuthorComponent.prototype.onInstance = function (instanceId) {
        this.solutionsAuthorInstance = this.solutions.filter(function (s) { return s.instance.instanceId == instanceId; });
    };
    ResultsAuthorComponent.prototype.onTechnique = function (technique) {
        this.solutionsAuthorTechnique = this.solutions.filter(function (s) { return s.technique === technique; });
    };
    ResultsAuthorComponent.prototype.onQualityAsc = function () {
        this.solutions = this.sortService.sortQualityAsc(this.solutions);
    };
    ResultsAuthorComponent.prototype.onQualityDesc = function () {
        this.solutions = this.sortService.sortQualityDesc(this.solutions);
    };
    ResultsAuthorComponent.prototype.onScAsc = function () {
        this.solutions = this.sortService.sortScAsc(this.solutions);
    };
    ResultsAuthorComponent.prototype.onScDesc = function () {
        this.solutions = this.sortService.sortScDesc(this.solutions);
    };
    ResultsAuthorComponent.prototype.onTimeAsc = function () {
        this.solutions = this.sortService.sortTimeAsc(this.solutions);
    };
    ResultsAuthorComponent.prototype.onTimeDesc = function () {
        this.solutions = this.sortService.sortTimeDesc(this.solutions);
    };
    ResultsAuthorComponent.prototype.onRoomAsc = function () {
        this.solutions = this.sortService.sortRoomAsc(this.solutions);
    };
    ResultsAuthorComponent.prototype.onRoomDesc = function () {
        this.solutions = this.sortService.sortRoomDesc(this.solutions);
    };
    ResultsAuthorComponent.prototype.onDistributionAsc = function () {
        this.solutions = this.sortService.sortDistributionAsc(this.solutions);
    };
    ResultsAuthorComponent.prototype.onDistributionDesc = function () {
        this.solutions = this.sortService.sortDistributionDesc(this.solutions);
    };
    ResultsAuthorComponent.prototype.onTechniqueAsc = function () {
        this.solutions = this.sortService.sortTechniqueAsc(this.solutions);
    };
    ResultsAuthorComponent.prototype.onTechniqueDesc = function () {
        this.solutions = this.sortService.sortTechniqueDesc(this.solutions);
    };
    ResultsAuthorComponent.prototype.onSubmissionTimeAsc = function () {
        this.solutions = this.sortService.sortSubmissionTimeAsc(this.solutions);
    };
    ResultsAuthorComponent.prototype.onSubmissionTimeDesc = function () {
        this.solutions = this.sortService.sortSubmissionTimeDesc(this.solutions);
    };
    ResultsAuthorComponent.decorators = [
        { type: Component, args: [{
                    selector: 'app-results-author',
                    templateUrl: './results-author.component.html'
                },] },
    ];
    /** @nocollapse */
    ResultsAuthorComponent.ctorParameters = [
        { type: SortService, },
        { type: SolutionService, },
        { type: SessionStorageService, },
        { type: FlashMessageService, },
    ];
    ResultsAuthorComponent.propDecorators = {
        'solutions': [{ type: Input },],
    };
    return ResultsAuthorComponent;
}());
