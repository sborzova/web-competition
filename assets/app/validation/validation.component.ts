import {Component, ViewChild, OnInit} from "@angular/core";
import { SolutionService } from "./solution.service";
import {SolutionCreate} from "./solution-create.model";

@Component({
    selector: 'app-validation',
    templateUrl: './validation.component.html'
})
export class ValidationComponent implements OnInit {
    solution: SolutionCreate = new SolutionCreate();
    @ViewChild('solution') solutionElem;

    constructor(private validationService: SolutionService){}

    ngOnInit(){

    }

    onValidate(){
        let solutionInput= this.solutionElem.nativeElement;

        if (solutionInput.files && solutionInput.files[0]){
            this.validationService.validate(solutionInput.files[0])
                .subscribe(
                    data => {
                        console.log(data)
                    },
                    error => console.log(error)
                )
        }
    }

    onUpload(){
        this.validationService.saveSolution(this.solution)
            .subscribe(
                solution => console.log(solution),
                error => console.error(error)
            )
    }
}