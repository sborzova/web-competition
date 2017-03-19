import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Params } from "@angular/router";
import { Subscription } from "rxjs";

import {SolutionService} from "../validation/solution.service";
import {Solution} from "./solution.model";


@Component({
    selector: 'app-solution-validator-info',
    templateUrl: 'validator-info.component.html'
})
export class ValidatorInfoComponent implements OnInit, OnDestroy {
    solution: Solution;
    private subscription: Subscription;

    constructor(private solutionService: SolutionService,
                private activatedRoute: ActivatedRoute){}

    ngOnInit(){
        this.subscription = this.activatedRoute.queryParams.subscribe((params: Params) => {
            let solutionId = params['solutionId'];
            this.solutionService.getSolution(solutionId)
                .subscribe(
                    (solution: Solution) => {
                        this.solution = solution;
                    },
                    error => console.error(error)
                );
        });
    }

    ngOnDestroy(){
        this.subscription.unsubscribe();
    }
}