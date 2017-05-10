import {Component, Input, OnChanges, SimpleChanges} from "@angular/core";

import {SortDownloadSolutionService} from "../../shared/services/sort-download-solution.service";
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

    constructor(private sortService: SortDownloadSolutionService,
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

    onSetVisible(solution: Solution){
        this.solutionService.setVisibleObservable(solution);
    }

    onSetNotVisible(solution: Solution){
        this.solutionService.setNotVisibleObservable(solution);
    }

    onDownload(solution: Solution){
        this.sortService.download(solution);
    }

    onShowPapers(){
        this.showPapers = true;
    }

    onHidePapers(){
        this.showPapers = false;
    }

    onQualityAsc(){
        this.solutions = this.sortService.sortQualityAsc(this.solutions);
    }

    onQualityDesc(){
        this.solutions = this.sortService.sortQualityDesc(this.solutions);
    }

    onScAsc(){
        this.solutions = this.sortService.sortScAsc(this.solutions);
    }

    onScDesc(){
        this.solutions = this.sortService.sortScDesc(this.solutions);
    }

    onTimeAsc(){
        this.solutions = this.sortService.sortTimeAsc(this.solutions);
    }

    onTimeDesc(){
        this.solutions = this.sortService.sortTimeDesc(this.solutions);
    }
    onRoomAsc(){
        this.solutions = this.sortService.sortRoomAsc(this.solutions);
    }

    onRoomDesc(){
        this.solutions = this.sortService.sortRoomDesc(this.solutions);
    }

    onDistributionAsc(){
        this.solutions = this.sortService.sortDistributionAsc(this.solutions);
    }

    onDistributionDesc(){
        this.solutions = this.sortService.sortDistributionDesc(this.solutions);
    }

    onTechniqueAsc(){
        this.solutions = this.sortService.sortTechniqueAsc(this.solutions);
    }

    onTechniqueDesc(){
        this.solutions = this.sortService.sortTechniqueDesc(this.solutions);
    }

    onSubmissionTimeAsc(){
        this.solutions = this.sortService.sortSubmissionTimeAsc(this.solutions);
    }

    onSubmissionTimeDesc(){
        this.solutions = this.sortService.sortSubmissionTimeDesc(this.solutions);
    }

    onAuthorAsc(){
        this.solutions = this.sortService.sortAuthorAsc(this.solutions);
    }

    onAuthorDesc(){
        this.solutions = this.sortService.sortAuthorDesc(this.solutions);
    }
}