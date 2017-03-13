import { Component, OnInit } from "@angular/core";

import { SolutionResult } from "../solution-result.model";
import { SolutionService } from "../../validation/solution.service";

@Component({
    selector: 'app-results-author',
    templateUrl: './results-author.component.html'
})
export class ResultsAuthorComponent implements OnInit{
    solutions: SolutionResult[];
    display = 'none';
    fileSaver = require('file-saver');
    showPapers: boolean = false;

    constructor(private solutionService: SolutionService){
    }

    ngOnInit(){
        this.solutionService.resultsAuthor
            .subscribe(
                (authorId: string) => {
                    this.solutionService.getSolutionsByUser(authorId)
                        .subscribe(
                            (solutions: SolutionResult[]) => {
                                this.solutions = solutions;
                            },
                            error => console.error(error)
                        );
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

    onTechnique(technique: string){
        let solutions = this.solutions.filter(s => s.technique === technique);
        this.solutionService.resultsAuthorTechniqueShow(solutions);
    }
}