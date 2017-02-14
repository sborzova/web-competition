import { Injectable } from "@angular/core";
import { Http, Response, Headers } from "@angular/http";
import { Observable } from "rxjs";

import { SuccessService } from "../messages/successes/success.service";
import { Instance } from "./instance.model";
import { ErrorService } from "../messages/errors/error.service";


@Injectable()
export class InstanceService {
    private instances: Instance[] = [];
    private hostUrl: string;
    private XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
    private xmlHttp;

    constructor(private http: Http,
                private successService: SuccessService,
                private errorService: ErrorService) {

        const routeModule = require("../app.routing");
        this.hostUrl = routeModule.hostUrl;
        this.xmlHttp = new XMLHttpRequest();
    }

    saveInstance(instance: Instance){
        const body = JSON.stringify(instance);
        const headers = new Headers({'Content-Type': 'application/json'});
        return this.http.post(this.hostUrl.concat('instance'), body, {headers: headers})
            .map((response: Response) => {
                const result = response.json().obj.data;
                const instance = new Instance(
                    result.name,
                    result.description,
                    null,
                    null,
                    result.postDate,
                    result.isOn,
                    result._id);
                this.instances.push(instance);
                return response.json();
            })
            .catch((error: Response) => {
                if (error.status === 422){
                    this.errorService.handleError(error.json());
                }
                return Observable.throw(error.json())
            });
    }

    saveFiles(fd: FormData, id: string){
        return Observable.create(observer => {
            const headers = new Headers({'Content-Type': 'multipart/form-data'});

            this.xmlHttp.onreadystatechange = () => {
                if (this.xmlHttp.readyState === 4) {
                    if (this.xmlHttp.status === 200) {
                        // observer.next(JSON.parse(this.xmlHttp.response));
                        observer.next(this.xmlHttp.response);
                        observer.complete();
                    } else {
                        observer.error(this.xmlHttp.response);
                    }
                }
            };

            this.xmlHttp.open("POST", this.hostUrl.concat('files/') + id);
            this.xmlHttp.setRequestHeader("enctype", "multipart/form-data");
            this.xmlHttp.send(fd);
        });
    }

    getInstance(id: string){
        return this.http.get(this.hostUrl.concat('instance/' + id))
            .map((response: Response) => {
                const instance = response.json().obj;
                return new Instance(
                    instance.name,
                    instance.description,
                    instance.stats,
                    instance.data,
                    instance.postDate,
                    instance.isOn,
                    instance._id
                );
            })
            .catch((error: Response) => {
                this.errorService.handleError(error.json());
                return Observable.throw(error.json())
            });
    }

    updateInstanceTextFields(instance: Instance){
        const body = JSON.stringify(instance);
        const headers = new Headers({'Content-Type': 'application/json'});
        return this.http.patch(
            this.hostUrl.concat('instanceTextFields/') + instance.instanceId, body, {headers: headers})
            .map((response: Response) => response.json())
            .catch((error: Response) => {
                this.errorService.handleError(error.json());
                return Observable.throw(error.json());
            });
    }

    getInstances(){
        return this.http.get(this.hostUrl.concat('instances'))
            .map((response: Response) => {
                const instances = response.json().obj;
                let transformedInstances: Instance[] = [];
                for (let instance of instances) {
                    transformedInstances.push(new Instance(
                        instance.name,
                        instance.description,
                        null,
                        null,
                        instance.postDate,
                        instance.isOn,
                        instance._id)
                    );
                }
                this.instances = transformedInstances;
                return transformedInstances;
            })
            .catch((error: Response) => Observable.throw(error.json()));
    }

    deleteInstance(instance: Instance){
        this.instances.splice(this.instances.indexOf(instance), 1);
        return this.http.delete(
            this.hostUrl.concat('instance/') + instance.instanceId)
            .map((response: Response) => {
                this.successService.handleSuccess(response.json());
                return response.json();
            })
            .catch((error: Response) => {
                this.errorService.handleError(error.json());
                return Observable.throw(error.json());
            });
    }
}
