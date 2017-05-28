import {Injectable} from "@angular/core";
import {Http, Response, Headers} from "@angular/http";
import {Observable} from "rxjs";
import {Preference} from "./preference.model";

/**
 * Service for preference to communicate with database.
 */
@Injectable()
export class PreferenceService {
    private hostUrl: string;

    /**
     * When creating service, inject dependency and set url for communication with database.
     *
     * @param http
     */
    constructor(private http: Http) {
        const routeModule = require("../app.routing");
        this.hostUrl = routeModule.hostUrl;
    }

    /**
     * Send request to server to get preference state of competition
     *
     * @returns {Observable<Response>} response contains state of competition if success, other way error
     */
    getValueCompetitionIsOn() {
        return this.http.get(this.hostUrl.concat('server/preference'))
            .map((response: Response) => {
                return response.json().obj.state;
            })
            .catch((error: Response) => Observable.throw(error));
    }

    /**
     * Send request to server to update preference state of competition.
     *
     * @param state
     * @returns {Observable<Response>} response with preference if success, other way error
     */
    updateValueCompetitionIsOn(state: boolean){
        const body = JSON.stringify(new Preference(state));
        const headers = new Headers({'Content-Type': 'application/json'});
        const token = sessionStorage.getItem('token')
            ? '?token=' + sessionStorage.getItem('token')
            : '';
        return this.http.patch(this.hostUrl.concat('server/admin/preferenceUpdate') + token, body, {headers: headers})
            .map((response: Response) => {
                return response.json();
            })
            .catch((error: Response) => {
                return Observable.throw(error);
            });
    }
}