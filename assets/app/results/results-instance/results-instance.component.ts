import {Component, Input, OnChanges, SimpleChanges} from "@angular/core";

import {SortService} from "../../shared/sort.service";
import {Solution} from "../../shared/solution.model";

@Component({
    selector: 'app-results-instance',
    templateUrl: './results-instance.component.html'
})
export class ResultsInstanceComponent implements OnChanges {
    @Input() solutions: Solution[];
    solutionsAuthorInstance: Solution[];
    showPapers: boolean = false;

    constructor(private sortService: SortService){}

    ngOnChanges(changes: SimpleChanges){
       this.solutionsAuthorInstance = null;
    }

    onDownload(solution: Solution){
        this.sortService.download(solution);
    }

    onAuthor(authorId: string){
        this.solutionsAuthorInstance = this.solutions.filter( s => s.author.authorId == authorId);
    }

    isShowPapers(){
        return this.showPapers;
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