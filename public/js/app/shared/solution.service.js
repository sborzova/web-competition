import { Injectable, EventEmitter } from "@angular/core";
import { Headers, Http } from "@angular/http";
import { Observable, Subject } from "rxjs";
import { FlashMessageService } from "../flash-message/flash-messages.service";
import { Author } from "./author.model";
import { Instance } from "./instance.model";
import { Paper } from "./paper.model";
import { Solution } from "./solution.model";
import { FileService } from "./file.service";
import { PaperService } from "./paper.service";
import { FileModel } from "../instances/file.model";
import { Visibility } from "../results/visibility.model";
export var SolutionService = (function () {
    function SolutionService(http, paperService, flashMessageService, fileService) {
        this.http = http;
        this.paperService = paperService;
        this.flashMessageService = flashMessageService;
        this.fileService = fileService;
        this.successValidation = new EventEmitter();
        this.successValidationDeleteSource = new Subject();
        this.solutionDeleteSource = new Subject();
        this.solutionSetVisibleSource = new Subject();
        this.solutionSetNotVisibleSource = new Subject();
        this.successValidationDelete$ = this.successValidationDeleteSource.asObservable();
        this.solutionDelete$ = this.solutionDeleteSource.asObservable();
        this.solutionSetVisible$ = this.solutionSetVisibleSource.asObservable();
        this.solutionSetNotVisible$ = this.solutionSetNotVisibleSource.asObservable();
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
            _this.xmlHttp.open("POST", _this.hostUrl.concat('server/validator/'));
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
                _this.saveSolutionAndFile(solution);
            }, function (error) {
                console.error(error);
            });
        }
        else {
            this.saveSolutionAndFile(solution);
        }
    };
    SolutionService.prototype.saveSolutionAndFile = function (solution) {
        var _this = this;
        var idFile;
        this.fileService.saveFile(this.solutionFile)
            .subscribe(function (file) {
            idFile = JSON.parse(file).id;
            solution.fileId = idFile;
            _this.saveSolution(solution)
                .subscribe(function (data) {
                _this.flashMessageService.showMessage('Solution was uploaded.', 'success');
                _this.successValidationHideResult();
            }, function (error) {
                _this.paperService.deletePaper(solution.paperId);
                _this.fileService.deleteFile(solution.fileId);
                console.error(error);
            });
        }, function (error) {
            _this.paperService.deletePaper(solution.paperId);
            console.error(error);
        });
    };
    SolutionService.prototype.findDuplicateSolution = function (solution) {
        var _this = this;
        var body = JSON.stringify(solution);
        var token = sessionStorage.getItem('token')
            ? '?token=' + sessionStorage.getItem('token')
            : '';
        var headers = new Headers({ 'Content-Type': 'application/json' });
        return this.http.post(this.hostUrl.concat('server/duplicateSolution') + token, body, { headers: headers })
            .map(function (response) {
            if (response.json().obj) {
                var solution_1 = response.json().obj;
                return new Solution(solution_1.unassigned, solution_1.total, solution_1.sc, solution_1.time, solution_1.room, solution_1.distr, solution_1.technique, solution_1.info, solution_1.submissionTime, solution_1.visible, null, solution_1.instance, solution_1.paper ? new Paper(solution_1.paper.citation, solution_1.paper.url, solution_1.paper._id) : null, null, solution_1._id, false);
            }
            else {
                return null;
            }
        })
            .catch(function (error) {
            _this.flashMessageService.showMessage('Invalid XML format.', 'danger');
            return Observable.throw(error);
        });
    };
    SolutionService.prototype.savePaper = function (paper) {
        var body = JSON.stringify(paper);
        var headers = new Headers({ 'Content-Type': 'application/json' });
        return this.http.post(this.hostUrl.concat('server/paper'), body, { headers: headers })
            .map(function (response) {
            return response.json().obj.data._id;
        })
            .catch(function (error) { return Observable.throw(error); });
    };
    SolutionService.prototype.saveSolution = function (solution) {
        var body = JSON.stringify(solution);
        var token = sessionStorage.getItem('token')
            ? '?token=' + sessionStorage.getItem('token')
            : '';
        var headers = new Headers({ 'Content-Type': 'application/json' });
        return this.http.post(this.hostUrl.concat('server/solution') + token, body, { headers: headers })
            .map(function (response) {
            return response.json().obj.data._id;
        })
            .catch(function (error) {
            return Observable.throw(error);
        });
    };
    SolutionService.prototype.getSolution = function (solutionId) {
        return this.http.get(this.hostUrl.concat('server/solution/' + solutionId))
            .map(function (response) {
            var solution = response.json().obj;
            return new Solution(solution.unassigned, solution.total, solution.sc, solution.time, solution.room, solution.distr, solution.technique, solution.info, solution.submissionTime, solution.visible, new FileModel(new Buffer(solution.data.content), solution.data._id), solution.instance, solution.paper, null, solution._id, false);
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
        return this.http.get(this.hostUrl.concat('server/solutionsByLoggedUser') + token, { headers: headers })
            .map(function (response) {
            var solutions = response.json().obj;
            var transformedSolutions = [];
            for (var _i = 0, solutions_1 = solutions; _i < solutions_1.length; _i++) {
                var solution = solutions_1[_i];
                transformedSolutions.push(new Solution(solution.unassigned, solution.total, solution.sc, solution.time, solution.room, solution.distr, solution.technique, solution.info, solution.submissionTime, solution.visible, null, solution.instance, solution.paper ? new Paper(solution.paper.citation, solution.paper.url, solution.paper._id) : null, null, solution._id, false));
            }
            return transformedSolutions;
        })
            .catch(function (error) { return Observable.throw(error); });
    };
    SolutionService.prototype.getSolutionsByInstance = function (instanceId) {
        return this.http.get(this.hostUrl.concat('server/solutionsByInstance/') + instanceId)
            .map(function (response) {
            var solutions = response.json().obj;
            var transformedSolutions = [];
            for (var _i = 0, solutions_2 = solutions; _i < solutions_2.length; _i++) {
                var solution = solutions_2[_i];
                transformedSolutions.push(new Solution(solution.unassigned, solution.total, solution.sc, solution.time, solution.room, solution.distr, solution.technique, solution.info, solution.submissionTime, solution.visible, null, new Instance(solution.instance.name, solution.instance._id, solution.instance.order), solution.paper, new Author(solution.user.firstName, solution.user.lastName, solution.user._id), solution._id));
            }
            return transformedSolutions;
        })
            .catch(function (error) { return Observable.throw(error); });
    };
    // getSolutionsByUser(userId: string){
    //     return this.http.get(this.hostUrl.concat('server/solutionsByUser/') + userId)
    //         .map((response: Response) => {
    //             const solutions = response.json().obj;
    //             let transformedSolutions: Solution[] = [];
    //             for (let solution of solutions) {
    //                 transformedSolutions.push(new Solution(
    //                     solution.unassigned,
    //                     solution.total,
    //                     solution.sc,
    //                     solution.time,
    //                     solution.room,
    //                     solution.distr,
    //                     solution.technique,
    //                     solution.info,
    //                     solution.submissionTime,
    //                     solution.visible,
    //                     new FileModel(new Buffer(solution.data.content), solution.data._id),
    //                     new Instance(
    //                         solution.instance.name,
    //                         solution.instance._id,
    //                         solution.instance.order),
    //                     solution.paper,
    //                     new Author(
    //                         solution.user.firstName,
    //                         solution.user.lastName,
    //                         solution.user._id),
    //                     solution._id)
    //                 );
    //             }
    //             return transformedSolutions;
    //         })
    //         .catch((error: Response) => Observable.throw(error));
    // }
    SolutionService.prototype.deletePaperFromSolution = function (solution) {
        var headers = new Headers({ 'Content-Type': 'application/json' });
        return this.http.patch(this.hostUrl.concat('server/solutionRemovePaper/') + solution.solutionId, { headers: headers })
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
    SolutionService.prototype.setVisibleObservable = function (solution) {
        this.solutionSetVisibleSource.next(solution);
    };
    SolutionService.prototype.setNotVisibleObservable = function (solution) {
        this.solutionSetNotVisibleSource.next(solution);
    };
    SolutionService.prototype.setSolutionFile = function (file) {
        this.solutionFile = file;
    };
    SolutionService.prototype.updateSolutionPaper = function (solution) {
        var body = JSON.stringify(solution);
        var token = sessionStorage.getItem('token')
            ? '?token=' + sessionStorage.getItem('token')
            : '';
        var headers = new Headers({ 'Content-Type': 'application/json' });
        return this.http.patch(this.hostUrl.concat('server/solutionAddPaper/') + solution.solutionId, body, { headers: headers })
            .map(function (response) {
            return response.json();
        })
            .catch(function (error) { return Observable.throw(error); });
    };
    SolutionService.prototype.updateSolutionVisibility = function (solution) {
        var visibility = new Visibility(solution.visible);
        var body = JSON.stringify(visibility);
        var token = sessionStorage.getItem('token')
            ? '?token=' + sessionStorage.getItem('token')
            : '';
        var headers = new Headers({ 'Content-Type': 'application/json' });
        return this.http.patch(this.hostUrl.concat('server/solutionVisibility/') + solution.solutionId, body, { headers: headers })
            .map(function (response) {
            return response.json();
        })
            .catch(function (error) { return Observable.throw(error); });
    };
    SolutionService.prototype.deleteSolution = function (solution) {
        return this.http.delete(this.hostUrl.concat('server/solution/') + solution.solutionId)
            .map(function (response) {
            return response.json();
        })
            .catch(function (error) {
            return Observable.throw(error.json());
        });
    };
    SolutionService.decorators = [
        { type: Injectable },
    ];
    /** @nocollapse */
    SolutionService.ctorParameters = [
        { type: Http, },
        { type: PaperService, },
        { type: FlashMessageService, },
        { type: FileService, },
    ];
    return SolutionService;
}());
