import { Injectable } from "@angular/core";
import { Http } from "@angular/http";
import { Observable } from "rxjs/Observable";
export var FileService = (function () {
    function FileService(http) {
        this.http = http;
        var routeModule = require("../app.routing");
        this.hostUrl = routeModule.hostUrl;
    }
    FileService.prototype.saveFile = function (file) {
        var _this = this;
        this.xmlHttp = new XMLHttpRequest();
        return Observable.create(function (observer) {
            _this.xmlHttp.onreadystatechange = function () {
                if (_this.xmlHttp.readyState === 4) {
                    if (_this.xmlHttp.status === 200) {
                        observer.next(_this.xmlHttp.response);
                        observer.complete();
                    }
                    else {
                        observer.error(_this.xmlHttp.response);
                    }
                }
            };
            var fd = new FormData();
            fd.append('file', file);
            _this.xmlHttp.open("POST", _this.hostUrl.concat('server/file'));
            _this.xmlHttp.setRequestHeader("enctype", "multipart/form-data");
            _this.xmlHttp.send(fd);
        });
    };
    FileService.prototype.updateFile = function (file) {
        var _this = this;
        this.xmlHttp = new XMLHttpRequest();
        return Observable.create(function (observer) {
            _this.xmlHttp.onreadystatechange = function () {
                if (_this.xmlHttp.readyState === 4) {
                    if (_this.xmlHttp.status === 200) {
                        observer.next(_this.xmlHttp.response);
                        observer.complete();
                    }
                    else {
                        observer.error(_this.xmlHttp.response);
                    }
                }
            };
            var fd = new FormData();
            fd.append('file', file.content);
            _this.xmlHttp.open("POST", _this.hostUrl.concat('server/fileUpdate/') + file.id);
            _this.xmlHttp.setRequestHeader("enctype", "multipart/form-data");
            _this.xmlHttp.send(fd);
        });
    };
    FileService.prototype.deleteFile = function (id) {
        return this.http.delete(this.hostUrl.concat('server/delete/') + id)
            .map(function (response) {
            return response.json();
        })
            .catch(function (error) {
            return Observable.throw(error);
        });
    };
    FileService.decorators = [
        { type: Injectable },
    ];
    /** @nocollapse */
    FileService.ctorParameters = [
        { type: Http, },
    ];
    return FileService;
}());
