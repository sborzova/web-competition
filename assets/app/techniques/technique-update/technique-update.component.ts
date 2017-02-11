import {Component, OnInit, Input} from "@angular/core";
import {FormGroup, FormControl, Validators, NgForm} from "@angular/forms";
import {Technique} from "../technique.model";
import {TechniqueService} from "../technique.service";
@Component({
    selector: 'app-technique-update',
    templateUrl: 'technique-update.component.html'
})
export class TechniqueUpdateComponent implements OnInit {
    myForm: FormGroup;
    @Input() technique: Technique;

    constructor(private techniqueService: TechniqueService){}

    ngOnInit(){
        this.myForm = new FormGroup({
            name: new FormControl(this.technique.name, Validators.required)});

    }

    onSubmit(form: NgForm){
        this.technique.name = form.value.name;
        this.techniqueService.updateTechnique(this.technique)
            .subscribe(
                data => console.log(data),
                error => console.log(error)
            );
    }
}