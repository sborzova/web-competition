import { Injectable } from "@angular/core";
import { Http, Headers } from "@angular/http";
import { Observable } from "rxjs";
import { Paper } from "../models/paper.model";
/**
 *  Service for paper to communicate with database.
 */
export var PaperService = (function () {
    /**
     * When creating service, inject dependency and set url for communication with database.
     *
     * @param http
     */
    function PaperService(http) {
        this.http = http;
        var routeModule = require("../../app.routing");
        this.hostUrl = routeModule.hostUrl;
    }
    /**
     * Send request to server to save new paper.
     *
     * @param paper
     * @returns {Observable<Response>} response contains paper if success, other way error
     */
    PaperService.prototype.savePaper = function (paper) {
        var body = JSON.stringify(paper);
        var headers = new Headers({ 'Content-Type': 'application/json' });
        return this.http.post(this.hostUrl.concat('server/paper'), body, { headers: headers })
            .map(function (response) {
            var result = response.json().obj;
            var paper = new Paper(result.citation, result.url, result._id);
            return paper;
        })
            .catch(function (error) {
            return Observable.throw(error);
        });
    };
    /**
     * Send request to server to get instance by id.
     *
     * @param paper
     * @returns {Observable<Response>} response contains paper if success, other way error
     */
    PaperService.prototype.getPaper = function (paper) {
        return this.http.get(this.hostUrl.concat('server/paper/') + paper.paperId)
            .map(function (response) {
            var paper = response.json().obj;
            return new Paper(paper.citation, paper.url, paper._id);
        })
            .catch(function (error) { return Observable.throw(error); });
    };
    /**
     * Send request to server to update instance.
     *
     * @param instance
     * @returns {Observable<Response>} response contains instance if success, other way error
     */
    PaperService.prototype.updatePaper = function (paper) {
        var body = JSON.stringify(paper);
        var headers = new Headers({ 'Content-Type': 'application/json' });
        return this.http.patch(this.hostUrl.concat('server/paper/') + paper.paperId, body, { headers: headers })
            .map(function (response) {
            return response.json();
        })
            .catch(function (error) {
            return Observable.throw(error);
        });
    };
    /**
     * Send request to server to delete paper by id.
     *
     * @param id
     * @returns {Observable<Response>} response contains paper if success, other way error
     */
    PaperService.prototype.deletePaper = function (id) {
        return this.http.delete(this.hostUrl.concat('server/paper/') + id)
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
