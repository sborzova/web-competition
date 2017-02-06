import { Component } from '@angular/core';
import {ErrorService} from "../messages/errors/error.service";
import {SuccessService} from "../messages/successes/success.service";

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html'
})
export class HomeComponent {

    constructor(private errorService: ErrorService,
                private successService: SuccessService){

        this.errorService.deleteError();
        this.successService.deleteSuccess();
    }

}