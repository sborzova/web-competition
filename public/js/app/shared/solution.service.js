import { Injectable, EventEmitter } from "@angular/core";
import { Headers, Http } from "@angular/http";
import { Observable, Subject } from "rxjs";
import { FlashMessageService } from "../flash-message/flash-messages.service";
import { Author } from "./author.model";
import { Instance } from "./instance.model";
import { Paper } from "./paper.model";
import { Solution } from "./solution.model";
export var SolutionService = (function () {
    function SolutionService(http, flashMessageService) {
        this.http = http;
        this.flashMessageService = flashMessageService;
        // private solutions: Solution[] = [];
        this.successValidation = new EventEmitter();
        this.successValidationDeleteSource = new Subject();
        this.solutionDeleteSource = new Subject();
        this.successValidationDelete$ = this.successValidationDeleteSource.asObservable();
        this.solutionDelete$ = this.solutionDeleteSource.asObservable();
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
    SolutionService.prototype.uploadSolution = function (solution, paperCitation, paperUrl) {
        var _this = this;
        if (paperCitation || paperUrl) {
            this.savePaper(new Paper(paperCitation, paperUrl))
                .subscribe(function (paperId) {
                solution.paperId = paperId;
                _this.saveSolution(solution);
            }, function (error) {
                console.error(error);
            });
        }
        else {
            this.saveSolution(solution);
        }
    };
    SolutionService.prototype.saveSolution = function (solution) {
        var _this = this;
        this.saveSolutionWithoutFile(solution)
            .subscribe(function (solutionId) {
            _this.saveFileSolution(solutionId)
                .subscribe(function () {
                _this.flashMessageService.showMessage('Solution was uploaded.', 'success');
                _this.successValidationHideResult();
            }, function (error) {
                console.error(error);
            });
        }, function (error) {
            console.error(error);
        });
    };
    SolutionService.prototype.findDuplicateSolution = function (solution) {
        var body = JSON.stringify(solution);
        var token = sessionStorage.getItem('token')
            ? '?token=' + sessionStorage.getItem('token')
            : '';
        var headers = new Headers({ 'Content-Type': 'application/json' });
        return this.http.post(this.hostUrl.concat('duplicateSolution') + token, body, { headers: headers })
            .map(function (response) {
            if (response.json().obj) {
                var solution_1 = response.json().obj;
                return new Solution(solution_1.unassigned, solution_1.total, solution_1.sc, solution_1.time, solution_1.room, solution_1.distr, solution_1.technique, solution_1.info, solution_1.submissionTime, solution_1.data, solution_1.instance, solution_1.paper ? new Paper(solution_1.paper.citation, solution_1.paper.url, solution_1.paper._id) : null, null, solution_1._id, false);
            }
            else {
                return null;
            }
        })
            .catch(function (error) { return Observable.throw(error); });
    };
    SolutionService.prototype.savePaper = function (paper) {
        var body = JSON.stringify(paper);
        var headers = new Headers({ 'Content-Type': 'application/json' });
        return this.http.post(this.hostUrl.concat('paper'), body, { headers: headers })
            .map(function (response) {
            return response.json().obj.data._id;
        })
            .catch(function (error) { return Observable.throw(error); });
    };
    SolutionService.prototype.saveSolutionWithoutFile = function (solution) {
        var _this = this;
        var body = JSON.stringify(solution);
        var token = sessionStorage.getItem('token')
            ? '?token=' + sessionStorage.getItem('token')
            : '';
        var headers = new Headers({ 'Content-Type': 'application/json' });
        return this.http.post(this.hostUrl.concat('solution') + token, body, { headers: headers })
            .map(function (response) {
            return response.json().obj.data._id;
        })
            .catch(function (error) {
            _this.flashMessageService.showMessage('Invalid XML format.', 'danger');
            return Observable.throw(error);
        });
    };
    SolutionService.prototype.getSolution = function (solutionId) {
        return this.http.get(this.hostUrl.concat('solution/' + solutionId))
            .map(function (response) {
            var solution = response.json().obj;
            return new Solution(solution.unassigned, solution.total, solution.sc, solution.time, solution.room, solution.distr, solution.technique, solution.info, solution.submissionTime, new Buffer(solution.data.data), solution.instance, solution.paper, null, solution._id, false);
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
            for (var _i = 0, solutions_1 = solutions; _i < solutions_1.length; _i++) {
                var solution = solutions_1[_i];
                transformedSolutions.push(new Solution(solution.unassigned, solution.total, solution.sc, solution.time, solution.room, solution.distr, solution.technique, solution.info, solution.submissionTime, new Buffer(solution.data.data), solution.instance, solution.paper ? new Paper(solution.paper.citation, solution.paper.url, solution.paper._id) : null, null, solution._id, false));
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
            for (var _i = 0, solutions_2 = solutions; _i < solutions_2.length; _i++) {
                var solution = solutions_2[_i];
                transformedSolutions.push(new Solution(solution.unassigned, solution.total, solution.sc, solution.time, solution.room, solution.distr, solution.technique, solution.info, solution.submissionTime, new Buffer(solution.data.data), new Instance(solution.instance.name, solution.instance._id, solution.instance.order), solution.paper, new Author(solution.user.firstName, solution.user.lastName, solution.user._id), solution._id));
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
            for (var _i = 0, solutions_3 = solutions; _i < solutions_3.length; _i++) {
                var solution = solutions_3[_i];
                transformedSolutions.push(new Solution(solution.unassigned, solution.total, solution.sc, solution.time, solution.room, solution.distr, solution.technique, solution.info, solution.submissionTime, new Buffer(solution.data.data), new Instance(solution.instance.name, solution.instance._id, solution.instance.order), solution.paper, new Author(solution.user.firstName, solution.user.lastName, solution.user._id), solution._id));
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
    SolutionService.prototype.deleteSolutionObservable = function (solution) {
        this.solutionDeleteSource.next(solution);
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
        for (var _i = 0, solutions_4 = solutions; _i < solutions_4.length; _i++) {
            var s = solutions_4[_i];
            this.deleteSolution(s)
                .subscribe(function () { }, function (error) { return console.error(error); });
        }
        if (solutions.length == 1) {
            this.flashMessageService.showMessage('Solution was deleted.', 'success');
        }
        else {
            this.flashMessageService.showMessage('Solutions were deleted.', 'success');
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
