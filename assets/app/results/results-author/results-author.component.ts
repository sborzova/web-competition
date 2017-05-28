import {Component, Input, OnChanges, SimpleChanges} from "@angular/core";

import {SortDownloadService} from "../../shared/services/sort-download.service";
import {Solution} from "../../shared/models/solution.model";
import {SolutionService} from "../../shared/services/solution.service";
import {SessionStorageService} from "../../shared/services/session-storage.service";

/**
 * Component for showing results for author.
 */
@Component({
    selector: 'app-results-author',
    templateUrl: './results-author.component.html'
})
export class ResultsAuthorComponent implements OnChanges {
    @Input() solutions: Solution[];
    solutionsAuthorInstance: Solution[];
    solutionsAuthorTechnique: Solution[];
    private showPapers: boolean = false;

    /**
     *  When creating component, inject dependencies.
     *
     * @param sortDownloadService
     * @param solutionService
     * @param sessionStorageService
     */
    constructor(private sortDownloadService: SortDownloadService,
                private solutionService: SolutionService,
                private sessionStorageService: SessionStorageService){}


    /**
     * When variable solutions change, set variable solutionsAuthorInstance and solutionsAuthorTechnique null.
     *
     * @param changes
     */
    ngOnChanges(changes: SimpleChanges){
        this.solutionsAuthorInstance = null;
        this.solutionsAuthorTechnique = null;
    }

    /**
     * Filter solutions by instance.
     *
     * @param instanceId
     */
    onInstance(instanceId: string){
        this.solutionsAuthorTechnique = null;
        this.solutionsAuthorInstance = this.solutions.filter( s => s.instance.instanceId == instanceId);
    }

    /**
     * Filter solutions by technique.
     *
     * @param technique
     */
    onTechnique(technique: string){
        this.solutionsAuthorInstance = null;
        this.solutionsAuthorTechnique = this.solutions.filter(s => s.technique === technique);
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

    onInstanceAsc(){
        this.solutions = this.sortDownloadService.sortInstanceAsc(this.solutions);
    }

    onInstanceDesc(){
        this.solutions = this.sortDownloadService.sortInstanceDesc(this.solutions);
    }
}