import { Component } from '@angular/core';

import { FilesService } from "./files.service";
import { FileUploader } from "ng2-file-upload";
import {ErrorService} from "../messages/errors/error.service";

@Component({
    selector: 'app-files',
    templateUrl: 'files.component.html',
    providers: [FilesService]
})
export class FilesComponent {
    private hostUrl: string;
    public uploader: FileUploader;

    constructor(private errorService: ErrorService){

        this.errorService.deleteError();
        const routeModule = require("../app.routing");
        this.hostUrl = routeModule.hostUrl;
        this.uploader = new FileUploader({url:this.hostUrl.concat('upload')});
    }
}