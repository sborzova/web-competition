import { Injectable } from "@angular/core";
import { Http, Headers } from "@angular/http";
import { Observable } from "rxjs";
import { Instance } from "../instances/instance.model";
import { FlashMessageService } from "../flash-message/flash-messages.service";
export var InstanceService = (function () {
    function InstanceService(http, flashMessageService) {
        this.http = http;
        this.flashMessageService = flashMessageService;
        this.instances = [];
        this.fileSaver = require('file-saver');
        var routeModule = require("../app.routing");
        this.hostUrl = routeModule.hostUrl;
    }
    InstanceService.prototype.saveInstance = function (instance) {
        var _this = this;
        var body = JSON.stringify(instance);
        var headers = new Headers({ 'Content-Type': 'application/json' });
        return this.http.post(this.hostUrl.concat('instance'), body, { headers: headers })
            .map(function (response) {
            var result = response.json().obj.data;
            var instance = new Instance(result.order, result.name, result.description, null, null, result.submissionTime, result._id);
            _this.instances.push(instance);
            return instance;
        })
            .catch(function (error) {
            if (error.status === 422) {
                _this.flashMessageService.showMessage('The name is already in use.', 'danger');
            }
            return Observable.throw(error);
        });
    };
    InstanceService.prototype.saveFiles = function (fd, id) {
        var _this = this;
        this.xmlHttp = new XMLHttpRequest();
        return Observable.create(function (observer) {
            var headers = new Headers({ 'Content-Type': 'multipart/form-data' });
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
            _this.xmlHttp.open("POST", _this.hostUrl.concat('files/') + id);
            _this.xmlHttp.setRequestHeader("enctype", "multipart/form-data");
            _this.xmlHttp.send(fd);
        });
    };
    InstanceService.prototype.getInstance = function (id) {
        return this.http.get(this.hostUrl.concat('instance/' + id))
            .map(function (response) {
            var instance = response.json().obj;
            return new Instance(instance.order, instance.name, instance.description, instance.status, new Buffer(instance.data.data), instance.submissionTime, instance._id);
        })
            .catch(function (error) {
            return Observable.throw(error);
        });
    };
    InstanceService.prototype.updateInstanceTextFields = function (instance) {
        var _this = this;
        instance = this.simplify(instance);
        var body = JSON.stringify(instance);
        var headers = new Headers({ 'Content-Type': 'application/json' });
        return this.http.patch(this.hostUrl.concat('instanceTextFields/') + instance.instanceId, body, { headers: headers })
            .map(function (response) {
            return response.json();
        })
            .catch(function (error) {
            if (error.status === 422) {
                _this.flashMessageService.showMessage('The name is already in use.', 'danger');
            }
            return Observable.throw(error);
        });
    };
    InstanceService.prototype.getInstances = function () {
        var _this = this;
        return this.http.get(this.hostUrl.concat('instances'))
            .map(function (response) {
            var instances = response.json().obj;
            var transformedInstances = [];
            for (var _i = 0, instances_1 = instances; _i < instances_1.length; _i++) {
                var instance = instances_1[_i];
                transformedInstances.push(new Instance(instance.order, instance.name, instance.description, null, null, instance.submissionTime, instance._id));
            }
            _this.instances = transformedInstances;
            return transformedInstances;
        })
            .catch(function (error) { return Observable.throw(error); });
    };
    InstanceService.prototype.deleteInstance = function (instance) {
        this.instances.splice(this.instances.indexOf(instance), 1);
        return this.http.delete(this.hostUrl.concat('instance/') + instance.instanceId)
            .map(function (response) {
            return response.json();
        })
            .catch(function (error) {
            return Observable.throw(error);
        });
    };
    InstanceService.prototype.download = function (instance) {
        var file = new File([String.fromCharCode.apply(null, instance.data)], instance.name + '.xml', { type: "text/xml;charset=utf-8" });
        this.fileSaver.saveAs(file);
    };
    InstanceService.prototype.simplify = function (instance) {
        instance.data = null;
        return instance;
    };
    InstanceService.decorators = [
        { type: Injectable },
    ];
    /** @nocollapse */
    InstanceService.ctorParameters = [
        { type: Http, },
        { type: FlashMessageService, },
    ];
    return InstanceService;
}());
