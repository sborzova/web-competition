import { Component } from '@angular/core';
import {ErrorService} from "../messages/errors/error.service";
import {SuccessService} from "../messages/successes/success.service";

@Component({
    selector: 'app-techniques',
    templateUrl: 'techniques.component.html'
})
export class TechniquesComponent {

    constructor(private errorService: ErrorService,
                private successService: SuccessService){

        this.errorService.deleteError();
        this.successService.deleteSuccess();
    }
}