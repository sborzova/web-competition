import {Injectable} from "@angular/core";
import {Http, Response, Headers} from "@angular/http";
import {Observable} from "rxjs";
import {Preference} from "./preference.model";

@Injectable()
export class PreferenceService {
    private hostUrl: string;

    constructor(private http: Http) {
        const routeModule = require("../app.routing");
        this.hostUrl = routeModule.hostUrl;
    }

    getValueCompetitionIsOn() {
        return this.http.get(this.hostUrl.concat('preference'))
            .map((response: Response) => {
                return response.json().obj.state;
            })
            .catch((error: Response) => Observable.throw(error));
    }

    updateValueCompetitionIsOn(state: boolean){
        const body = JSON.stringify(new Preference(state));
        const headers = new Headers({'Content-Type': 'application/json'});
        return this.http.patch(this.hostUrl.concat('preference'), body, {headers: headers})
            .map((response: Response) => {
                return response.json();
            })
            .catch((error: Response) => {
                return Observable.throw(error);
            });
    }
}