import {Injectable} from "@angular/core";
import {Http, Headers, Response} from "@angular/http";
import {Observable} from "rxjs";

import {Paper} from "../models/paper.model";

/**
 *  Service for paper to communicate with database.
 */
@Injectable()
export class PaperService {
    private hostUrl: string;

    /**
     * When creating service, inject dependency and set url for communication with database.
     *
     * @param http
     */
    constructor(private http: Http) {
        const routeModule = require("../../app.routing");
        this.hostUrl = routeModule.hostUrl;
    }

    /**
     * Send request to server to save new paper.
     *
     * @param paper
     * @returns {Observable<Response>} response contains paper if success, other way error
     */
    savePaper(paper: Paper){
        const body = JSON.stringify(paper);
        const headers = new Headers({'Content-Type': 'application/json'});
        return this.http.post(this.hostUrl.concat('server/paper'), body, {headers: headers})
            .map((response: Response) => {
                const result = response.json().obj;
                const paper = new Paper(
                    result.citation,
                    result.url,
                    result._id);
                return paper;
            })
            .catch((error: Response) => {
                return Observable.throw(error);
            });
    }

    /**
     * Send request to server to get instance by id.
     *
     * @param paper
     * @returns {Observable<Response>} response contains paper if success, other way error
     */
    getPaper(paper: Paper){
        return this.http.get(this.hostUrl.concat('server/paper/') + paper.paperId)
            .map((response: Response) => {
                const paper = response.json().obj;
                return new Paper(
                    paper.citation,
                    paper.url,
                    paper._id)
            })
            .catch((error: Response) => Observable.throw(error));
    }

    /**
     * Send request to server to update instance.
     *
     * @param instance
     * @returns {Observable<Response>} response contains instance if success, other way error
     */
    updatePaper(paper: Paper){
        const body = JSON.stringify(paper);
        const headers = new Headers({'Content-Type': 'application/json'});
        return this.http.patch(
            this.hostUrl.concat('server/paper/') + paper.paperId, body, {headers: headers})
            .map((response: Response) => {
                return response.json();
            })
            .catch((error: Response) => {
                return Observable.throw(error);
            });
    }

    /**
     * Send request to server to delete paper by id.
     *
     * @param id
     * @returns {Observable<Response>} response contains paper if success, other way error
     */
    deletePaper(id: string){
        return this.http.delete(
            this.hostUrl.concat('server/paper/') + id)
            .map((response: Response) => {
                return response.json();
            })
            .catch((error: Response) => {
                return Observable.throw(error);
            });
    }
}