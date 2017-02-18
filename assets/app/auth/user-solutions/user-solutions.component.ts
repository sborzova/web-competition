import { Component, OnInit } from "@angular/core";
import { FormGroup, FormControl, Validators } from "@angular/forms";

import { SolutionService } from "../../validation/solution.service";
import { Solution } from "../solution.model";
import { Paper } from "../paper.model";
import { PaperService } from "../paper.service";

@Component({
    selector: 'app-user-solutions',
    templateUrl: 'user-solutions.component.html'
})
export class UserSolutionsComponent implements OnInit{
    solutions: Solution[];
    papers: Paper[];
    selectedPaper: Paper;
    myForm: FormGroup;
    showPaperForm: boolean = false;

    constructor(private solutionService: SolutionService,
                private paperService: PaperService){}

    ngOnInit(){
        this.solutionService.getSolutionsByLoggedUser()
            .subscribe(
                solutions => this.solutions = solutions,
                error => console.error(error)
            )
    }

    onAddPaper(){
        this.myForm = new FormGroup({
            reference: new FormControl(null, Validators.required),
            url: new FormControl(null, Validators.required)
        });
        // let papers: Paper[] = [];
        // for (let solution of this.solutions){
        //     if (typeof solution.paper != null){
        //         papers.push(solution.paper);
        //     }
        // }
        // for (let paper of papers){
        //     this.paperService.getPaper(paper)
        //         .subscribe(
        //             paper => this.papers.push(paper),
        //             error => console.error(error)
        //         )
        // }
        // if (this.papers && this.papers[0]){
        //     this.selectedPaper = this.papers[0];
        // }
        this.showPaperForm = true;
    }

    onRemovePaper(){
        const solutions = this.selectedSolutions;
        for (let solution of solutions){
            this.solutionService.deletePaperFromSolution(solution)
                .subscribe(
                    solution => console.log(solution),
                    error => console.error(error)
                )
        }
    }

    onSubmit(){
        const paper = new Paper(
            this.myForm.value.reference,
            this.myForm.value.url
        );
        this.paperService.savePaper(paper)
            .subscribe(
                paper => {
                    console.log(paper);
                    this.showPaperForm = false;
                } ,
                error => console.error(error)
            );
    }

    get selectedSolutions() {
        return this.solutions
            .filter(s => s.isChecked);
    }

    getValue(paperId: string) {
        this.selectedPaper = this.papers.filter((p)=> p.paperId == paperId)[0];
    }

    isShowPaperForm(){
        return this.showPaperForm;
    }
}