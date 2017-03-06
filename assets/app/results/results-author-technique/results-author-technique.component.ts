import { Component } from "@angular/core";

import { SolutionResult } from "../solution-result.model";
import { SolutionService } from "../../validation/solution.service";

@Component({
    selector: 'app-results-author-technique',
    templateUrl: './results-author-technique.component.html'
})
export class ResultsAuthorTechniqueComponent {
    solutions: SolutionResult[];
    display = 'none';
    fileSaver = require('file-saver');
    showPapers: boolean = false;

    constructor(private solutionService: SolutionService){
    }

    ngOnInit(){
        this.solutionService.resultsAuthorTechnique
            .subscribe(
                (solutions: SolutionResult[]) => {
                    this.solutions = solutions;
                    this.display = 'block';
                }
            );
    }

    onDownload(solution: SolutionResult){
        let file = new File([solution.data], 'solution.xml', {type: "text/xml;charset=utf-8"});
        this.fileSaver.saveAs(file);
    }

    isShowPapers(){
        return this.showPapers;
    }

    onShowPapers(){
        this.showPapers = true;
    }

    onHidePapers(){
        this.showPapers = false;
    }

}