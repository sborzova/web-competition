import {Component, OnDestroy, OnInit} from "@angular/core";

import {SolutionService} from "../../shared/services/solution.service";
import {InstanceService} from "../../shared/services/instance.service";
import {SortDownloadSolutionService} from "../../shared/services/sort-download-solution.service";
import {Solution} from "../../shared/models/solution.model";
import {FlashMessageService} from "../../flash-message/flash-messages.service";
import {Subscription} from "rxjs/Subscription";
import {SessionStorageService} from "../../shared/services/session-storage.service";

@Component({
    selector: 'app-results-best',
    templateUrl: './results-best.component.html'
})
export class ResultsBestComponent implements OnInit, OnDestroy {
    results: Solution[];
    solutionsInstance: Solution[];
    solutionsAuthor: Solution[];
    private solutionsAll: Solution[] = [];
    private solution: Solution;
    private showPapers: boolean = false;
    private subscriptionDelete: Subscription;
    private subscriptionSetVisible: Subscription;
    private subscriptionSetNotVisible: Subscription;

    constructor(private solutionService: SolutionService,
                private instanceService: InstanceService,
                private sortDownloadSolutionService: SortDownloadSolutionService,
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

    /**
     * Set to variable solutionsAll all solutions.
     * Set to variable result best solutions.
     */
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
                                        solutions = this.sortDownloadSolutionService.sortQualityAsc(solutions);
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

    /**
     * Return first solution from sorted solutions if admin, other way return first visible solution.
     *
     * @param solutions
     * @returns {Solution} best solution
     */
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

    /**
     *  Return visible solutions from solutions.
     *
     * @param solutions
     * @returns {Solution[]} visible solutions
     */
    filterByVisibility(solutions: Solution[]){
        if (this.isAdmin()){
            return solutions;
        }else {
            return solutions.filter(s => s.visible);
        }
    }

    /**
     * When destroy component, unsubscribe all subscriptions.
     */
    ngOnDestroy(){
        this.subscriptionDelete.unsubscribe();
        this.subscriptionSetVisible.unsubscribe();
        this.subscriptionSetNotVisible.unsubscribe();
    }

    /**
     * Open modal dialog to show delete ensure question.
     *
     * @param solution
     */
    onDelete(solution: Solution){
        this.solution = solution;
        document.getElementById('openModalDelete').click();
    }

    /**
     * Set solution as visible.
     *
     * @param solution
     */
    onSetVisible(solution){
        solution.visible = true;
        this.solutionService.updateSolutionVisibility(solution)
            .subscribe(
                data => this.flashMessageService.showMessage('Solution was updated to visible', 'success'),
                error => console.error(error)
            )
    }

    /**
     * Set solution as invisible.
     *
     * @param solution
     */
    onSetNotVisible(solution){
        solution.visible = false;
        this.solutionService.updateSolutionVisibility(solution)
            .subscribe(
                data => this.flashMessageService.showMessage('Solution was updated to not visible', 'success'),
                error => console.error(error)
            )
    }

    /**
     *  Filter by author.
     *
     * @param authorId
     */
    onAuthor(authorId: string){
        this.solutionsInstance = null;
        this.solutionsAuthor = this.solutionsAll.filter( s => s.author.authorId == authorId);
    }

    /**
     * Filter by instance.
     *
     * @param instanceId
     */
    onInstance(instanceId: string){
        this.solutionsAuthor = null;
        this.solutionsInstance = this.solutionsAll.filter( s => s.instance.instanceId == instanceId);
    }

    /**
     *  Delete solution and refresh best solutions.
     */
    onOk(){
        this.solutionService.deleteSolution(this.solution)
            .subscribe(
                result => {
                    this.solutionsAll.splice(this.solutionsAll.indexOf(this.solution), 1);
                    if (this.results.includes(this.solution)){
                        this.results.splice(this.results.indexOf(this.solution), 1);
                        let solutionsInstance = this.solutionsAll.filter(s => s.instance.instanceId = this.solution.instance.instanceId);
                        let solutionsInstanceSorted = this.sortDownloadSolutionService.sortQualityAsc(solutionsInstance);
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

    onDownload(solution: Solution){
        this.sortDownloadSolutionService.download(solution);
    }

    onShowPapers(){
        this.showPapers = true;
    }

    onHidePapers(){
        this.showPapers = false;
    }

    isAdmin(){
        return this.sessionStorageService.isAdmin();
    }
}