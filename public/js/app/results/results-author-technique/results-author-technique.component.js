import { Component } from "@angular/core";
import { SolutionService } from "../../validation/solution.service";
export var ResultsAuthorTechniqueComponent = (function () {
    function ResultsAuthorTechniqueComponent(solutionService) {
        this.solutionService = solutionService;
        this.display = 'none';
        this.fileSaver = require('file-saver');
        this.showPapers = false;
    }
    ResultsAuthorTechniqueComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.solutionService.resultsAuthorTechnique
            .subscribe(function (solutions) {
            _this.solutions = solutions;
            _this.display = 'block';
        });
    };
    ResultsAuthorTechniqueComponent.prototype.onDownload = function (solution) {
        var file = new File([solution.data], 'solution.xml', { type: "text/xml;charset=utf-8" });
        this.fileSaver.saveAs(file);
    };
    ResultsAuthorTechniqueComponent.prototype.isShowPapers = function () {
        return this.showPapers;
    };
    ResultsAuthorTechniqueComponent.prototype.onShowPapers = function () {
        this.showPapers = true;
    };
    ResultsAuthorTechniqueComponent.prototype.onHidePapers = function () {
        this.showPapers = false;
    };
    ResultsAuthorTechniqueComponent.decorators = [
        { type: Component, args: [{
                    selector: 'app-results-author-technique',
                    templateUrl: './results-author-technique.component.html'
                },] },
    ];
    /** @nocollapse */
    ResultsAuthorTechniqueComponent.ctorParameters = [
        { type: SolutionService, },
    ];
    return ResultsAuthorTechniqueComponent;
}());
