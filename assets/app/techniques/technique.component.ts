import { Component } from '@angular/core';

import { ErrorService } from "../messages/errors/error.service";
import { SuccessService } from "../messages/successes/success.service";
import { TechniqueService } from "./technique.service";

@Component({
    selector: 'app-technique',
    templateUrl: './technique.component.html',
    providers: [ TechniqueService ]
})
export class TechniqueComponent {

    constructor(private errorService: ErrorService,
                private successService: SuccessService){

        this.errorService.deleteError();
        this.successService.deleteSuccess();
    }

}