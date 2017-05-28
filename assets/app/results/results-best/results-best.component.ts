import {Component, OnDestroy, OnInit} from "@angular/core";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {Subscription} from "rxjs/Subscription";

import {SolutionService} from "../../shared/services/solution.service";
import {InstanceService} from "../../shared/services/instance.service";
import {SortDownloadService} from "../../shared/services/sort-download.service";
import {Solution} from "../../shared/models/solution.model";
import {FlashMessageService} from "../../flash-message/flash-messages.service";
import {SessionStorageService} from "../../shared/services/session-storage.service";

/**
 * Component for showing best results.
 */
@Component({
    selector: 'app-results-best',
    templateUrl: './results-best.component.html'
})
export class ResultsBestComponent implements OnInit, OnDestroy {
    results: Solution[];
    solutionsInstance: Solution[];
    solutionsAuthor: Solution[];
    techniqueForm: FormGroup;
    private solutionsAll: Solution[] = [];
    private solution: Solution;
    private showPapers: boolean = false;
    private subscriptionDelete: Subscription;
    private subscriptionEditTechnique: Subscription;
    private subscriptionSetVisible: Subscription;
    private subscriptionSetNotVisible: Subscription;
    private submittedTechniqueForm: boolean = false;

    /**
     *  When creating component, inject dependencies and create subscription for deleting solution,
     *  editing technique, setting solutions to visible, setting solution to invisible.
     *
     * @param solutionService
     * @param instanceService
     * @param sortDownloadService
     * @param sessionStorageService
     * @param flashMessageService
     */
    constructor(private solutionService: SolutionService,
                private instanceService: InstanceService,
                private sortDownloadService: SortDownloadService,
                private sessionStorageService: SessionStorageService,
                private flashMessageService: FlashMessageService){

    this.subscriptionDelete = solutionService.solutionDelete$.subscribe(
            solution => {
                this.onDelete(solution);
            });
    this.subscriptionEditTechnique = solutionService.solutionEditTechnique$.subscribe(
            solution => {
                this.onEditTechnique(solution);
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
     * When creating component, call function to get all instances, then call function to get
     * all solutions by every instance. Sort solutions for every instance ascending by quality
     * and pick the best for every instance.
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
                                        solutions = this.sortDownloadService.sortQualityAsc(solutions);
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
     * When destroying component, unsubscribe all subscriptions.
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
     * Create and show edit technique form.
     */
    onEditTechnique(solution: Solution){
        this.solution = solution;
        this.techniqueForm = new FormGroup({
            technique: new FormControl(solution.technique, Validators.required)
        });
        document.getElementById('openTechniqueForm').click();
    }

    /**
     * If edit technique form is valid, hide form and call function to update solution.
     */
    onSubmitTechnique(){
        this.submittedTechniqueForm = true;
        if (this.techniqueForm.valid){
            document.getElementById('hideTechniqueForm').click();
            this.submittedTechniqueForm = false;
            this.solutionsInstance = null;
            this.solutionsAuthor= null;
            this.solution.technique = this.techniqueForm.value.technique;
            this.solutionService.updateSolutionTechnique(this.solution)
                .subscribe(
                    () => {
                        this.solution = null;
                        this.flashMessageService.showMessage('Solution was updated.', 'success')
                    },
                    error => console.error(error)
                );
        }
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
     *  Filter solutions by author.
     *
     * @param authorId
     */
    onAuthor(authorId: string){
        this.solutionsInstance = null;
        this.solutionsAuthor = this.solutionsAll.filter( s => s.author.authorId == authorId);
    }

    /**
     * Filter solutions by instance.
     *
     * @param instanceId
     */
    onInstance(instanceId: string){
        this.solutionsAuthor = null;
        this.solutionsInstance = this.solutionsAll.filter( s => s.instance.instanceId == instanceId);
    }

    /**
     *  Call function to delete solution and refresh best solutions.
     */
    onConfirmDelete(){
        this.solutionService.deleteSolution(this.solution)
            .subscribe(
                result => {
                    this.solutionsAll.splice(this.solutionsAll.indexOf(this.solution), 1);
                    if (this.results.includes(this.solution)){
                        this.results.splice(this.results.indexOf(this.solution), 1);
                        let solutionsInstance = this.solutionsAll.filter(s => s.instance.instanceId = this.solution.instance.instanceId);
                        let solutionsInstanceSorted = this.sortDownloadService.sortQualityAsc(solutionsInstance);
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
        this.sortDownloadService.download(solution);
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