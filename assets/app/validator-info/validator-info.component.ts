import { Component, OnInit, OnDestroy } from '@angular/core';
import {ActivatedRoute, ActivatedRouteSnapshot, Params} from "@angular/router";
import { Subscription } from "rxjs";

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