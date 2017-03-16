import { Injectable } from "@angular/core";
import { Http, Headers } from "@angular/http";
import { Observable } from "rxjs";
import { Paper } from "../user-solutions/paper.model";
export var PaperService = (function () {
    function PaperService(http) {
        this.http = http;
        var routeModule = require("../app.routing.ts");
        this.hostUrl = routeModule.hostUrl;
    }
    PaperService.prototype.savePaper = function (paper) {
        var body = JSON.stringify(paper);
        var headers = new Headers({ 'Content-Type': 'application/json' });
        return this.http.post(this.hostUrl.concat('paper'), body, { headers: headers })
            .map(function (response) {
            var result = response.json().obj;
            var paper = new Paper(result.data.citation, result.data.url, result.data._id);
            return paper;
        })
            .catch(function (error) {
            return Observable.throw(error);
        });
    };
    PaperService.prototype.getPaper = function (paper) {
        return this.http.get(this.hostUrl.concat('paper/') + paper.paperId)
            .map(function (response) {
            var paper = response.json().obj;
            return new Paper(paper.citation, paper.url, paper._id);
        })
            .catch(function (error) { return Observable.throw(error); });
    };
    PaperService.prototype.updatePaper = function (paper) {
        var body = JSON.stringify(paper);
        var headers = new Headers({ 'Content-Type': 'application/json' });
        return this.http.patch(this.hostUrl.concat('paper/') + paper.paperId, body, { headers: headers })
            .map(function (response) {
            return response.json();
        })
            .catch(function (error) {
            return Observable.throw(error);
        });
    };
    PaperService.prototype.deletePaper = function (paperId) {
        return this.http.delete(this.hostUrl.concat('paper/') + paperId)
            .map(function (response) {
            return response.json();
        })
            .catch(function (error) {
            return Observable.throw(error);
        });
    };
    PaperService.decorators = [
        { type: Injectable },
    ];
    /** @nocollapse */
    PaperService.ctorParameters = [
        { type: Http, },
    ];
    return PaperService;
}());
