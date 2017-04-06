import {Component, Input, OnChanges, SimpleChanges} from "@angular/core";

import {SortService} from "../../shared/sort.service";
import {Solution} from "../../shared/solution.model";

@Component({
    selector: 'app-results-author',
    templateUrl: './results-author.component.html'
})
export class ResultsAuthorComponent implements OnChanges{
    @Input() solutions: Solution[];
    solutionsAuthorInstance: Solution[];
    solutionsAuthorTechnique: Solution[];
    showPapers: boolean = false;

    constructor(private resultsService: SortService){}

    ngOnChanges(changes: SimpleChanges){
        this.solutionsAuthorInstance = null;
        this.solutionsAuthorTechnique = null;
    }

    onDownload(solution: Solution){
        this.resultsService.download(solution);
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

    onInstance(instanceId: string){
        this.solutionsAuthorInstance = this.solutions.filter( s => s.instance.instanceId == instanceId);
    }

    onTechnique(technique: string){
        this.solutionsAuthorTechnique = this.solutions.filter(s => s.technique === technique);
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
}