import {Component, OnInit, OnDestroy} from "@angular/core";
import {FormGroup, FormControl, Validators} from "@angular/forms";

import {Paper} from "../shared/models/paper.model";
import {SolutionService} from "../shared/services/solution.service";
import {PaperService} from "../shared/services/paper.service";
import {FlashMessageService} from "../flash-message/flash-messages.service";
import {SolutionPaper} from "./solution-paper.model";
import {SortDownloadService} from "../shared/services/sort-download.service";
import {Solution} from "../shared/models/solution.model";
import {SessionStorageService} from "../shared/services/session-storage.service";

/**
 * Component for showing and managing user's solutions.
 */
@Component({
    selector: 'app-user-solutions',
    templateUrl: './user-solutions.component.html',
    styleUrls: ['user-solutions.component.css']
})
export class UserSolutionsComponent implements OnInit, OnDestroy {
    solutions: Solution[];
    papers: Paper[];
    paperForm: FormGroup;
    showPaperForm: boolean = false;
    showPapers: boolean = false;
    private solution: Solution;
    private editedPaper: Paper;
    private submitted: boolean = false;
    private isEdited: boolean = false;
    private disabled: boolean = false;

    /**
     *  When creating component, inject dependencies.
     *
     * @param solutionService
     * @param paperService
     * @param flashMessageService
     * @param sortDownloadService
     * @param sessionStorageService
     */
    constructor(private solutionService: SolutionService,
                private paperService: PaperService,
                private flashMessageService: FlashMessageService,
                private sortDownloadService: SortDownloadService,
                private sessionStorageService: SessionStorageService){}

    /**
     * When creating component, call function to get all solutions by logged in user and sort them.
      */
    ngOnInit(){
        this.solutionService.getSolutionsByLoggedUser()
            .subscribe(
                (solutions: Solution[])=> {
                    this.solutions = this.sortDownloadService.sortInstanceAsc(solutions);
                },
                error => console.error(error)
            )
    }

    /**
     * Create add paper form a show it.
     */
    onAddPaper(){
        if (!this.checkIfSelected())
            return;
        if (!this.checkOnlyWithNoPaper())
            return;
        this.disabled = true;
        this.paperForm = new FormGroup({
            citation: new FormControl(null, Validators.required),
            url: new FormControl(null)
        });
        this.submitted = false;
        this.showPaperForm = true;
    }

    /**
     * Open modal dialog to show delete ensure question.
     */
    onDeletePaper(){
        if (this.checkIfSelected()){
            document.getElementById('openModalDeletePaper').click();
        }
    }

    /**
     * Call function to delete papers from selected solutions.
     */
    onConfirmDeletePaper(){
        let paperIds = new Set<string>();
        for (let solution of this.selectedSolutions){
            if (solution.paper){
                paperIds.add(solution.paper.paperId);
                solution.paper = null;
            }
            this.solutionService.deletePaperFromSolution(solution)
                .subscribe(
                    solution => {
                        this.uncheckSelected();
                    },
                    error => console.error(error)
                )
        }
        this.flashMessageService.showMessage('Papers were deleted.', 'success' );
        this.removePaperFromDatabase(paperIds);
    }

    /**
     *  Call function to delete solution.
     */
    onConfirmDeleteSolution(){
        this.solutionService.deleteSolution(this.solution)
            .subscribe(
                result => {
                    this.solutions.splice(this.solutions.indexOf(this.solution), 1);
                    this.solution = null;
                    this.flashMessageService.showMessage('Solution was deleted.', 'success' );
                },
                error => console.error(error)
            );
    }

    /**
     * Check if paper can be edit.
     */
    onEditPaper(){
        if (this.checkIfSelected()){
            let paperIds = new Set<string>();
            for (let solution of this.selectedSolutions){
                this.editedPaper = solution.paper;
                if (solution.paper){
                    paperIds.add(solution.paper.paperId);
                } else {
                    this.flashMessageService.showMessage('It is not possible to modify not existing paper. ' +
                        'You must add paper first.', 'danger');
                    return;
                }
            }
            if (paperIds.size != 1){
                this.flashMessageService.showMessage('It is not possible to modify two different citations at a time. ' +
                    'Please select the same citations only.', 'danger');
            }else{
                this.prepareToEditPaper(paperIds);
            }
        }
    }

    /**
     * Check if not selected solutions contain selected paper to edit.
     * Create edit paper form.
     *
     * @param paperIds - ids of papers for editing
     */
    prepareToEditPaper(paperIds){
        let paperId = Array.from(paperIds)[0];
        let showMessage = false;
        for (let solution of this.solutions){
            if (solution.paper && solution.paper.paperId == paperId){
                if (!solution.isChecked){
                    showMessage = true;
                    solution.isChecked = true;
                }
            }
        }
        if (showMessage){
            this.flashMessageService.showMessage('The same citation is also used for other solutions, ' +
                'all of them are modified now.', 'info');
        }
        this.isEdited = true;
        this.submitted = false;
        this.paperForm = new FormGroup({
            citation: new FormControl(this.editedPaper.citation, Validators.required),
            url: new FormControl(this.editedPaper.url)
        });
        this.disabled = true;
        this.showPaperForm = true;
    }

    /**
     * Check if submitted form is for adding or editing paper.
     */
    onSubmit(){
        this.submitted = true;
        if (this.paperForm.valid){
            if (this.isEdited){
                this.submittedEditPaperForm();
            }else {
                this.submittedAddPaperForm();
            }
        }
    }

    /**
     * Call function to update paper.
     */
    submittedEditPaperForm(){
        this.editedPaper.citation = this.paperForm.value.citation;
        this.editedPaper.url = this.paperForm.value.url;
        this.paperService.updatePaper(this.editedPaper)
            .subscribe(
                () => {
                    this.selectedSolutions.forEach(s => s.paper = this.editedPaper);
                    this.isEdited = false;
                    this.editedPaper = null;
                    this.uncheckSelected();
                    this.showPaperForm = false;
                    this.disabled = false;
                    this.flashMessageService.showMessage('Paper was updated', 'success');
                },
                error => console.error(error),
            )
    }

    /**
     * Call function to save paper and then call function to set paper to solutions.
     */
    submittedAddPaperForm(){
        const paper = new Paper(
            this.paperForm.value.citation,
            this.paperForm.value.url
        );
        this.paperService.savePaper(paper)
            .subscribe(
                (paper: Paper) => {
                    this.setPaperToSolutions(paper);
                } ,
                error => console.error(error)
            );
    }

    /**
     * Call function to set paper to selected solutions.
     *
     * @param paper
     */
    setPaperToSolutions(paper: Paper) {
        for (let s of this.selectedSolutions){
            this.solutionService.updateSolutionPaper(new SolutionPaper(s.solutionId, paper.paperId))
                .subscribe(
                    result => {},
                    error => console.error(error)
                );
            s.paper = paper;
        }
        this.flashMessageService.showMessage('Paper was saved.', 'success' );
        this.uncheckSelected();
        this.disabled = false;
        this.showPaperForm = false;
    }

    /**
     * Check if at least one solution is selected.
     *
     * @returns {boolean} true if at least one solution is selected, other way false.
     */
    checkIfSelected() {
        if (this.selectedSolutions.length == 0){
            this.flashMessageService.showMessage('Select solutions.', 'info' );
            return false;
        }
        return true;
    }

    /**
     * All selected solutions set as not selected.
     */
    uncheckSelected() {
        for (let s of this.selectedSolutions){
            s.isChecked = false;
        }
    }

    /**
     * Check if some of selected solutions contain paper.
     *
     * @returns {boolean} true if none of selected solutions contain paper, other way false
     */
    checkOnlyWithNoPaper() {
        for (let s of this.selectedSolutions){
            if (s.paper != null){
                this.flashMessageService.showMessage('Select only solutions with no papers.', 'danger' );
                return false;
            }
        }
        return true;
    }

    /**
     * Delete papers from database if they are not related to any solutions.
     *
     * @param paperIds - papers' ids which were deleted from solutions.
     */
    removePaperFromDatabase(paperIds: Set<string>) {
        for (let solution of this.solutions){
            if (solution.paper){
                if (paperIds.has(solution.paper.paperId)){
                    paperIds.delete(solution.paper.paperId);
                }
            }
        }
        let paperIdsArray = Array.from(paperIds);
        for (let paperId of paperIdsArray){
            this.paperService.deletePaper(paperId)
                .subscribe(
                    solution => {},
                    error => console.error(error)
                )
        }
    }

    /**
     * Returns selected solutions.
     *
     * @returns {Solution[]} selected solutions
     */
    get selectedSolutions() {
        return this.solutions.filter(s => s.isChecked);
    }

    /**
     * Open modal dialog with ensure delete question.
     *
     * @param solution to delete
     */
    onDelete(solution: Solution) {
        this.solution = solution;
        document.getElementById('openModalDeleteSolution').click();
    }

    /**
     *  Uncheck selected solutions and hide paper form.
     */
    onHidePaperForm(){
        this.uncheckSelected();
        this.disabled = false;
        this.showPaperForm = false;
    }

    competitionIsOn(){
        return this.sessionStorageService.getCompetitionIsOn();
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

    onQualityAsc(){
        this.solutions = this.sortDownloadService.sortQualityAsc(this.solutions);
    }

    onQualityDesc(){
        this.solutions = this.sortDownloadService.sortQualityDesc(this.solutions);
    }

    onScAsc(){
        this.solutions = this.sortDownloadService.sortScAsc(this.solutions);
    }

    onScDesc(){
        this.solutions = this.sortDownloadService.sortScDesc(this.solutions);
    }

    onTimeAsc(){
        this.solutions = this.sortDownloadService.sortTimeAsc(this.solutions);
    }

    onTimeDesc(){
        this.solutions = this.sortDownloadService.sortTimeDesc(this.solutions);
    }

    onRoomAsc(){
        this.solutions = this.sortDownloadService.sortRoomAsc(this.solutions);
    }

    onRoomDesc(){
        this.solutions = this.sortDownloadService.sortRoomDesc(this.solutions);
    }

    onDistributionAsc(){
        this.solutions = this.sortDownloadService.sortDistributionAsc(this.solutions);
    }

    onDistributionDesc(){
        this.solutions = this.sortDownloadService.sortDistributionDesc(this.solutions);
    }

    onTechniqueAsc(){
        this.solutions = this.sortDownloadService.sortTechniqueAsc(this.solutions);
    }

    onTechniqueDesc(){
        this.solutions = this.sortDownloadService.sortTechniqueDesc(this.solutions);
    }

    onSubmissionTimeAsc(){
        this.solutions = this.sortDownloadService.sortSubmissionTimeAsc(this.solutions);
    }

    onSubmissionTimeDesc(){
        this.solutions = this.sortDownloadService.sortSubmissionTimeDesc(this.solutions);
    }

    onInstanceAsc(){
        this.solutions = this.sortDownloadService.sortInstanceAsc(this.solutions);
    }

    onInstanceDesc(){
        this.solutions = this.sortDownloadService.sortInstanceDesc(this.solutions);
    }

    /**
     * When destroying component, set variables.
     */
    ngOnDestroy(){
        this.showPaperForm = false;
        this.submitted = false;
        this.isEdited = false;
        this.showPapers = false;
        this.editedPaper = null;
    }

}