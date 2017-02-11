import {Component, Input} from '@angular/core';

import { ErrorService } from "../messages/errors/error.service";
import { SuccessService } from "../messages/successes/success.service";
import { TechniqueService } from "./technique.service";
import { Technique } from "./technique.model";

@Component({
    selector: 'app-technique',
    templateUrl: './technique.component.html',
    providers: [ TechniqueService ]
})
export class TechniqueComponent {
    @Input() techniques: Technique[];

    constructor(private techniqueService: TechniqueService,
                private errorService: ErrorService,
                private successService: SuccessService){

        this.errorService.deleteError();
        this.successService.deleteSuccess();
    }

    ngOnInit(){
        this.techniqueService.getTechniques()
            .subscribe(
                (techniques: Technique[] ) =>{
                    this.techniques = techniques;
                }
            );
    }

}