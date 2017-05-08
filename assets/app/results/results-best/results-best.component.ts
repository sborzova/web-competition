import {Component, OnDestroy, OnInit} from "@angular/core";

import {SolutionService} from "../../shared/solution.service";
import {InstanceService} from "../../shared/instance.service";
import {SortService} from "../../shared/sort.service";
import {Solution} from "../../shared/solution.model";
import {FlashMessageService} from "../../flash-message/flash-messages.service";
import {Subscription} from "rxjs/Subscription";
import {SessionStorageService} from "../../shared/session-storage.service";

@Component({
    selector: 'app-results-best',
    templateUrl: './results-best.component.html'
})
export class ResultsBestComponent implements OnInit, OnDestroy {
    results: Solution[];
    solutionsAll: Solution[] = [];
    solutionsInstance: Solution[];
    solutionsAuthor: Solution[];
    solution: Solution;
    showPapers: boolean = false;
    subscriptionDelete: Subscription;
    subscriptionSetVisible: Subscription;
    subscriptionSetNotVisible: Subscription;

    constructor(private solutionService: SolutionService,
                private instanceService: InstanceService,
                private resultsService: SortService,
                private sessionStorageService: SessionStorageService,
                private flashMessageService: FlashMessageService){

    this.subscriptionDelete = solutionService.solutionDelete$.subscribe(
            solution => {
                this.onDelete(solution);
            });
    this.subscriptionSetVisible = solutionService.solutionSetVisible$.subscribe(
            solution => {
                this.onSetVisible(solution);
            });
    this.subscriptionSetNotVisible = solutionService.solutionSetNotVisible$.subscribe(
            solution => {
                this.onSetNotVisible(solution);
            });
    }

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
                                        solutions = this.filterByVisibility(solutions);
                                        solutions = this.resultsService.sortQualityAsc(solutions);
                                        results.push(this.setBestSolution(solutions));
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

    setBestSolution(solutions: Solution[]){
        if (this.isAdmin()){
            return solutions[0];
        }else {
            let i = 0;
            while (!solutions[i].visible){
                i++;
            }
            return solutions[i];
        }
    }

    filterByVisibility(solutions: Solution[]){
        if (this.isAdmin()){
            return solutions;
        }else {
            return solutions.filter(s => s.visible);
        }
    }

    ngOnDestroy(){
        this.subscriptionDelete.unsubscribe();
        this.subscriptionSetVisible.unsubscribe();
        this.subscriptionSetNotVisible.unsubscribe();
    }

    isAdmin(){
        return this.sessionStorageService.isAdmin();
    }

    onDelete(solution: Solution){
        this.solution = solution;
        document.getElementById('openModalDelete').click();
    }

    onDownload(solution: Solution){
        this.resultsService.download(solution);
    }

    onSetVisible(solution){
        solution.visible = true;
        this.solutionService.updateSolutionVisibility(solution)
            .subscribe(
                data => this.flashMessageService.showMessage('Solution was updated to visible', 'success'),
                error => console.error(error)
            )
    }

    onSetNotVisible(solution){
        solution.visible = false;
        this.solutionService.updateSolutionVisibility(solution)
            .subscribe(
                data => this.flashMessageService.showMessage('Solution was updated to not visible', 'success'),
                error => console.error(error)
            )
    }

    onAuthor(authorId: string){
        this.solutionsInstance = null;
        this.solutionsAuthor = this.solutionsAll.filter( s => s.author.authorId == authorId);
    }

    onInstance(instanceId: string){
        this.solutionsAuthor = null;
        this.solutionsInstance = this.solutionsAll.filter( s => s.instance.instanceId == instanceId);
    }

    onOk(){
        this.solutionService.deleteSolution(this.solution)
            .subscribe(
                result => {
                    this.solutionsAll.splice(this.solutionsAll.indexOf(this.solution), 1);
                    if (this.results.includes(this.solution)){
                        this.results.splice(this.results.indexOf(this.solution), 1);
                        let solutionsInstance = this.solutionsAll.filter(s => s.instance.instanceId = this.solution.instance.instanceId);
                        let solutionsInstanceSorted = this.resultsService.sortQualityAsc(solutionsInstance);
                        this.results.push(solutionsInstanceSorted[0]);
                    }
                    this.solutionsInstance = null;
                    this.solutionsAuthor= null;
                    this.solution = null;
                    this.flashMessageService.showMessage('Solution was deleted.', 'success' );
                },
                error => console.error(error)
            );
    }

    onShowPapers(){
        this.showPapers = true;
    }

    onHidePapers(){
        this.showPapers = false;
    }
}