import { Injectable } from "@angular/core";
import {Http, Response, Headers} from "@angular/http";
import {InstanceGroup} from "../instance-group-new/instance-group.model";
import {Observable} from "rxjs";
import {SuccessService} from "../messages/successes/success.service";

@Injectable()
export class InstancesService {
    private instanceGroups: InstanceGroup[] = [];
    private hostUrl: string;

    constructor(private http: Http,
                private successService: SuccessService) {
        const routeModule = require("../app.routing");
        this.hostUrl = routeModule.hostUrl;
    }

    getInstanceGroups(){
        return this.http.get(this.hostUrl.concat('instanceGroups'))
            .map((response: Response) => {
                const instanceGroups = response.json().obj;
                let transformedInstanceGroups: InstanceGroup[] = [];
                for (let instanceGroup of instanceGroups) {
                    transformedInstanceGroups.push(new InstanceGroup(
                        instanceGroup.name,
                        instanceGroup._id)
                    );
                }
                this.instanceGroups = instanceGroups;
                return transformedInstanceGroups;
            })
            .catch((error: Response) => Observable.throw(error.json()));
    }

    deleteInstanceGroup(instanceGroup: InstanceGroup){
        this.instanceGroups.splice(this.instanceGroups.indexOf(instanceGroup), 1);
        const token = localStorage.getItem('token')
            ? '?token=' + localStorage.getItem('token')
            : '';
        return this.http.delete(
            this.hostUrl.concat('instanceGroup/') + instanceGroup.instanceGroupId + token)
            .map((response: Response) => {
                this.successService.handleSuccess(response.json());
                return response.json();
            })
            .catch((error: Response) => {
                //this.errorService.handleError(error.json());
                return Observable.throw(error.json());
            });
    }

    editInstanceGroup(instanceGroup: InstanceGroup){
        const body = JSON.stringify(instanceGroup);
        const headers = new Headers({'Content-Type': 'application/json'});
        const token = localStorage.getItem('token')
            ? '?token=' + localStorage.getItem('token')
            : '';
        return this.http.patch(
            this.hostUrl.concat('instanceGroup/') + instanceGroup.instanceGroupId + token, body, {headers: headers})
            .map((response: Response) => response.json())
            .catch((error: Response) => {
                // this.errorService.handleError(error.json());
                return Observable.throw(error.json());
            });
    }
}
