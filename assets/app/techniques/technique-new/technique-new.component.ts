import { Component, OnInit } from "@angular/core";
import { FormGroup, FormControl, Validators } from "@angular/forms";

import { TechniqueService } from "../technique.service";
import { Technique } from "../technique.model";
import { ErrorService } from "../../messages/errors/error.service";
import { SuccessService } from "../../messages/successes/success.service";

@Component({
    selector: 'app-technique-new',
    templateUrl: './technique-new.component.html'
})
export class TechniqueCreateComponent implements OnInit {
    myForm: FormGroup;

    constructor(private techniqueService: TechniqueService,
                private errorService: ErrorService,
                private successService: SuccessService){

    }

    ngOnInit(){
        this.errorService.deleteError();
        this.successService.deleteSuccess();
        this.myForm = new FormGroup({
            name: new FormControl(null, Validators.required)
        });
    }

    onSubmit(){
        const technique  = new Technique(this.myForm.value.name);
        this.techniqueService.saveTechnique(technique)
            .subscribe(
                data => console.log(data),
                error => console.error(error)
            );
        this.myForm.reset();
    }
}