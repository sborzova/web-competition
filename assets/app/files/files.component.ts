import { Component } from '@angular/core';

import { FilesService } from "./files.service";
import { FileUploader } from "ng2-file-upload";

@Component({
    selector: 'app-files',
    templateUrl: 'files.component.html',
    providers: [FilesService]
})
export class FilesComponent {
    public uploader:FileUploader = new FileUploader({url:'https://bakalar.herokuapp.com/upload'});
}