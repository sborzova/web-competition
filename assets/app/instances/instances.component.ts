import {Component, Input, OnInit, OnChanges} from '@angular/core';

import { InstancesService } from "./instances.service";
import { FileUploader } from "ng2-file-upload";
import { ErrorService } from "../messages/errors/error.service";
import { InstanceGroup } from "../instance-group-new/instance-group.model";

@Component({
    selector: 'app-instances',
    templateUrl: 'instances.component.html',
    providers: [InstancesService]
})
export class InstancesComponent implements OnInit {
    @Input() instanceGroups : InstanceGroup[];
    private hostUrl: string;
    public uploader: FileUploader;

    constructor(private errorService: ErrorService,
                private instancesService: InstancesService){

        this.errorService.deleteError();
        const routeModule = require("../app.routing");
        this.hostUrl = routeModule.hostUrl;
        this.uploader = new FileUploader({url:this.hostUrl.concat('upload')});
    }

    ngOnInit(){
        this.instancesService.getInstanceGroups()
            .subscribe(
                (instanceGroups: InstanceGroup[] ) =>{
                    this.instanceGroups = instanceGroups;
                }
            );
    }

}