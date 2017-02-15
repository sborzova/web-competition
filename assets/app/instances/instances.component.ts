import { Component } from '@angular/core';

import { ErrorService } from "../messages/errors/error.service";
import { SuccessService } from "../messages/successes/success.service";

@Component({
    selector: 'app-instances',
    templateUrl: 'instances.component.html'
})
export class InstancesComponent {

    constructor(private successService: SuccessService,
                private errorService: ErrorService){

        this.errorService.deleteError();
        this.successService.deleteSuccess();
    }
}