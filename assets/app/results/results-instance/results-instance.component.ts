import { Component, OnInit } from "@angular/core";

import { SolutionService } from "../../validation/solution.service";
import { SolutionResult } from "../solution-result.model";

@Component({
    selector: 'app-results-instance',
    templateUrl: './results-instance.component.html'
})
export class ResultsInstanceComponent implements OnInit{
    solutions: SolutionResult[];
    display = 'none';
    fileSaver = require('file-saver');
    showPapers: boolean = false;

    constructor(private solutionService: SolutionService){}

    ngOnInit(){
        this.solutionService.resultsInstance
            .subscribe(
                (instanceId: string) => {
                    this.solutionService.getSolutionsByInstance(instanceId)
                        .subscribe(
                            (solutions: SolutionResult[]) => {
                                this.solutions = solutions
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

    onAuthor(authorId: string){
        this.solutionService.resultsAuthorShow(authorId);
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