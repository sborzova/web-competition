import {Component, OnInit} from "@angular/core";
import {ActivatedRoute} from "@angular/router";

import {Instance} from "../instance.model";
import {InstanceService } from "../../shared/services/instance.service";

/**
 * Component to show status of instance.
 */
@Component({
    selector: 'app-instance-stats',
    templateUrl: './instance-status.component.html'
})
export class InstanceStatusComponent implements OnInit {
    instance: Instance;

    /**
     * When creating component, inject dependencies.
     *
     * @param instanceService
     * @param route
     */
    constructor(private instanceService: InstanceService,
                private route: ActivatedRoute){}

    /**
     * When creating component, call function to get instance by router parameter's id.
     */
    ngOnInit(){
        let id = this.route.snapshot.params['id'];
        this.instanceService.getInstance(id)
            .subscribe(
                (instance: Instance) => {
                    this.instance = instance;
            });
    }
}