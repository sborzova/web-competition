import { Injectable } from "@angular/core";
import { Http, Headers } from "@angular/http";
import { Observable } from "rxjs";
import { Instance } from "../../instances/instance.model";
import { FlashMessageService } from "../../flash-message/flash-messages.service";
import { FileModel } from "../../instances/file.model";
/**
 *  Service for instances to communicate with database.
 */
export var InstanceService = (function () {
    /**
     * When creating service, inject dependencies and set url for communication with database.
     *
     * @param http
     * @param flashMessageService
     */
    function InstanceService(http, flashMessageService) {
        this.http = http;
        this.flashMessageService = flashMessageService;
        this.instances = [];
        this.fileSaver = require('file-saver');
        var routeModule = require("../../app.routing");
        this.hostUrl = routeModule.hostUrl;
    }
    /**
     * Send request to server to save new instance.
     *
     * @param instance
     * @returns {Observable<Response>} response contains instance if success, other way error
     */
    InstanceService.prototype.saveInstance = function (instance) {
        var _this = this;
        var body = JSON.stringify(instance);
        var headers = new Headers({ 'Content-Type': 'application/json' });
        return this.http.post(this.hostUrl.concat('server/admin/instance') + this.getToken(), body, { headers: headers })
            .map(function (response) {
            var result = response.json().obj.data;
            var instance = new Instance(result.order, result.name, result.description, null, null, result.submissionTime, result._id);
            _this.instances.push(instance);
            return instance;
        })
            .catch(function (error) {
            if (error.json().error.name == 'ValidationError') {
                _this.flashMessageService.showMessage('The name is already in use.', 'danger');
            }
            return Observable.throw(error);
        });
    };
    /**
     * Send request to server to get instance by id.
     *
     * @param id
     * @returns {Observable<Response>} response contains instance if success, other way error
     */
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
    /**
     * Send request to server to update instance.
     *
     * @param instance
     * @returns {Observable<Response>} response contains instance if success, other way error
     */
    InstanceService.prototype.updateInstance = function (instance) {
        var _this = this;
        return this.http.patch(this.hostUrl.concat('server/admin/instance/') + instance.instanceId + this.getToken(), this.stringifyObject(instance), { headers: this.getHeaders() })
            .map(function (response) {
            return response.json();
        })
            .catch(function (error) {
            if (error.json().error.name == 'ValidationError') {
                _this.flashMessageService.showMessage('The name is already in use.', 'danger');
            }
            return Observable.throw(error);
        });
    };
    /**
     * Send request to server to get all instances.
     *
     * @returns {Observable<Response>} response contains instances if success, other way error
     */
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
    /**
     * Send request to server to delete instance by id.
     *
     * @param instance
     * @returns {Observable<Response>} response contains instance if success, other way error
     */
    InstanceService.prototype.deleteInstance = function (instance) {
        this.instances.splice(this.instances.indexOf(instance), 1);
        return this.http.delete(this.hostUrl.concat('server/admin/instance/') + instance.instanceId + this.getToken())
            .map(function (response) {
            return response.json();
        })
            .catch(function (error) {
            return Observable.throw(error);
        });
    };
    /**
     * Download instance's data.
     *
     * @param instance
     */
    InstanceService.prototype.download = function (instance) {
        var file = new File([String.fromCharCode.apply(null, instance.data.content)], instance.name + '.xml', { type: "text/xml;charset=utf-8" });
        this.fileSaver.saveAs(file);
    };
    /**
     * Get token from session storage.
     *
     * @returns {string} token
     */
    InstanceService.prototype.getToken = function () {
        return sessionStorage.getItem('token')
            ? '?token=' + sessionStorage.getItem('token')
            : '';
    };
    /**
     * Return headers with set content-type.
     *
     * @returns {Headers} headers
     */
    InstanceService.prototype.getHeaders = function () {
        return new Headers({ 'Content-Type': 'application/json' });
    };
    /**
     * Stringify JSON object.
     *
     * @param object
     * @returns {string} stringified object
     */
    InstanceService.prototype.stringifyObject = function (object) {
        return JSON.stringify(object);
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
