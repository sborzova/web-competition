import { Component, OnInit } from "@angular/core";
import { FormGroup, FormControl } from "@angular/forms";

import { SolutionService } from "../../validation/solution.service";
import { Solution } from "../solution.model";
import { Paper } from "../paper.model";
import { PaperService } from "../paper.service";
import { SolutionPaper } from "../solution-paper.model";
import { FlashMessageService } from "../../flash-message/flash-messages.service";

@Component({
    selector: 'app-user-solutions',
    templateUrl: 'user-solutions.component.html',
    styleUrls: ['user-solutions.component.css']
})
export class UserSolutionsComponent implements OnInit{
    fileSaver = require('file-saver');
    solutions: Solution[];
    papers: Paper[];
    selectedPaper: Paper;
    myForm: FormGroup;
    showPaperForm: boolean = false;
    showPapers: boolean = false;

    constructor(private solutionService: SolutionService,
                private paperService: PaperService,
                private flashMessageService: FlashMessageService){}

    ngOnInit(){
        this.solutionService.getSolutionsByLoggedUser()
            .subscribe(
                solutions => {
                    this.solutions = solutions;
                },
                error => console.error(error)
            )
    }

    onDownload(solution: Solution){
        let file = new File([solution.data], 'solution.xml', {type: "text/xml;charset=utf-8"});
        this.fileSaver.saveAs(file);
    }

    onAddPaper(){
        if (!this.checkIfSelected())
            return;
        if (!this.checkOnlyWithNoPaper())
            return;
        const solutions = this.selectedSolutions;
        this.myForm = new FormGroup({
            citation: new FormControl(null),
            url: new FormControl(null)
        });

        this.showPaperForm = true;
    }

    onRemovePaper(){
        this.checkIfSelected();
        for (let solution of this.selectedSolutions){
            solution.paper = null;
            this.solutionService.deletePaperFromSolution(solution)
                .subscribe(
                    solution => {
                        this.flashMessageService.showMessage('Papers was deleted.', 'alert-success' );
                        this.uncheckSelected();
                    },
                    error => console.error(error)
                )
        }
    }

    onSubmit(){
        if (!(this.myForm.value.citation || this.myForm.value.url)){
            this.flashMessageService.showMessage('Fill in at least one field.', 'alert-danger' );
            return;
        }
        const paper = new Paper(
            this.myForm.value.citation,
            this.myForm.value.url
        );
        this.paperService.savePaper(paper)
            .subscribe(
                paper => {
                    this.setPaperToSolutions(paper);
                } ,
                error => console.error(error)
            );
    }

    private setPaperToSolutions(paper: Paper) {
        console.log(paper);
        for (let s of this.selectedSolutions){
            this.solutionService.updateSolutionPaper(new SolutionPaper(s.solutionId, paper.paperId))
                .subscribe(
                    result =>console.log(result),
                    error => console.error(error)
                );
            s.paper = paper;
        }
        this.flashMessageService.showMessage('Paper was saved.', 'alert-success' );
        this.uncheckSelected();
        this.showPaperForm = false;
    }

    get selectedSolutions() {
        return this.solutions.filter(s => s.isChecked);
    }

    getValue(paperId: string) {
        this.selectedPaper = this.papers.filter((p)=> p.paperId == paperId)[0];
    }

    isShowPaperForm(){
        return this.showPaperForm;
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

    onHidePaperForm(){
        this.uncheckSelected();
        this.showPaperForm = false;
    }

    private checkIfSelected() {
        if (this.selectedSolutions.length == 0){
            this.flashMessageService.showMessage('Select solutions.', 'alert-info' );
            return false;
        }
        return true;
    }

    private uncheckSelected() {
        for (let s of this.selectedSolutions){
            s.isChecked = false;
        }
    }

    private checkOnlyWithNoPaper() {
        for (let s of this.selectedSolutions){
            if (s.paper != null){
                this.flashMessageService.showMessage('Select only solutions with no papers.', 'alert-danger' );
                return false;
            }
        }
        return true;
    }
}