import { Component, OnInit, OnDestroy } from "@angular/core";
import { ActivatedRoute, Params } from "@angular/router";

import { Instance } from "../instance.model";
import { InstanceService } from "../instance.service";
import { Subscription } from "rxjs";

@Component({
    selector: 'app-instance-stats',
    templateUrl: './instance-stats.component.html'
})
export class InstanceStatsComponent implements OnInit, OnDestroy {
    instance: Instance;
    private subscription: Subscription;

    constructor(private instanceService: InstanceService,
                private activatedRoute: ActivatedRoute){}

    ngOnInit(){
        this.subscription = this.activatedRoute.queryParams.subscribe((params: Params) => {
            let instanceId = params['instanceId'];
            this.instanceService.getInstance(instanceId)
                .subscribe(
                    (instance: Instance) => {
                        this.instance = instance;
                });
        });
    }

    ngOnDestroy(){
        this.subscription.unsubscribe();
    }
}