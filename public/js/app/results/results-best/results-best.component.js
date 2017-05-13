import { Component } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { SolutionService } from "../../shared/services/solution.service";
import { InstanceService } from "../../shared/services/instance.service";
import { SortDownloadService } from "../../shared/services/sort-download.service";
import { FlashMessageService } from "../../flash-message/flash-messages.service";
import { SessionStorageService } from "../../shared/services/session-storage.service";
export var ResultsBestComponent = (function () {
    function ResultsBestComponent(solutionService, instanceService, sortDownloadService, sessionStorageService, flashMessageService) {
        var _this = this;
        this.solutionService = solutionService;
        this.instanceService = instanceService;
        this.sortDownloadService = sortDownloadService;
        this.sessionStorageService = sessionStorageService;
        this.flashMessageService = flashMessageService;
        this.solutionsAll = [];
        this.showPapers = false;
        this.submittedTechniqueForm = false;
        this.subscriptionDelete = solutionService.solutionDelete$.subscribe(function (solution) {
            _this.onDelete(solution);
        });
        this.subscriptionEditTechnique = solutionService.solutionEditTechnique$.subscribe(function (solution) {
            _this.onEditTechnique(solution);
        });
        this.subscriptionSetVisible = solutionService.solutionSetVisible$.subscribe(function (solution) {
            _this.onSetVisible(solution);
        });
        this.subscriptionSetNotVisible = solutionService.solutionSetNotVisible$.subscribe(function (solution) {
            _this.onSetNotVisible(solution);
        });
    }
    /**
     * Set to variable solutionsAll all solutions.
     * Set to variable result best solutions.
     */
    ResultsBestComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.instanceService.getInstances()
            .subscribe(function (instances) {
            var results = [];
            for (var _i = 0, instances_1 = instances; _i < instances_1.length; _i++) {
                var instance = instances_1[_i];
                _this.solutionService.getSolutionsByInstance(instance.instanceId)
                    .subscribe(function (solutions) {
                    if (solutions.length != 0) {
                        solutions = _this.filterByVisibility(solutions);
                        solutions = _this.sortDownloadService.sortQualityAsc(solutions);
                        results.push(_this.setBestSolution(solutions));
                        _this.solutionsAll = _this.solutionsAll.concat(solutions);
                    }
                }, function (error) { return console.error(error); });
            }
            _this.results = results;
        }, function (error) { return console.error(error); });
    };
    /**
     * Return first solution from sorted solutions if admin, other way return first visible solution.
     *
     * @param solutions
     * @returns {Solution} best solution
     */
    ResultsBestComponent.prototype.setBestSolution = function (solutions) {
        if (this.isAdmin()) {
            return solutions[0];
        }
        else {
            var i = 0;
            while (!solutions[i].visible) {
                i++;
            }
            return solutions[i];
        }
    };
    /**
     *  Return visible solutions from solutions.
     *
     * @param solutions
     * @returns {Solution[]} visible solutions
     */
    ResultsBestComponent.prototype.filterByVisibility = function (solutions) {
        if (this.isAdmin()) {
            return solutions;
        }
        else {
            return solutions.filter(function (s) { return s.visible; });
        }
    };
    /**
     * When destroy component, unsubscribe all subscriptions.
     */
    ResultsBestComponent.prototype.ngOnDestroy = function () {
        this.subscriptionDelete.unsubscribe();
        this.subscriptionSetVisible.unsubscribe();
        this.subscriptionSetNotVisible.unsubscribe();
    };
    /**
     * Open modal dialog to show delete ensure question.
     *
     * @param solution
     */
    ResultsBestComponent.prototype.onDelete = function (solution) {
        this.solution = solution;
        document.getElementById('openModalDelete').click();
    };
    /**
     * Create and show form for edit technique
     */
    ResultsBestComponent.prototype.onEditTechnique = function (solution) {
        this.solution = solution;
        this.techniqueForm = new FormGroup({
            technique: new FormControl(solution.technique, Validators.required)
        });
        document.getElementById('openTechniqueForm').click();
    };
    /**
     * Submit edit technique form
     */
    ResultsBestComponent.prototype.onSubmitTechnique = function () {
        var _this = this;
        this.submittedTechniqueForm = true;
        if (this.techniqueForm.valid) {
            document.getElementById('hideTechniqueForm').click();
            this.submittedTechniqueForm = false;
            this.solution.technique = this.techniqueForm.value.technique;
            this.solutionService.updateSolutionTechnique(this.solution)
                .subscribe(function () {
                _this.solutionsInstance = null;
                _this.solutionsAuthor = null;
                _this.solution = null;
                _this.flashMessageService.showMessage('Solution was updated.', 'success');
            }, function (error) { return console.error(error); });
        }
    };
    /**
     * Set solution as visible.
     *
     * @param solution
     */
    ResultsBestComponent.prototype.onSetVisible = function (solution) {
        var _this = this;
        solution.visible = true;
        this.solutionService.updateSolutionVisibility(solution)
            .subscribe(function (data) { return _this.flashMessageService.showMessage('Solution was updated to visible', 'success'); }, function (error) { return console.error(error); });
    };
    /**
     * Set solution as invisible.
     *
     * @param solution
     */
    ResultsBestComponent.prototype.onSetNotVisible = function (solution) {
        var _this = this;
        solution.visible = false;
        this.solutionService.updateSolutionVisibility(solution)
            .subscribe(function (data) { return _this.flashMessageService.showMessage('Solution was updated to not visible', 'success'); }, function (error) { return console.error(error); });
    };
    /**
     *  Filter by author.
     *
     * @param authorId
     */
    ResultsBestComponent.prototype.onAuthor = function (authorId) {
        this.solutionsInstance = null;
        this.solutionsAuthor = this.solutionsAll.filter(function (s) { return s.author.authorId == authorId; });
    };
    /**
     * Filter by instance.
     *
     * @param instanceId
     */
    ResultsBestComponent.prototype.onInstance = function (instanceId) {
        this.solutionsAuthor = null;
        this.solutionsInstance = this.solutionsAll.filter(function (s) { return s.instance.instanceId == instanceId; });
    };
    /**
     *  Delete solution and refresh best solutions.
     */
    ResultsBestComponent.prototype.onConfirmDelete = function () {
        var _this = this;
        this.solutionService.deleteSolution(this.solution)
            .subscribe(function (result) {
            _this.solutionsAll.splice(_this.solutionsAll.indexOf(_this.solution), 1);
            if (_this.results.includes(_this.solution)) {
                _this.results.splice(_this.results.indexOf(_this.solution), 1);
                var solutionsInstance = _this.solutionsAll.filter(function (s) { return s.instance.instanceId = _this.solution.instance.instanceId; });
                var solutionsInstanceSorted = _this.sortDownloadService.sortQualityAsc(solutionsInstance);
                _this.results.push(solutionsInstanceSorted[0]);
            }
            _this.solutionsInstance = null;
            _this.solutionsAuthor = null;
            _this.solution = null;
            _this.flashMessageService.showMessage('Solution was deleted.', 'success');
        }, function (error) { return console.error(error); });
    };
    ResultsBestComponent.prototype.onDownload = function (solution) {
        this.sortDownloadService.download(solution);
    };
    ResultsBestComponent.prototype.onShowPapers = function () {
        this.showPapers = true;
    };
    ResultsBestComponent.prototype.onHidePapers = function () {
        this.showPapers = false;
    };
    ResultsBestComponent.prototype.isAdmin = function () {
        return this.sessionStorageService.isAdmin();
    };
    ResultsBestComponent.decorators = [
        { type: Component, args: [{
                    selector: 'app-results-best',
                    templateUrl: './results-best.component.html'
                },] },
    ];
    /** @nocollapse */
    ResultsBestComponent.ctorParameters = [
        { type: SolutionService, },
        { type: InstanceService, },
        { type: SortDownloadService, },
        { type: SessionStorageService, },
        { type: FlashMessageService, },
    ];
    return ResultsBestComponent;
}());
