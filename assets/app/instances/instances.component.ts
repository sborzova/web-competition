import {Component, Input, OnInit, OnChanges} from '@angular/core';

import { InstancesService } from "./instances.service";
import { FileUploader } from "ng2-file-upload";
import { ErrorService } from "../messages/errors/error.service";
import { SuccessService } from "../messages/successes/success.service";
import { Instance } from "./instance.model";

@Component({
    selector: 'app-instances',
    templateUrl: 'instances.component.html',
    providers: [InstancesService]
})
export class InstancesComponent implements OnInit {
    @Input() instances : Instance[];
    private hostUrl: string;
    //public uploader: FileUploader;

    constructor(private errorService: ErrorService,
                private successService: SuccessService,
                private instancesService: InstancesService){

        this.errorService.deleteError();
        this.successService.deleteSuccess();

        const routeModule = require("../app.routing");
        this.hostUrl = routeModule.hostUrl;
        //this.uploader = new FileUploader({url:this.hostUrl.concat('upload')});
    }

    ngOnInit(){
        this.instancesService.getInstances()
            .subscribe(
                (instances: Instance[] ) =>{
                    this.instances = instances;
                }
            );
    }

}