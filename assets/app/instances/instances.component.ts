import { Component } from '@angular/core';

import { InstanceService } from "./instance.service";

@Component({
    selector: 'app-instances',
    templateUrl: 'instances.component.html',
    providers: [ InstanceService ]
})
export class InstancesComponent {

}