import {Component, Input, OnChanges, SimpleChanges} from "@angular/core";

import {SortDownloadService} from "../../shared/services/sort-download.service";
import {Solution} from "../../shared/models/solution.model";
import {SolutionService} from "../../shared/services/solution.service";
import {SessionStorageService} from "../../shared/services/session-storage.service";

@Component({
    selector: 'app-results-instance',
    templateUrl: './results-instance.component.html'
})
export class ResultsInstanceComponent implements OnChanges {
    @Input() solutions: Solution[];
    solutionsAuthorInstance: Solution[];
    solution: Solution;
    private showPapers: boolean = false;

    constructor(private sortDownloadService: SortDownloadService,
                private solutionService: SolutionService,
                private sessionStorageService: SessionStorageService){}

    /**
     * When variable solutions change, set variable solutionsAuthorInstance null.
     *
     * @param changes
     */
    ngOnChanges(changes: SimpleChanges){
       this.solutionsAuthorInstance = null;
    }

    /**
     * Filter solutions by author.
     *
     * @param authorId
     */
    onAuthor(authorId: string){
        this.solutionsAuthorInstance = this.solutions.filter( s => s.author.authorId == authorId);
    }

    isAdmin(){
        return this.sessionStorageService.isAdmin();
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

    onAuthorAsc(){
        this.solutions = this.sortDownloadService.sortAuthorAsc(this.solutions);
    }

    onAuthorDesc(){
        this.solutions = this.sortDownloadService.sortAuthorDesc(this.solutions);
    }
}