import {Component, EventEmitter, Input, OnChanges, Output, SimpleChanges} from "@angular/core";

import {SortService} from "../../shared/sort.service";
import {Solution} from "../../shared/solution.model";
import {SolutionService} from "../../shared/solution.service";
import {FlashMessageService} from "../../flash-message/flash-messages.service";
import {SessionStorageService} from "../../shared/session-storage.service";

@Component({
    selector: 'app-results-author-technique',
    templateUrl: './results-author-technique.component.html'
})
export class ResultsAuthorTechniqueComponent implements OnChanges{
    @Input() solutions: Solution[];
    solutionsAuthorInstanceTechnique: Solution[];
    showPapers: boolean = false;
    solution: Solution;

    constructor(private resultsService: SortService,
                private flashMessageService: FlashMessageService,
                private sessionStorageService: SessionStorageService,
                private solutionService: SolutionService){}

    ngOnChanges(changes: SimpleChanges){
        this.solutionsAuthorInstanceTechnique = null;
    }

    isAdmin(){
        return this.sessionStorageService.isAdmin();
    }

    onDownload(solution: Solution){
        this.resultsService.download(solution);
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

    onInstance(instanceId: string){
        this.solutionsAuthorInstanceTechnique = this.solutions.filter( s => s.instance.instanceId == instanceId);
    }

    onQualityAsc(){
        this.solutions = this.resultsService.sortQualityAsc(this.solutions);
    }

    onQualityDesc(){
        this.solutions = this.resultsService.sortQualityDesc(this.solutions);
    }

    onScAsc(){
        this.solutions = this.resultsService.sortScAsc(this.solutions);
    }

    onScDesc(){
        this.solutions = this.resultsService.sortScDesc(this.solutions);
    }

    onTimeAsc(){
        this.solutions = this.resultsService.sortTimeAsc(this.solutions);
    }

    onTimeDesc(){
        this.solutions = this.resultsService.sortTimeDesc(this.solutions);
    }
    onRoomAsc(){
        this.solutions = this.resultsService.sortRoomAsc(this.solutions);
    }

    onRoomDesc(){
        this.solutions = this.resultsService.sortRoomDesc(this.solutions);
    }

    onDistributionAsc(){
        this.solutions = this.resultsService.sortDistributionAsc(this.solutions);
    }

    onDistributionDesc(){
        this.solutions = this.resultsService.sortDistributionDesc(this.solutions);
    }

    onTechniqueAsc(){
        this.solutions = this.resultsService.sortTechniqueAsc(this.solutions);
    }

    onTechniqueDesc(){
        this.solutions = this.resultsService.sortTechniqueDesc(this.solutions);
    }

    onSubmissionTimeAsc(){
        this.solutions = this.resultsService.sortSubmissionTimeAsc(this.solutions);
    }

    onSubmissionTimeDesc(){
        this.solutions = this.resultsService.sortSubmissionTimeDesc(this.solutions);
    }
}