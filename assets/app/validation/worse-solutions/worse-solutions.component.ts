import { Component, OnInit, OnDestroy } from "@angular/core";
import { Subscription } from "rxjs";
import { SolutionService } from "../../shared/solution.service";
import { Solution } from "../../user-solutions/solution.model";

@Component({
    selector: 'app-worse-solutions',
    templateUrl: './worse-solutions.component.html'
})
export class WorseSolutionsComponent implements OnInit, OnDestroy {
    display = 'none';
    subscription: Subscription;
    solutions: Solution[];

    constructor(private solutionService: SolutionService) {
        this.subscription = solutionService.worseSolutionsDeleteSource$
            .subscribe(
                () => {
                    this.display = 'none';
                }
            );
    }

    get selectedSolutions() {
        return this.solutions.filter(s => s.isChecked);
    }

    ngOnInit(){
        this.solutionService.worseSolutions
            .subscribe(
                (solutions: Solution[]) => {
                    this.solutions = solutions;
                    this.display = 'block';
                }
            );
    }

    ngOnDestroy(){
        this.subscription.unsubscribe();
    }

    onDeleteSelected(){
        if (this.selectedSolutions.length == 0){
            this.solutionService.worseSolutionsHide();
        }
        this.solutionService.deleteSolutions(this.selectedSolutions);
        this.solutionService.worseSolutionsHide();
    }

    onDeleteNone(){
        this.solutionService.worseSolutionsHide();
    }
}

