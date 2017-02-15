import {Component, OnInit, OnChanges} from "@angular/core";

import { Instance } from "../instance.model";
import { InstanceService } from "../instance.service";

@Component({
    selector: 'app-instance-list',
    templateUrl: './instance-list.component.html'
})
export class InstanceListComponent implements OnInit {
    instances: Instance[];

    constructor(private instanceService: InstanceService) {

    }

    ngOnInit() {
        this.instanceService.getInstances()
            .subscribe(
                (instances: Instance[]) => {
                    this.instances = instances;
                }
            );
    }
}