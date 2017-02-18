import { Component, OnInit } from "@angular/core";
import { SolutionService } from "../../validation/solution.service";
import { Solution } from "../solution.model";

@Component({
    selector: 'app-user-solutions',
    templateUrl: 'user-solutions.component.html'
})
export class UserSolutionsComponent implements OnInit{
    solutions: Solution[];

    constructor(private solutionService: SolutionService){}

    ngOnInit(){
        this.solutionService.getSolutionsByLoggedUser()
            .subscribe(
                solutions => this.solutions = solutions,
                error => console.error(error)
            )
    }
}