import {Component, Input, OnChanges, SimpleChanges} from "@angular/core";

import {SolutionService} from "../../shared/services/solution.service";
import {SortDownloadSolutionService} from "../../shared/services/sort-download-solution.service";
import {Solution} from "../../shared/models/solution.model";
import {SessionStorageService} from "../../shared/services/session-storage.service";

@Component({
    selector: 'app-results-author-instance',
    templateUrl: './results-author-instance.component.html'
})
export class ResultsAuthorInstanceComponent implements OnChanges{
    @Input() solutions: Solution[];
    solutionsAuthorInstanceTechnique: Solution[];
    solution: Solution;
    private showPapers: boolean = false;

    constructor(private solutionService: SolutionService,
                private sessionStorageService: SessionStorageService,
                private sortDownloadSolutionService: SortDownloadSolutionService){
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
        this.sortDownloadSolutionService.download(solution);
    }

    onDelete(solution: Solution) {
        this.solutionService.deleteSolutionObservable(solution);
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
        this.solutions = this.sortDownloadSolutionService.sortQualityAsc(this.solutions);
    }

    onQualityDesc(){
        this.solutions = this.sortDownloadSolutionService.sortQualityDesc(this.solutions);
    }

    onScAsc(){
        this.solutions = this.sortDownloadSolutionService.sortScAsc(this.solutions);
    }

    onScDesc(){
        this.solutions = this.sortDownloadSolutionService.sortScDesc(this.solutions);
    }

    onTimeAsc(){
        this.solutions = this.sortDownloadSolutionService.sortTimeAsc(this.solutions);
    }

    onTimeDesc(){
        this.solutions = this.sortDownloadSolutionService.sortTimeDesc(this.solutions);
    }
    onRoomAsc(){
        this.solutions = this.sortDownloadSolutionService.sortRoomAsc(this.solutions);
    }

    onRoomDesc(){
        this.solutions = this.sortDownloadSolutionService.sortRoomDesc(this.solutions);
    }

    onDistributionAsc(){
        this.solutions = this.sortDownloadSolutionService.sortDistributionAsc(this.solutions);
    }

    onDistributionDesc(){
        this.solutions = this.sortDownloadSolutionService.sortDistributionDesc(this.solutions);
    }

    onTechniqueAsc(){
        this.solutions = this.sortDownloadSolutionService.sortTechniqueAsc(this.solutions);
    }

    onTechniqueDesc(){
        this.solutions = this.sortDownloadSolutionService.sortTechniqueDesc(this.solutions);
    }

    onSubmissionTimeAsc(){
        this.solutions = this.sortDownloadSolutionService.sortSubmissionTimeAsc(this.solutions);
    }

    onSubmissionTimeDesc(){
        this.solutions = this.sortDownloadSolutionService.sortSubmissionTimeDesc(this.solutions);
    }
}