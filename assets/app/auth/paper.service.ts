import { Injectable } from "@angular/core";
import { Http, Headers, Response } from "@angular/http";

import { Paper } from "./paper.model";
import { Observable } from "rxjs";


@Injectable()
export class PaperService {
    private hostUrl: string;

    constructor(private http: Http) {

        const routeModule = require("../app.routing");
        this.hostUrl = routeModule.hostUrl;
    }

    savePaper(paper: Paper){
        const body = JSON.stringify(paper);
        const headers = new Headers({'Content-Type': 'application/json'});
        return this.http.post(this.hostUrl.concat('paper'), body, {headers: headers})
            .map((response: Response) => {
                const result = response.json().obj;
                const paper = new Paper(
                    result.data.reference,
                    result.data.url);
                return paper;
            })
            .catch((error: Response) => {
                return Observable.throw(error.json())
            });
    }

    getPaper(paper: Paper){
        return this.http.get(this.hostUrl.concat('paper/') + paper.paperId)
            .map((response: Response) => {
                const paper = response.json().obj;
                return new Paper(
                    paper.reference,
                    paper.url,
                    paper._id)
            })
            .catch((error: Response) => Observable.throw(error.json()));
    }
}