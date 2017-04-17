import {Component, EventEmitter, Input, OnChanges, Output, SimpleChanges} from "@angular/core";

import {SortService} from "../../shared/sort.service";
import {Solution} from "../../shared/solution.model";
import {FlashMessageService} from "../../flash-message/flash-messages.service";
import {SolutionService} from "../../shared/solution.service";

@Component({
    selector: 'app-results-instance',
    templateUrl: './results-instance.component.html'
})
export class ResultsInstanceComponent implements OnChanges {
    @Input() solutions: Solution[];
    solution: Solution;
    solutionsAuthorInstance: Solution[];
    showPapers: boolean = false;

    constructor(private sortService: SortService,
                private solutionService: SolutionService,
                private flashMessageService: FlashMessageService){}

    ngOnChanges(changes: SimpleChanges){
       this.solutionsAuthorInstance = null;
    }

    onDelete(solution: Solution) {
        this.solutionService.deleteSolutionObservable(solution);
    }

    onDownload(solution: Solution){
        this.sortService.download(solution);
    }

    onAuthor(authorId: string){
        this.solutionsAuthorInstance = this.solutions.filter( s => s.author.authorId == authorId);
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