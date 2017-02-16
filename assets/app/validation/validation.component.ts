import {Component, ViewChild} from "@angular/core";
import {ValidationService} from "./validation.service";

@Component({
    selector: 'app-validation',
    templateUrl: './validation.component.html'
})
export class ValidationComponent {
    @ViewChild('solution') solutionElem;

    constructor(private validationService: ValidationService){}

    onValidate(){
        //
        // let solutionInput= this.solutionElem.nativeElement;
        //
        // if (solutionInput.files && solutionInput.files[0]){
        //     this.validationService.validate(solutionInput.files[0])
        //         .subscribe(
        //             data => console.log(data),
        //             error => console.log(error)
        //         )
        // }
    }
}