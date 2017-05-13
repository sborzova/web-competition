import { Component } from "@angular/core";
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { Paper } from "../shared/models/paper.model";
import { SolutionService } from "../shared/services/solution.service";
import { PaperService } from "../shared/services/paper.service";
import { FlashMessageService } from "../flash-message/flash-messages.service";
import { SolutionPaper } from "./solution-paper.model";
import { SortDownloadService } from "../shared/services/sort-download.service";
import { SessionStorageService } from "../shared/services/session-storage.service";
export var UserSolutionsComponent = (function () {
    function UserSolutionsComponent(solutionService, paperService, flashMessageService, sortDownloadService, sessionStorageService) {
        this.solutionService = solutionService;
        this.paperService = paperService;
        this.flashMessageService = flashMessageService;
        this.sortDownloadService = sortDownloadService;
        this.sessionStorageService = sessionStorageService;
        this.showPaperForm = false;
        this.showPapers = false;
        this.submitted = false;
        this.isEdited = false;
        this.disabled = false;
    }
    /**
     * Set to variable solutions all solutions by logged in user.
      */
    UserSolutionsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.solutionService.getSolutionsByLoggedUser()
            .subscribe(function (solutions) {
            _this.solutions = _this.sortDownloadService.sortInstanceAsc(solutions);
        }, function (error) { return console.error(error); });
    };
    /**
     * Create add paper form a show it.
     */
    UserSolutionsComponent.prototype.onAddPaper = function () {
        if (!this.checkIfSelected())
            return;
        if (!this.checkOnlyWithNoPaper())
            return;
        this.disabled = true;
        this.paperForm = new FormGroup({
            citation: new FormControl(null, Validators.required),
            url: new FormControl(null)
        });
        this.submitted = false;
        this.showPaperForm = true;
    };
    /**
     * Open modal dialog to show delete ensure question.
     */
    UserSolutionsComponent.prototype.onDeletePaper = function () {
        if (this.checkIfSelected()) {
            document.getElementById('openModalDeletePaper').click();
        }
    };
    /**
     * Delete papers from selected solutions.
     */
    UserSolutionsComponent.prototype.onConfirmDeletePaper = function () {
        var _this = this;
        var paperIds = new Set();
        for (var _i = 0, _a = this.selectedSolutions; _i < _a.length; _i++) {
            var solution = _a[_i];
            if (solution.paper) {
                paperIds.add(solution.paper.paperId);
                solution.paper = null;
            }
            this.solutionService.deletePaperFromSolution(solution)
                .subscribe(function (solution) {
                _this.flashMessageService.showMessage('Papers were deleted.', 'success');
                _this.uncheckSelected();
            }, function (error) { return console.error(error); });
        }
        this.removePaperFromDatabase(paperIds);
    };
    /**
     *  Delete solution.
     */
    UserSolutionsComponent.prototype.onConfirmDeleteSolution = function () {
        var _this = this;
        this.solutionService.deleteSolution(this.solution)
            .subscribe(function (result) {
            _this.solutions.splice(_this.solutions.indexOf(_this.solution), 1);
            _this.solution = null;
            _this.flashMessageService.showMessage('Solution was deleted.', 'success');
        }, function (error) { return console.error(error); });
    };
    /**
     * Check if can be edit paper.
     */
    UserSolutionsComponent.prototype.onEditPaper = function () {
        if (this.checkIfSelected()) {
            var paperIds = new Set();
            for (var _i = 0, _a = this.selectedSolutions; _i < _a.length; _i++) {
                var solution = _a[_i];
                this.editedPaper = solution.paper;
                if (solution.paper) {
                    paperIds.add(solution.paper.paperId);
                }
                else {
                    this.flashMessageService.showMessage('It is not possible to modify not existing paper. ' +
                        'You must add paper first.', 'danger');
                    return;
                }
            }
            if (paperIds.size != 1) {
                this.flashMessageService.showMessage('It is not possible to modify two different citations at a time. ' +
                    'Please select the same citations only.', 'danger');
            }
            this.prepareToEditPaper(paperIds);
        }
    };
    /**
     * Check if not selected solutions contain selected paper to edit.
     * Create edit paper form.
     *
     * @param paperIds
     */
    UserSolutionsComponent.prototype.prepareToEditPaper = function (paperIds) {
        var paperId = Array.from(paperIds)[0];
        var showMessage = false;
        for (var _i = 0, _a = this.solutions; _i < _a.length; _i++) {
            var solution = _a[_i];
            if (solution.paper && solution.paper.paperId == paperId) {
                if (!solution.isChecked) {
                    showMessage = true;
                    solution.isChecked = true;
                }
            }
        }
        if (showMessage) {
            this.flashMessageService.showMessage('The same citation is also used for other solutions, ' +
                'all of them are modified now.', 'info');
        }
        this.isEdited = true;
        this.submitted = false;
        this.paperForm = new FormGroup({
            citation: new FormControl(this.editedPaper.citation, Validators.required),
            url: new FormControl(this.editedPaper.url)
        });
        this.disabled = true;
        this.showPaperForm = true;
    };
    /**
     * Submit edit paper form or add paper form.
     */
    UserSolutionsComponent.prototype.onSubmit = function () {
        this.submitted = true;
        if (this.paperForm.valid) {
            if (this.isEdited) {
                this.submittedEditPaperForm();
            }
            else {
                this.submittedAddPaperForm();
            }
        }
    };
    /**
     * Submit edit paper form.
     */
    UserSolutionsComponent.prototype.submittedEditPaperForm = function () {
        var _this = this;
        this.editedPaper.citation = this.paperForm.value.citation;
        this.editedPaper.url = this.paperForm.value.url;
        this.paperService.updatePaper(this.editedPaper)
            .subscribe(function () {
            _this.selectedSolutions.forEach(function (s) { return s.paper = _this.editedPaper; });
            _this.isEdited = false;
            _this.editedPaper = null;
            _this.uncheckSelected();
            _this.showPaperForm = false;
            _this.disabled = false;
            _this.flashMessageService.showMessage('Paper was updated', 'success');
        }, function (error) { return console.error(error); });
    };
    /**
     * Submit add paper form.
     */
    UserSolutionsComponent.prototype.submittedAddPaperForm = function () {
        var _this = this;
        var paper = new Paper(this.paperForm.value.citation, this.paperForm.value.url);
        this.paperService.savePaper(paper)
            .subscribe(function (paper) {
            _this.setPaperToSolutions(paper);
        }, function (error) { return console.error(error); });
    };
    /**
     * Set paper to selected solutions.
     *
     * @param paper
     */
    UserSolutionsComponent.prototype.setPaperToSolutions = function (paper) {
        for (var _i = 0, _a = this.selectedSolutions; _i < _a.length; _i++) {
            var s = _a[_i];
            this.solutionService.updateSolutionPaper(new SolutionPaper(s.solutionId, paper.paperId))
                .subscribe(function (result) { }, function (error) { return console.error(error); });
            s.paper = paper;
        }
        this.flashMessageService.showMessage('Paper was saved.', 'success');
        this.uncheckSelected();
        this.disabled = false;
        this.showPaperForm = false;
    };
    /**
     * Check if at least one solution is selected.
     *
     * @returns {boolean} true if at least one solution is selected, other way false.
     */
    UserSolutionsComponent.prototype.checkIfSelected = function () {
        if (this.selectedSolutions.length == 0) {
            this.flashMessageService.showMessage('Select solutions.', 'info');
            return false;
        }
        return true;
    };
    /**
     * All selected solutions set as not selected.
     */
    UserSolutionsComponent.prototype.uncheckSelected = function () {
        for (var _i = 0, _a = this.selectedSolutions; _i < _a.length; _i++) {
            var s = _a[_i];
            s.isChecked = false;
        }
    };
    /**
     * Check if some of selected solutions contain paper.
     *
     * @returns {boolean} true if none of selected solutions contain paper, other way false
     */
    UserSolutionsComponent.prototype.checkOnlyWithNoPaper = function () {
        for (var _i = 0, _a = this.selectedSolutions; _i < _a.length; _i++) {
            var s = _a[_i];
            if (s.paper != null) {
                this.flashMessageService.showMessage('Select only solutions with no papers.', 'danger');
                return false;
            }
        }
        return true;
    };
    /**
     * Delete papers from database if they are not related to any solutions.
     *
     * @param paperIds - papers' ids which were deleted from solutions.
     */
    UserSolutionsComponent.prototype.removePaperFromDatabase = function (paperIds) {
        for (var _i = 0, _a = this.solutions; _i < _a.length; _i++) {
            var solution = _a[_i];
            if (solution.paper) {
                if (paperIds.has(solution.paper.paperId)) {
                    paperIds.delete(solution.paper.paperId);
                }
            }
        }
        var paperIdsArray = Array.from(paperIds);
        for (var _b = 0, paperIdsArray_1 = paperIdsArray; _b < paperIdsArray_1.length; _b++) {
            var paperId = paperIdsArray_1[_b];
            this.paperService.deletePaper(paperId)
                .subscribe(function (solution) { }, function (error) { return console.error(error); });
        }
    };
    Object.defineProperty(UserSolutionsComponent.prototype, "selectedSolutions", {
        get: function () {
            return this.solutions.filter(function (s) { return s.isChecked; });
        },
        enumerable: true,
        configurable: true
    });
    UserSolutionsComponent.prototype.competitionIsOn = function () {
        return this.sessionStorageService.getCompetitionIsOn();
    };
    UserSolutionsComponent.prototype.onHidePaperForm = function () {
        this.uncheckSelected();
        this.disabled = false;
        this.showPaperForm = false;
    };
    UserSolutionsComponent.prototype.onDownload = function (solution) {
        this.sortDownloadService.download(solution);
    };
    UserSolutionsComponent.prototype.onDelete = function (solution) {
        this.solution = solution;
        document.getElementById('openModalDeleteSolution').click();
    };
    UserSolutionsComponent.prototype.onShowPapers = function () {
        this.showPapers = true;
    };
    UserSolutionsComponent.prototype.onHidePapers = function () {
        this.showPapers = false;
    };
    UserSolutionsComponent.prototype.onQualityAsc = function () {
        this.solutions = this.sortDownloadService.sortQualityAsc(this.solutions);
    };
    UserSolutionsComponent.prototype.onQualityDesc = function () {
        this.solutions = this.sortDownloadService.sortQualityDesc(this.solutions);
    };
    UserSolutionsComponent.prototype.onScAsc = function () {
        this.solutions = this.sortDownloadService.sortScAsc(this.solutions);
    };
    UserSolutionsComponent.prototype.onScDesc = function () {
        this.solutions = this.sortDownloadService.sortScDesc(this.solutions);
    };
    UserSolutionsComponent.prototype.onTimeAsc = function () {
        this.solutions = this.sortDownloadService.sortTimeAsc(this.solutions);
    };
    UserSolutionsComponent.prototype.onTimeDesc = function () {
        this.solutions = this.sortDownloadService.sortTimeDesc(this.solutions);
    };
    UserSolutionsComponent.prototype.onRoomAsc = function () {
        this.solutions = this.sortDownloadService.sortRoomAsc(this.solutions);
    };
    UserSolutionsComponent.prototype.onRoomDesc = function () {
        this.solutions = this.sortDownloadService.sortRoomDesc(this.solutions);
    };
    UserSolutionsComponent.prototype.onDistributionAsc = function () {
        this.solutions = this.sortDownloadService.sortDistributionAsc(this.solutions);
    };
    UserSolutionsComponent.prototype.onDistributionDesc = function () {
        this.solutions = this.sortDownloadService.sortDistributionDesc(this.solutions);
    };
    UserSolutionsComponent.prototype.onTechniqueAsc = function () {
        this.solutions = this.sortDownloadService.sortTechniqueAsc(this.solutions);
    };
    UserSolutionsComponent.prototype.onTechniqueDesc = function () {
        this.solutions = this.sortDownloadService.sortTechniqueDesc(this.solutions);
    };
    UserSolutionsComponent.prototype.onSubmissionTimeAsc = function () {
        this.solutions = this.sortDownloadService.sortSubmissionTimeAsc(this.solutions);
    };
    UserSolutionsComponent.prototype.onSubmissionTimeDesc = function () {
        this.solutions = this.sortDownloadService.sortSubmissionTimeDesc(this.solutions);
    };
    UserSolutionsComponent.prototype.onInstanceAsc = function () {
        this.solutions = this.sortDownloadService.sortInstanceAsc(this.solutions);
    };
    UserSolutionsComponent.prototype.onInstanceDesc = function () {
        this.solutions = this.sortDownloadService.sortInstanceDesc(this.solutions);
    };
    UserSolutionsComponent.prototype.ngOnDestroy = function () {
        this.showPaperForm = false;
        this.submitted = false;
        this.isEdited = false;
        this.showPapers = false;
        this.editedPaper = null;
    };
    UserSolutionsComponent.decorators = [
        { type: Component, args: [{
                    selector: 'app-user-solutions',
                    templateUrl: './user-solutions.component.html',
                    styleUrls: ['user-solutions.component.css']
                },] },
    ];
    /** @nocollapse */
    UserSolutionsComponent.ctorParameters = [
        { type: SolutionService, },
        { type: PaperService, },
        { type: FlashMessageService, },
        { type: SortDownloadService, },
        { type: SessionStorageService, },
    ];
    return UserSolutionsComponent;
}());
