import { Component } from "@angular/core";
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { Paper } from "./paper.model";
import { SolutionService } from "../shared/solution.service";
import { PaperService } from "../shared/paper.service";
import { FlashMessageService } from "../flash-message/flash-messages.service";
import { SolutionPaper } from "./solution-paper.model";
import { SortService } from "../shared/sort.service";
export var UserSolutionsComponent = (function () {
    function UserSolutionsComponent(solutionService, paperService, flashMessageService, sortService) {
        this.solutionService = solutionService;
        this.paperService = paperService;
        this.flashMessageService = flashMessageService;
        this.sortService = sortService;
        this.fileSaver = require('file-saver');
        this.showPaperForm = false;
        this.showPapers = false;
        this.submitted = false;
        this.isEdited = false;
    }
    UserSolutionsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.solutionService.getSolutionsByLoggedUser()
            .subscribe(function (solutions) {
            _this.solutions = solutions;
        }, function (error) { return console.error(error); });
    };
    UserSolutionsComponent.prototype.ngOnDestroy = function () {
        this.showPaperForm = false;
        this.submitted = false;
        this.isEdited = false;
        this.showPapers = false;
        this.editedPaper = null;
    };
    UserSolutionsComponent.prototype.onDownload = function (solution) {
        var file = new File([solution.data], 'solution.xml', { type: "text/xml;charset=utf-8" });
        this.fileSaver.saveAs(file);
    };
    UserSolutionsComponent.prototype.onAddPaper = function () {
        if (!this.checkIfSelected())
            return;
        if (!this.checkOnlyWithNoPaper())
            return;
        var solutions = this.selectedSolutions;
        this.myForm = new FormGroup({
            citation: new FormControl(null, Validators.required),
            url: new FormControl(null)
        });
        this.submitted = false;
        this.showPaperForm = true;
    };
    UserSolutionsComponent.prototype.onRemovePaper = function () {
        var _this = this;
        this.checkIfSelected();
        var paperIds = new Set();
        for (var _i = 0, _a = this.selectedSolutions; _i < _a.length; _i++) {
            var solution = _a[_i];
            if (solution.paper) {
                paperIds.add(solution.paper.paperId);
                solution.paper = null;
            }
            this.solutionService.deletePaperFromSolution(solution)
                .subscribe(function (solution) {
                _this.flashMessageService.showMessage('Papers were deleted.', 'alert-success');
                _this.uncheckSelected();
            }, function (error) { return console.error(error); });
        }
        this.removePaperFromDatabase(paperIds);
    };
    UserSolutionsComponent.prototype.onEditPaper = function () {
        if (this.checkIfSelected()) {
            //TODO do setu dat cely paper?
            var paperIds = new Set();
            for (var _i = 0, _a = this.selectedSolutions; _i < _a.length; _i++) {
                var solution = _a[_i];
                this.editedPaper = solution.paper;
                if (solution.paper) {
                    paperIds.add(solution.paper.paperId);
                }
                else {
                    this.flashMessageService.showMessage('It is not possible to modify not existing paper. ' +
                        'You must add paper first.', 'alert-danger');
                    return;
                }
            }
            if (paperIds.size != 1) {
                this.flashMessageService.showMessage('It is not possible to modify two different citations at a time. ' +
                    'Please select the same citations only.', 'alert-danger');
            }
            var paperId = Array.from(paperIds)[0];
            var showMessage = false;
            for (var _b = 0, _c = this.solutions; _b < _c.length; _b++) {
                var solution = _c[_b];
                if (solution.paper && solution.paper.paperId == paperId) {
                    if (!solution.isChecked) {
                        showMessage = true;
                        solution.isChecked = true;
                    }
                }
            }
            if (showMessage) {
                this.flashMessageService.showMessage('The same citation is also used for other solutions, ' +
                    'all of them are modified now', 'alert-info');
            }
            this.isEdited = true;
            this.submitted = false;
            this.myForm = new FormGroup({
                citation: new FormControl(this.editedPaper.citation, Validators.required),
                url: new FormControl(this.editedPaper.url)
            });
            this.showPaperForm = true;
        }
    };
    UserSolutionsComponent.prototype.onSubmit = function () {
        var _this = this;
        this.submitted = true;
        if (this.myForm.valid) {
            if (this.isEdited) {
                this.editedPaper.citation = this.myForm.value.citation;
                this.editedPaper.url = this.myForm.value.url;
                this.paperService.updatePaper(this.editedPaper)
                    .subscribe(function () {
                    _this.selectedSolutions.forEach(function (s) { return s.paper = _this.editedPaper; });
                    _this.isEdited = false;
                    _this.editedPaper = null;
                    _this.uncheckSelected();
                    _this.showPaperForm = false;
                    _this.flashMessageService.showMessage('Paper was updated', 'alert-success');
                }, function (error) { return console.error(error); });
            }
            else {
                var paper = new Paper(this.myForm.value.citation, this.myForm.value.url);
                this.paperService.savePaper(paper)
                    .subscribe(function (paper) {
                    _this.setPaperToSolutions(paper);
                }, function (error) { return console.error(error); });
            }
        }
    };
    UserSolutionsComponent.prototype.setPaperToSolutions = function (paper) {
        for (var _i = 0, _a = this.selectedSolutions; _i < _a.length; _i++) {
            var s = _a[_i];
            this.solutionService.updateSolutionPaper(new SolutionPaper(s.solutionId, paper.paperId))
                .subscribe(function (result) { }, function (error) { return console.error(error); });
            s.paper = paper;
        }
        this.flashMessageService.showMessage('Paper was saved.', 'alert-success');
        this.uncheckSelected();
        this.showPaperForm = false;
    };
    Object.defineProperty(UserSolutionsComponent.prototype, "selectedSolutions", {
        get: function () {
            return this.solutions.filter(function (s) { return s.isChecked; });
        },
        enumerable: true,
        configurable: true
    });
    UserSolutionsComponent.prototype.isShowPaperForm = function () {
        return this.showPaperForm;
    };
    UserSolutionsComponent.prototype.isShowPapers = function () {
        return this.showPapers;
    };
    UserSolutionsComponent.prototype.onShowPapers = function () {
        this.showPapers = true;
    };
    UserSolutionsComponent.prototype.onHidePapers = function () {
        this.showPapers = false;
    };
    UserSolutionsComponent.prototype.onHidePaperForm = function () {
        this.uncheckSelected();
        this.showPaperForm = false;
    };
    UserSolutionsComponent.prototype.isSubmitted = function () {
        return this.submitted;
    };
    // onQualityAsc(){
    //     this.solutions = this.sortService.sortQualityAsc(this.solutions);
    // }
    //
    // onQualityDesc(){
    //     this.solutions = this.sortService.sortQualityDesc(this.solutions);
    // }
    //
    // onScAsc(){
    //     this.solutions = this.sortService.sortScAsc(this.solutions);
    // }
    //
    // onScDesc(){
    //     this.solutions = this.sortService.sortScDesc(this.solutions);
    // }
    //
    // onTimeAsc(){
    //     this.solutions = this.sortService.sortTimeAsc(this.solutions);
    // }
    //
    // onTimeDesc(){
    //     this.solutions = this.sortService.sortTimeDesc(this.solutions);
    // }
    //
    // onRoomAsc(){
    //     this.solutions = this.sortService.sortRoomAsc(this.solutions);
    // }
    //
    // onRoomDesc(){
    //     this.solutions = this.sortService.sortRoomDesc(this.solutions);
    // }
    //
    // onDistributionAsc(){
    //     this.solutions = this.sortService.sortDistributionAsc(this.solutions);
    // }
    //
    // onDistributionDesc(){
    //     this.solutions = this.sortService.sortDistributionDesc(this.solutions);
    // }
    UserSolutionsComponent.prototype.checkIfSelected = function () {
        if (this.selectedSolutions.length == 0) {
            this.flashMessageService.showMessage('Select solutions.', 'alert-info');
            return false;
        }
        return true;
    };
    UserSolutionsComponent.prototype.uncheckSelected = function () {
        for (var _i = 0, _a = this.selectedSolutions; _i < _a.length; _i++) {
            var s = _a[_i];
            s.isChecked = false;
        }
    };
    UserSolutionsComponent.prototype.checkOnlyWithNoPaper = function () {
        for (var _i = 0, _a = this.selectedSolutions; _i < _a.length; _i++) {
            var s = _a[_i];
            if (s.paper != null) {
                this.flashMessageService.showMessage('Select only solutions with no papers.', 'alert-danger');
                return false;
            }
        }
        return true;
    };
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
    UserSolutionsComponent.decorators = [
        { type: Component, args: [{
                    selector: 'app-user-solutions',
                    templateUrl: 'user-solutions.component.html',
                    styleUrls: ['user-solutions.component.css']
                },] },
    ];
    /** @nocollapse */
    UserSolutionsComponent.ctorParameters = [
        { type: SolutionService, },
        { type: PaperService, },
        { type: FlashMessageService, },
        { type: SortService, },
    ];
    return UserSolutionsComponent;
}());
