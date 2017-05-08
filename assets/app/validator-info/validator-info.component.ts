import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";

import {SolutionService} from "../shared/solution.service";
import {Solution} from "../shared/solution.model";

@Component({
    selector: 'app-solution-validator-info',
    templateUrl: './validator-info.component.html'
})
export class ValidatorInfoComponent implements OnInit {
    solution: Solution;

    constructor(private solutionService: SolutionService,
                private route: ActivatedRoute){}

    /**
     * Set to variable solution solution by route parameter's id.
     */
    ngOnInit(){
        let id = this.route.snapshot.params['id'];
        this.solutionService.getSolution(id)
            .subscribe(
                (solution: Solution) => {
                    this.solution = solution;
                },
                error => console.error(error)
            );
    }

}