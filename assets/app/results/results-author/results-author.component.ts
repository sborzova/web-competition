import {Component, EventEmitter, Input, OnChanges, Output, SimpleChanges} from "@angular/core";

import {SortService} from "../../shared/sort.service";
import {Solution} from "../../shared/solution.model";
import {SolutionService} from "../../shared/solution.service";
import {FlashMessageService} from "../../flash-message/flash-messages.service";

@Component({
    selector: 'app-results-author',
    templateUrl: './results-author.component.html'
})
export class ResultsAuthorComponent implements OnChanges {
    @Input() solutions: Solution[];
    solutionsAuthorInstance: Solution[];
    solutionsAuthorTechnique: Solution[];
    showPapers: boolean = false;

    constructor(private sortService: SortService,
                private solutionService: SolutionService,
                private flashMessageService: FlashMessageService){}

    ngOnChanges(changes: SimpleChanges){
        this.solutionsAuthorInstance = null;
        this.solutionsAuthorTechnique = null;
    }

    onDownload(solution: Solution){
        this.sortService.download(solution);
    }

    onDelete(solution: Solution) {
        this.solutionService.deleteSolutionObservable(solution);
    }

    onShowPapers(){
        this.showPapers = true;
    }

    onHidePapers(){
        this.showPapers = false;
    }

    onInstance(instanceId: string){
        this.solutionsAuthorInstance = this.solutions.filter( s => s.instance.instanceId == instanceId);
    }

    onTechnique(technique: string){
        this.solutionsAuthorTechnique = this.solutions.filter(s => s.technique === technique);
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
}