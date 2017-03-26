import { Component, OnInit } from "@angular/core";

import { SolutionService } from "../../shared/solution.service";
import { InstanceService } from "../../instances/instance.service";
import { SolutionResult } from "../solution-result.model";
import {SortService} from "../../shared/sort.service";

@Component({
    selector: 'app-results-best',
    templateUrl: './results-best.component.html'
})
export class ResultsBestComponent implements OnInit {
    results: SolutionResult[];
    solutionsAll: SolutionResult[] = [];
    solutionsInstance: SolutionResult[];
    solutionsAuthor: SolutionResult[];
    fileSaver = require('file-saver');
    showPapers: boolean = false;

    constructor(private solutionService: SolutionService,
                private instanceService: InstanceService,
                private resultsService: SortService){}

    ngOnInit(){
        this.instanceService.getInstances()
            .subscribe(
                instances => {
                    let results: SolutionResult[] = [];
                    for (let instance of instances){
                        this.solutionService.getSolutionsByInstance(instance.instanceId)
                            .subscribe(
                                (solutions: SolutionResult[] )=> {
                                    if (solutions.length != 0){
                                        solutions = this.resultsService.sortQualityAsc(solutions);
                                        results.push(solutions[0]);
                                        this.solutionsAll = this.solutionsAll.concat(solutions);
                                    }
                                },
                                error => console.error(error)
                            )
                    }
                    this.results = results;
                },
                error => console.error(error)
            )
    }

    onDownload(solution: SolutionResult){
        let file = new File([solution.data], 'solution.xml', {type: "text/xml;charset=utf-8"});
        this.fileSaver.saveAs(file);
    }

    onAuthor(authorId: string){
        this.solutionsInstance = null;
        this.solutionsAuthor = this.solutionsAll.filter( s => s.author.authorId == authorId);
    }

    onInstance(instanceId: string){
        this.solutionsAuthor = null;
        this.solutionsInstance = this.solutionsAll.filter( s => s.instance.instanceId == instanceId);
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