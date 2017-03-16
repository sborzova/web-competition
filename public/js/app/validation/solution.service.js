import { Injectable, EventEmitter } from "@angular/core";
import { Headers, Http } from "@angular/http";
import { Observable, Subject } from "rxjs";
import { Solution } from "../user-solutions/solution.model";
import { Paper } from "./paper.model";
import { FlashMessageService } from "../flash-message/flash-messages.service";
import { SolutionResult } from "../results/solution-result.model";
import { Author } from "../results/author.model";
import { Instance } from "../results/instance.model";
export var SolutionService = (function () {
    function SolutionService(http, flashMessageService) {
        this.http = http;
        this.flashMessageService = flashMessageService;
        this.successValidation = new EventEmitter();
        this.worseSolutions = new EventEmitter();
        this.resultsInstance = new EventEmitter();
        this.resultsAuthor = new EventEmitter();
        this.resultsAuthorTechnique = new EventEmitter();
        this.successValidationDeleteSource = new Subject();
        this.worseSolutionsDeleteSource = new Subject();
        this.successValidationDelete$ = this.successValidationDeleteSource.asObservable();
        this.worseSolutionsDeleteSource$ = this.worseSolutionsDeleteSource.asObservable();
        var routeModule = require("../app.routing");
        this.hostUrl = routeModule.hostUrl;
    }
    SolutionService.prototype.validate = function (fd) {
        var _this = this;
        this.xmlHttp = new XMLHttpRequest();
        return Observable.create(function (observer) {
            var headers = new Headers({ 'Content-Type': 'multipart/form-data' });
            _this.xmlHttp.onreadystatechange = function () {
                if (_this.xmlHttp.readyState === 4) {
                    if (_this.xmlHttp.status === 200) {
                        observer.next(_this.xmlHttp.response);
                        observer.complete();
                    }
                    else {
                        observer.error(_this.xmlHttp.response);
                    }
                }
            };
            _this.xmlHttp.open("POST", _this.hostUrl.concat('validator/'));
            _this.xmlHttp.setRequestHeader("enctype", "multipart/form-data");
            _this.xmlHttp.send(fd);
        });
    };
    SolutionService.prototype.saveSolution = function (solution, paperCitation, paperUrl) {
        var _this = this;
        if (paperCitation || paperUrl) {
            this.savePaper(new Paper(paperCitation, paperUrl))
                .subscribe(function (paperId) {
                solution.paperId = paperId;
                _this.saveSolutionWithoutFile(solution)
                    .subscribe(function (solutionId) {
                    _this.saveFileSolution(solutionId)
                        .subscribe(function () {
                        _this.flashMessageService.showMessage('Solution was uploaded.', 'alert-success');
                        _this.successValidationHideResult();
                    }, function (error) { return console.error(JSON.parse(error)); });
                }, function (error) { return console.error(error); });
            });
        }
        else {
            this.saveSolutionWithoutFile(solution)
                .subscribe(function (solutionId) {
                _this.saveFileSolution(solutionId)
                    .subscribe(function () {
                    _this.flashMessageService.showMessage('Solution was uploaded.', 'alert-success');
                    _this.successValidationHideResult();
                }, function (error) { return console.error(JSON.parse(error)); });
            }, function (error) { return console.error(error); });
        }
    };
    SolutionService.prototype.getWorseSolutions = function (solution) {
        var body = JSON.stringify(solution);
        var token = sessionStorage.getItem('token')
            ? '?token=' + sessionStorage.getItem('token')
            : '';
        var headers = new Headers({ 'Content-Type': 'application/json' });
        return this.http.post(this.hostUrl.concat('worseSolutions') + token, body, { headers: headers })
            .map(function (response) {
            var solutions = response.json().obj;
            var transformedSolutions = [];
            for (var _i = 0, solutions_1 = solutions; _i < solutions_1.length; _i++) {
                var solution_1 = solutions_1[_i];
                transformedSolutions.push(new Solution(solution_1.unassigned, solution_1.total, solution_1.sc, solution_1.time, solution_1.room, solution_1.distr, solution_1.technique, solution_1.info, solution_1.postDate, solution_1.data, solution_1.instance, solution_1.paper, solution_1._id, false));
            }
            return transformedSolutions;
        })
            .catch(function (error) { return Observable.throw(error.json()); });
    };
    SolutionService.prototype.savePaper = function (paper) {
        var body = JSON.stringify(paper);
        var headers = new Headers({ 'Content-Type': 'application/json' });
        return this.http.post(this.hostUrl.concat('paper'), body, { headers: headers })
            .map(function (response) {
            return response.json().obj.data._id;
        })
            .catch(function (error) { return Observable.throw(error.json()); });
    };
    SolutionService.prototype.saveSolutionWithoutFile = function (solution) {
        var body = JSON.stringify(solution);
        var token = sessionStorage.getItem('token')
            ? '?token=' + sessionStorage.getItem('token')
            : '';
        var headers = new Headers({ 'Content-Type': 'application/json' });
        return this.http.post(this.hostUrl.concat('solution') + token, body, { headers: headers })
            .map(function (response) {
            return response.json().obj.data._id;
        })
            .catch(function (error) { return Observable.throw(error.json()); });
    };
    SolutionService.prototype.getSolution = function (solutionId) {
        return this.http.get(this.hostUrl.concat('solution/' + solutionId))
            .map(function (response) {
            var solution = response.json().obj;
            return new Solution(solution.unassigned, solution.total, solution.sc, solution.time, solution.room, solution.distr, solution.technique, solution.info, solution.postDate, solution.data, solution.instance, solution.paper, solution._id, false);
        })
            .catch(function (error) {
            return Observable.throw(error);
        });
    };
    SolutionService.prototype.getSolutionsByLoggedUser = function () {
        var token = sessionStorage.getItem('token')
            ? '?token=' + sessionStorage.getItem('token')
            : '';
        var headers = new Headers({ 'Content-Type': 'application/json' });
        return this.http.get(this.hostUrl.concat('solutionsByLoggedUser') + token, { headers: headers })
            .map(function (response) {
            var solutions = response.json().obj;
            var transformedSolutions = [];
            for (var _i = 0, solutions_2 = solutions; _i < solutions_2.length; _i++) {
                var solution = solutions_2[_i];
                transformedSolutions.push(new Solution(solution.unassigned, solution.total, solution.sc, solution.time, solution.room, solution.distr, solution.technique, solution.info, solution.postDate, solution.data, solution.instance, solution.paper ? new Paper(solution.paper.citation, solution.paper.url, solution.paper._id) : null, solution._id, false));
            }
            return transformedSolutions;
        })
            .catch(function (error) { return Observable.throw(error); });
    };
    SolutionService.prototype.getSolutionsByInstance = function (instanceId) {
        return this.http.get(this.hostUrl.concat('solutionsByInstance/') + instanceId)
            .map(function (response) {
            var solutions = response.json().obj;
            var transformedSolutions = [];
            for (var _i = 0, solutions_3 = solutions; _i < solutions_3.length; _i++) {
                var solution = solutions_3[_i];
                transformedSolutions.push(new SolutionResult(new Instance(solution.instance.name, solution.instance._id, solution.instance.order), solution.unassigned, solution.total, solution.sc, solution.time, solution.room, solution.distr, solution.technique, solution.info, solution.postDate, solution.data, solution.paper, new Author(solution.user.firstName.concat(" ").concat(solution.user.lastName), solution.user._id), solution._id));
            }
            return transformedSolutions;
        })
            .catch(function (error) { return Observable.throw(error); });
    };
    SolutionService.prototype.getSolutionsByUser = function (userId) {
        return this.http.get(this.hostUrl.concat('solutionsByUser/') + userId)
            .map(function (response) {
            var solutions = response.json().obj;
            var transformedSolutions = [];
            for (var _i = 0, solutions_4 = solutions; _i < solutions_4.length; _i++) {
                var solution = solutions_4[_i];
                transformedSolutions.push(new SolutionResult(new Instance(solution.instance.name, solution.instance._id, solution.instance.order), solution.unassigned, solution.total, solution.sc, solution.time, solution.room, solution.distr, solution.technique, solution.info, solution.postDate, solution.data, solution.paper, new Author(solution.user.firstName.concat(" ").concat(solution.user.lastName), solution.user._id), solution._id));
            }
            return transformedSolutions;
        })
            .catch(function (error) { return Observable.throw(error); });
    };
    SolutionService.prototype.deletePaperFromSolution = function (solution) {
        var headers = new Headers({ 'Content-Type': 'application/json' });
        return this.http.patch(this.hostUrl.concat('solutionRemovePaper/') + solution.solutionId, { headers: headers })
            .map(function (response) {
            return response.json();
        })
            .catch(function (error) { return Observable.throw(error); });
    };
    SolutionService.prototype.successValidationShowResult = function (validation, file) {
        this.setSolutionFile(file);
        this.successValidation.emit(validation);
    };
    SolutionService.prototype.successValidationHideResult = function () {
        this.successValidationDeleteSource.next();
    };
    SolutionService.prototype.worseSolutionsShow = function (solutions) {
        this.worseSolutions.emit(solutions);
    };
    SolutionService.prototype.worseSolutionsHide = function () {
        this.worseSolutionsDeleteSource.next();
    };
    SolutionService.prototype.resultsInstanceShow = function (instanceId) {
        this.resultsInstance.emit(instanceId);
    };
    SolutionService.prototype.resultsAuthorShow = function (authorId) {
        this.resultsAuthor.emit(authorId);
    };
    SolutionService.prototype.resultsAuthorTechniqueShow = function (solutions) {
        this.resultsAuthorTechnique.emit(solutions);
    };
    SolutionService.prototype.setSolutionFile = function (file) {
        this.solutionFile = file;
    };
    SolutionService.prototype.saveFileSolution = function (solutionId) {
        var _this = this;
        this.xmlHttp = new XMLHttpRequest();
        return Observable.create(function (observer) {
            var headers = new Headers({ 'Content-Type': 'multipart/form-data' });
            _this.xmlHttp.onreadystatechange = function () {
                if (_this.xmlHttp.readyState === 4) {
                    if (_this.xmlHttp.status === 200) {
                        observer.next(_this.xmlHttp.response);
                        observer.complete();
                    }
                    else {
                        observer.error(_this.xmlHttp.response);
                    }
                }
            };
            var fd = new FormData();
            fd.append('solution', _this.solutionFile);
            _this.xmlHttp.open("POST", _this.hostUrl.concat('solutionFile/') + solutionId);
            _this.xmlHttp.setRequestHeader("enctype", "multipart/form-data");
            _this.xmlHttp.send(fd);
        });
    };
    SolutionService.prototype.updateSolutionPaper = function (solution) {
        var body = JSON.stringify(solution);
        var token = sessionStorage.getItem('token')
            ? '?token=' + sessionStorage.getItem('token')
            : '';
        var headers = new Headers({ 'Content-Type': 'application/json' });
        return this.http.patch(this.hostUrl.concat('solutionAddPaper/') + solution.solutionId, body, { headers: headers })
            .map(function (response) {
            return response.json();
        })
            .catch(function (error) { return Observable.throw(error); });
    };
    SolutionService.prototype.deleteSolution = function (solution) {
        return this.http.delete(this.hostUrl.concat('solution/') + solution.solutionId)
            .map(function (response) {
            return response.json();
        })
            .catch(function (error) {
            return Observable.throw(error.json());
        });
    };
    SolutionService.prototype.deleteSolutions = function (solutions) {
        for (var _i = 0, solutions_5 = solutions; _i < solutions_5.length; _i++) {
            var s = solutions_5[_i];
            this.deleteSolution(s)
                .subscribe(function () { }, function (error) { return console.error(error); });
        }
        if (solutions.length = 1) {
            this.flashMessageService.showMessage('Solution was deleted.', 'alert-success');
        }
        else {
            this.flashMessageService.showMessage('Solutions were deleted.', 'alert-success');
        }
    };
    SolutionService.decorators = [
        { type: Injectable },
    ];
    /** @nocollapse */
    SolutionService.ctorParameters = [
        { type: Http, },
        { type: FlashMessageService, },
    ];
    return SolutionService;
}());
