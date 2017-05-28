import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";

import {SolutionService} from "../shared/services/solution.service";
import {Solution} from "../shared/models/solution.model";

/**
 *  Component for showing validator info.
 */
@Component({
    selector: 'app-solution-validator-info',
    templateUrl: './validator-info.component.html'
})
export class ValidatorInfoComponent implements OnInit {
    solution: Solution;

    /**
     *  When creating component, inject dependencies.
     *
     * @param solutionService
     * @param route
     */
    constructor(private solutionService: SolutionService,
                private route: ActivatedRoute){}

    /**
     *  When creating component, call function to get solution by route parameter's id
     *  and show validation info
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