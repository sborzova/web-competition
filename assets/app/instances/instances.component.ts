import { Component } from '@angular/core';

import { InstancesService } from "./instances.service";
import { FileUploader } from "ng2-file-upload";
import { ErrorService } from "../messages/errors/error.service";

@Component({
    selector: 'app-instances',
    templateUrl: 'instances.component.html',
    providers: [InstancesService]
})
export class InstancesComponent {
    private hostUrl: string;
    public uploader: FileUploader;

    constructor(private errorService: ErrorService){

        this.errorService.deleteError();
        const routeModule = require("../app.routing");
        this.hostUrl = routeModule.hostUrl;
        this.uploader = new FileUploader({url:this.hostUrl.concat('upload')});
    }
}