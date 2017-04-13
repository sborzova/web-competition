import { Component, OnInit } from "@angular/core";

import { SolutionService } from "../../shared/solution.service";
import { InstanceService } from "../../shared/instance.service";
import {SortService} from "../../shared/sort.service";
import {Solution} from "../../shared/solution.model";

@Component({
    selector: 'app-results-best',
    templateUrl: './results-best.component.html'
})
export class ResultsBestComponent implements OnInit {
    results: Solution[];
    solutionsAll: Solution[] = [];
    solutionsInstance: Solution[];
    solutionsAuthor: Solution[];
    showPapers: boolean = false;

    constructor(private solutionService: SolutionService,
                private instanceService: InstanceService,
                private resultsService: SortService){}

    ngOnInit(){
        this.instanceService.getInstances()
            .subscribe(
                instances => {
                    let results: Solution[] = [];
                    for (let instance of instances){
                        this.solutionService.getSolutionsByInstance(instance.instanceId)
                            .subscribe(
                                (solutions: Solution[] )=> {
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

    onDownload(solution: Solution){
        this.resultsService.download(solution);
    }

    onAuthor(authorId: string){
        this.solutionsInstance = null;
        this.solutionsAuthor = this.solutionsAll.filter( s => s.author.authorId == authorId);
    }

    onInstance(instanceId: string){
        this.solutionsAuthor = null;
        this.solutionsInstance = this.solutionsAll.filter( s => s.instance.instanceId == instanceId);
    }

    onShowPapers(){
        this.showPapers = true;
    }

    onHidePapers(){
        this.showPapers = false;
    }
}