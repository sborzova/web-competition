import {Component, Input, OnChanges, SimpleChanges} from "@angular/core";

import {SolutionService} from "../../shared/services/solution.service";
import {SortDownloadService} from "../../shared/services/sort-download.service";
import {Solution} from "../../shared/models/solution.model";
import {SessionStorageService} from "../../shared/services/session-storage.service";

/**
 * Component for showing results for author and instance.
 */
@Component({
    selector: 'app-results-author-instance',
    templateUrl: './results-author-instance.component.html'
})
export class ResultsAuthorInstanceComponent implements OnChanges{
    @Input() solutions: Solution[];
    solutionsAuthorInstanceTechnique: Solution[];
    solution: Solution;
    private showPapers: boolean = false;

    /**
     *  When creating component, inject dependencies.
     *
     * @param solutionService
     * @param sessionStorageService
     * @param sortDownloadService
     */
    constructor(private solutionService: SolutionService,
                private sessionStorageService: SessionStorageService,
                private sortDownloadService: SortDownloadService){
    }

    /**
     * When variable solutions change, set variable solutionsAuthorInstanceTechnique null.
     *
     * @param changes
     */
    ngOnChanges(changes: SimpleChanges){
        this.solutionsAuthorInstanceTechnique = null;
    }

    /**
     * Filter solutions by technique.
     *
     * @param technique
     */
    onTechnique(technique: string){
        this.solutionsAuthorInstanceTechnique = this.solutions.filter(s => s.technique == technique);
    }

    isAdmin(){
        return this.sessionStorageService.isAdmin();
    }

    onDownload(solution: Solution){
        this.sortDownloadService.download(solution);
    }

    onDelete(solution: Solution) {
        this.solutionService.deleteSolutionObservable(solution);
    }

    onEditTechnique(solution: Solution) {
        this.solutionService.editSolutionTechniqueObservable(solution);
    }

    onSetVisible(solution: Solution){
        this.solutionService.setVisibleObservable(solution);
    }

    onSetNotVisible(solution: Solution){
        this.solutionService.setNotVisibleObservable(solution);
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
}