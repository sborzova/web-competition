import { Injectable } from "@angular/core";
import {Http, Headers, Response} from "@angular/http";
import { InstanceGroup } from "./instance-group.model";
import {Observable} from "rxjs";

@Injectable()
export class InstanceGroupService{
    private hostUrl: string;

    constructor(private http: Http){
        const routeModule = require("../app.routing");
        this.hostUrl = routeModule.hostUrl;
    }

    save(instanceGroup: InstanceGroup) {
        const body = JSON.stringify(instanceGroup);
        const headers = new Headers({'Content-Type': 'application/json'});
        return this.http.post(this.hostUrl.concat('instanceGroup'), body, {headers: headers})
            .map((response: Response) => response.json())
            .catch((error: Response) => Observable.throw(error.json()));
    }

}