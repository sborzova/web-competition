import { Injectable } from "@angular/core";
import { Http } from "@angular/http";
export var FilesService = (function () {
    function FilesService(http) {
        this.http = http;
    }
    FilesService.decorators = [
        { type: Injectable },
    ];
    /** @nocollapse */
    FilesService.ctorParameters = [
        { type: Http, },
    ];
    return FilesService;
}());
