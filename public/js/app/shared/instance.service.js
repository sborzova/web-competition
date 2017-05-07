import { Injectable } from "@angular/core";
import { Http, Headers } from "@angular/http";
import { Observable } from "rxjs";
import { Instance } from "../instances/instance.model";
import { FlashMessageService } from "../flash-message/flash-messages.service";
import { FileModel } from "../instances/file.model";
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
        return this.http.post(this.hostUrl.concat('server/instance') + this.token, body, { headers: headers })
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
    InstanceService.prototype.getInstance = function (id) {
        return this.http.get(this.hostUrl.concat('server/instance/' + id))
            .map(function (response) {
            var instance = response.json().obj;
            return new Instance(instance.order, instance.name, instance.description, new FileModel(new Buffer(instance.status.content), instance.status._id), new FileModel(new Buffer(instance.data.content), instance.data._id), instance.submissionTime, instance._id);
        })
            .catch(function (error) {
            return Observable.throw(error);
        });
    };
    InstanceService.prototype.updateInstanceTextFields = function (instance) {
        var _this = this;
        var body = JSON.stringify(instance);
        var headers = new Headers({ 'Content-Type': 'application/json' });
        return this.http.patch(this.hostUrl.concat('server/instance/') + instance.instanceId + this.token, body, { headers: headers })
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
        return this.http.get(this.hostUrl.concat('server/instances'))
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
        return this.http.delete(this.hostUrl.concat('server/instance/') + instance.instanceId + this.token)
            .map(function (response) {
            return response.json();
        })
            .catch(function (error) {
            return Observable.throw(error);
        });
    };
    InstanceService.prototype.download = function (instance) {
        var file = new File([String.fromCharCode.apply(null, instance.data.content)], instance.name + '.xml', { type: "text/xml;charset=utf-8" });
        this.fileSaver.saveAs(file);
    };
    Object.defineProperty(InstanceService.prototype, "token", {
        get: function () {
            return sessionStorage.getItem('token')
                ? '?token=' + sessionStorage.getItem('token')
                : '';
        },
        enumerable: true,
        configurable: true
    });
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
