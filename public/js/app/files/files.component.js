import { Component } from '@angular/core';
import { FilesService } from "./files.service";
import { FileUploader } from "ng2-file-upload";
export var FilesComponent = (function () {
    function FilesComponent() {
        this.uploader = new FileUploader({ url: 'https://bakalar.herokuapp.com/upload' });
    }
    FilesComponent.decorators = [
        { type: Component, args: [{
                    selector: 'app-files',
                    templateUrl: 'files.component.html',
                    providers: [FilesService]
                },] },
    ];
    /** @nocollapse */
    FilesComponent.ctorParameters = [];
    return FilesComponent;
}());
