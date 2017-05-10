import {Injectable} from "@angular/core";
import {Http, Response, Headers} from "@angular/http";
import {Observable} from "rxjs";

import {Instance} from "../../instances/instance.model";
import {FlashMessageService} from "../../flash-message/flash-messages.service";
import {InstanceCreate} from "../../instances/instance-create.model";
import {FileModel} from "../../instances/file.model";
import {InstanceUpdate} from "../../instances/instance-update.model";

@Injectable()
export class InstanceService {
    private instances: Instance[] = [];
    private hostUrl: string;
    private fileSaver = require('file-saver');

    constructor(private http: Http,
                private flashMessageService: FlashMessageService) {

        const routeModule = require("../../app.routing");
        this.hostUrl = routeModule.hostUrl;
    }

    /**
     * Send request to server to save new instance.
     *
     * @param instance
     * @returns {Observable<Response>} response contains instance if success, other way error
     */
    saveInstance(instance: InstanceCreate){
        const body = JSON.stringify(instance);
        const headers = new Headers({'Content-Type': 'application/json'});
        return this.http.post(this.hostUrl.concat('server/admin/instance') + this.getToken(), body, {headers: headers})
            .map((response: Response) => {
                const result = response.json().obj.data;
                const instance = new Instance(
                    result.order,
                    result.name,
                    result.description,
                    null,
                    null,
                    result.submissionTime,
                    result._id);
                this.instances.push(instance);
                return instance;
            })
            .catch((error: Response) => {
                if (error.status === 422){
                    this.flashMessageService.showMessage('The name is already in use.', 'danger' );
                }
                return Observable.throw(error);
            });
    }

    /**
     * Send request to server to get instance by id.
     *
     * @param id
     * @returns {Observable<Response>} response contains instance if success, other way error
     */
    getInstance(id: string){
        return this.http.get(this.hostUrl.concat('server/instance/' + id))
            .map((response: Response) => {
                const instance = response.json().obj;
                return new Instance(
                    instance.order,
                    instance.name,
                    instance.description,
                    new FileModel(new Buffer(instance.status.content), instance.status._id),
                    new FileModel(new Buffer(instance.data.content), instance.data._id),
                    instance.submissionTime,
                    instance._id
                );
            })
            .catch((error: Response) => {
                return Observable.throw(error);
            });
    }

    /**
     * Send request to server to update instance.
     *
     * @param instance
     * @returns {Observable<Response>} response contains instance if success, other way error
     */
    updateInstance(instance: InstanceUpdate){
        return this.http.patch(
            this.hostUrl.concat('server/admin/instance/') + instance.instanceId + this.getToken(), this.stringifyObject(instance), {headers: this.getHeaders()})
            .map((response: Response) => {
                return response.json();
            })
            .catch((error: Response) => {
                if (error.status === 422){
                    this.flashMessageService.showMessage('The name is already in use.', 'danger' );
                }
                return Observable.throw(error);
            });
    }

    /**
     * Send request to server to get all instances.
     *
     * @returns {Observable<Response>} response contains instances if success, other way error
     */
    getInstances(){
        return this.http.get(this.hostUrl.concat('server/instances'))
            .map((response: Response) => {
                const instances = response.json().obj;
                let transformedInstances: Instance[] = [];
                for (let instance of instances) {
                    transformedInstances.push(new Instance(
                        instance.order,
                        instance.name,
                        instance.description,
                        null,
                        null,
                        instance.submissionTime,
                        instance._id)
                    );
                }
                this.instances = transformedInstances;
                return transformedInstances;
            })
            .catch((error: Response) => Observable.throw(error));
    }

    /**
     * Send request to server to delete instance by id.
     *
     * @param instance
     * @returns {Observable<Response>} response contains instance if success, other way error
     */
    deleteInstance(instance: Instance){
        this.instances.splice(this.instances.indexOf(instance), 1);
        return this.http.delete(
            this.hostUrl.concat('server/admin/instance/') + instance.instanceId + this.getToken())
            .map((response: Response) => {
                return response.json();
            })
            .catch((error: Response) => {
                return Observable.throw(error);
            });
    }

    /**
     * Download instance's data.
     *
     * @param instance
     */
    download(instance: Instance){
        let file = new File([String.fromCharCode.apply(null, instance.data.content)],
            instance.name + '.xml', {type: "text/xml;charset=utf-8"});
        this.fileSaver.saveAs(file);
    }

    /**
     * Get token from session storage.
     *
     * @returns {string} token
     */
    getToken(){
        return sessionStorage.getItem('token')
            ? '?token=' + sessionStorage.getItem('token')
            : '';
    }

    /**
     * Return headers with set content-type.
     *
     * @returns {Headers} headers
     */
    getHeaders (){
        return new Headers({'Content-Type': 'application/json'});
    }

    /**
     * Stringify object.
     *
     * @param object
     * @returns {string} stringified object
     */
    stringifyObject(object){
        return JSON.stringify(object);
    }
}
