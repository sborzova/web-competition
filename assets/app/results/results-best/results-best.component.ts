import { Component, OnInit } from "@angular/core";

import { SolutionService } from "../../validation/solution.service";
import { InstanceService } from "../../instances/instance.service";
import { SolutionResult } from "../solution-result.model";

@Component({
    selector: 'app-results-best',
    templateUrl: './results-best.component.html'
})
export class ResultsBestComponent implements OnInit {
    solutions: SolutionResult[];
    fileSaver = require('file-saver');

    constructor(private solutionService: SolutionService,
                private instanceService: InstanceService){}

    ngOnInit(){
        this.instanceService.getInstances()
            .subscribe(
                instances => {
                    var results: SolutionResult[] = [];
                    for (let instance of instances){
                        this.solutionService.getSolutionsByInstance(instance.instanceId)
                            .subscribe(
                                (solutions: SolutionResult[] )=> {
                                    if (solutions.length == 0){
                                        results.push(new SolutionResult(instance));
                                    }else {
                                        solutions.sort(function (a, b) {
                                            let aUnassigned = a.unassigned;
                                            let bUnassigned = b.unassigned;
                                            let aTotal = a.total;
                                            let bTotal = b.total;

                                            if (aUnassigned == bUnassigned){
                                                return (aTotal > bTotal) ? -1 : (aTotal < bTotal) ? 1 : 0;
                                            }else {
                                                return (aUnassigned < bUnassigned) ? -1 : 1;
                                            }
                                        });
                                        results.push(solutions[0]);
                                    }
                                },
                                error => console.error(error)
                            )
                    }
                    this.solutions = results;
                },
                error => console.error(error)
            )
    }

    onDownload(solution: SolutionResult){
        let file = new File([solution.data], 'solution.xml', {type: "text/xml;charset=utf-8"});
        this.fileSaver.saveAs(file);
    }

    onViewAll(instanceId: string){
        this.solutionService.resultsInstanceShow(instanceId);
    }
}