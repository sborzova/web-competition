import { Component, OnInit } from "@angular/core";

import { SolutionService } from "../../validation/solution.service";
import { SolutionResult } from "../solution-result.model";
import {ResultsService} from "../results.service";

@Component({
    selector: 'app-results-instance',
    templateUrl: './results-instance.component.html'
})
export class ResultsInstanceComponent implements OnInit{
    solutions: SolutionResult[];
    display = 'none';
    fileSaver = require('file-saver');
    showPapers: boolean = false;

    constructor(private solutionService: SolutionService,
                private resultsService: ResultsService){}

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

    onQualityAsc(){
        this.solutions = this.resultsService.sortQualityAsc(this.solutions);
    }

    onQualityDesc(){
        this.solutions = this.resultsService.sortQualityDesc(this.solutions);
    }

    onScAsc(){
        this.solutions = this.resultsService.sortScAsc(this.solutions);
    }

    onScDesc(){
        this.solutions = this.resultsService.sortScDesc(this.solutions);
    }

    onTimeAsc(){
        this.solutions = this.resultsService.sortTimeAsc(this.solutions);
    }

    onTimeDesc(){
        this.solutions = this.resultsService.sortTimeDesc(this.solutions);
    }
    onRoomAsc(){
        this.solutions = this.resultsService.sortRoomAsc(this.solutions);
    }

    onRoomDesc(){
        this.solutions = this.resultsService.sortRoomDesc(this.solutions);
    }

    onDistributionAsc(){
        this.solutions = this.resultsService.sortDistributionAsc(this.solutions);
    }

    onDistributionDesc(){
        this.solutions = this.resultsService.sortDistributionDesc(this.solutions);
    }
}