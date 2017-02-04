import { Component } from '@angular/core';
import {ErrorService} from "../messages/errors/error.service";

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html'
})
export class HomeComponent {

    constructor(private errorService: ErrorService){

        this.errorService.deleteError();
    }

}