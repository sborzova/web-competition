import { Component, OnInit, OnDestroy } from "@angular/core";
import { ActivatedRoute, Params } from "@angular/router";

import { Instance } from "../instance.model";
import { InstanceService } from "../../shared/instance.service";

@Component({
    selector: 'app-instance-stats',
    templateUrl: './instance-status.component.html'
})
export class InstanceStatusComponent implements OnInit {
    instance: Instance;

    constructor(private instanceService: InstanceService,
                private route: ActivatedRoute){}

    ngOnInit(){
        let id = this.route.snapshot.params['id'];
        this.instanceService.getInstance(id)
            .subscribe(
                (instance: Instance) => {
                    this.instance = instance;
                    console.log(instance)
            });
    }
}