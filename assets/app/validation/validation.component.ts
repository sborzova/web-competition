import {Component, ViewChild, OnInit} from "@angular/core";
import { SolutionService } from "./solution.service";
import { Technique } from "./technique.model";
import {TechniqueService} from "../techniques/technique.service";
import {SolutionCreate} from "./solution-create.model";

@Component({
    selector: 'app-validation',
    templateUrl: './validation.component.html'
})
export class ValidationComponent implements OnInit {
    techniques : Technique[];
    selectedTechnique: Technique;
    solution: SolutionCreate = new SolutionCreate();
    @ViewChild('solution') solutionElem;

    constructor(private validationService: SolutionService,
                private techniqueService: TechniqueService){}

    ngOnInit(){
        this.techniqueService.getTechniques()
            .subscribe(
                (techniques : Technique[]) => {
                    this.techniques = techniques;
                    this.selectedTechnique = this.techniques[0];
                },
            )
    }

    getValue(techniqueId: string) {
        this.selectedTechnique = this.techniques.filter((t)=> t.techniqueId == techniqueId)[0];
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
        this.solution.setTechnique(this.selectedTechnique.techniqueId);

        this.validationService.saveSolution(this.solution)
            .subscribe(
                solution => console.log(solution),
                error => console.error(error)
            )
    }
}