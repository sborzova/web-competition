import { Injectable, EventEmitter } from "@angular/core";
import { Headers, Http, Response } from "@angular/http";
import { Observable, Subject } from "rxjs";

import { SolutionCreate } from "../validation/solution-create.model";
import { Validation } from "../validation/validation.model";
import { SolutionPaper } from "../user-solutions/solution-paper.model";
import { SolutionFindWorse } from "../validation/solution-find-worse.model";
import { FlashMessageService } from "../flash-message/flash-messages.service";
import { Author } from "./author.model";
import { Instance } from "./instance.model";
import {Paper} from "./paper.model";
import {Solution} from "./solution.model";

@Injectable()
export class SolutionService {
    private hostUrl : string;
    private xmlHttp;
    private solutionFile;
    successValidation = new EventEmitter<Validation>();
    worseSolutions = new EventEmitter<Solution []>();
    private successValidationDeleteSource = new Subject();
    private worseSolutionsDeleteSource = new Subject();
    successValidationDelete$ = this.successValidationDeleteSource.asObservable();
    worseSolutionsDeleteSource$ = this.worseSolutionsDeleteSource.asObservable();

    constructor(private http: Http,
                private flashMessageService: FlashMessageService){
        const routeModule = require("../app.routing");
        this.hostUrl = routeModule.hostUrl;
    }

    validate(fd: FormData){
        this.xmlHttp = new XMLHttpRequest();
        return Observable.create(observer => {
            const headers = new Headers({'Content-Type': 'multipart/form-data'});

            this.xmlHttp.onreadystatechange = () => {
                if (this.xmlHttp.readyState === 4) {
                    if (this.xmlHttp.status === 200) {
                        observer.next(this.xmlHttp.response);
                        observer.complete();
                    } else {
                        observer.error(this.xmlHttp.response);
                    }
                }
            };

            this.xmlHttp.open("POST", this.hostUrl.concat('validator/'));
            this.xmlHttp.setRequestHeader("enctype", "multipart/form-data");
            this.xmlHttp.send(fd);
        });
    }

    saveSolution(solution: SolutionCreate,
                 paperCitation: string,
                 paperUrl: string){

        if (paperCitation || paperUrl){
            this.savePaper(new Paper(paperCitation, paperUrl))
                .subscribe(
                    paperId => {
                        solution.paperId = paperId;
                        this.saveSolutionWithoutFile(solution)
                            .subscribe(
                                solutionId => {
                                    this.saveFileSolution(solutionId)
                                        .subscribe(
                                            () => {
                                                this.flashMessageService.showMessage('Solution was uploaded.', 'success' );
                                                this.successValidationHideResult();
                                            },
                                            error => console.error(JSON.parse(error))
                                        );
                                },
                                error => console.error(error)
                            );
                    }
                );
        } else {
            this.saveSolutionWithoutFile(solution)
                .subscribe(
                    solutionId => {
                        this.saveFileSolution(solutionId)
                            .subscribe(
                                () => {
                                    this.flashMessageService.showMessage('Solution was uploaded.', 'success' );
                                    this.successValidationHideResult();
                                },
                                error => console.error(JSON.parse(error))
                        );
                    },
                    error => console.error(error)
                );
        }
    }

    getWorseSolutions(solution: SolutionFindWorse){
        const body = JSON.stringify(solution);
        const token = sessionStorage.getItem('token')
            ? '?token=' + sessionStorage.getItem('token')
            : '';
        const headers = new Headers({'Content-Type': 'application/json'});
        return this.http.post(this.hostUrl.concat('worseSolutions') + token, body, {headers: headers})
            .map((response: Response) => {
                const solutions = response.json().obj;
                let transformedSolutions: Solution[] = [];
                for (let solution of solutions) {
                    transformedSolutions.push(new Solution(
                        solution.unassigned,
                        solution.total,
                        solution.sc,
                        solution.time,
                        solution.room,
                        solution.distr,
                        solution.technique,
                        solution.info,
                        solution.postDate,
                        solution.data,
                        solution.instance,
                        solution.paper ? new Paper(
                            solution.paper.citation,
                            solution.paper.url,
                            solution.paper._id
                        ) : null,
                        null,
                        solution._id,
                        false)
                    );
                }
                return transformedSolutions;
            })
            .catch((error: Response) => Observable.throw(error.json()));
    }

    savePaper(paper: Paper){
            const body = JSON.stringify(paper);
            const headers = new Headers({'Content-Type': 'application/json'});
            return this.http.post(this.hostUrl.concat('paper'), body, {headers: headers})
                .map((response: Response) => {
                    return response.json().obj.data._id;
                })
                .catch((error: Response) => Observable.throw(error.json()));
    }

    saveSolutionWithoutFile(solution: SolutionCreate){
        const body = JSON.stringify(solution);
        const token = sessionStorage.getItem('token')
            ? '?token=' + sessionStorage.getItem('token')
            : '';
        const headers = new Headers({'Content-Type': 'application/json'});
        return this.http.post(this.hostUrl.concat('solution') + token, body, {headers: headers})
            .map((response: Response) => {
                return response.json().obj.data._id;
            })
            .catch((error: Response) => Observable.throw(error.json()));
    }

    getSolution(solutionId: string){
        return this.http.get(this.hostUrl.concat('solution/' + solutionId))
            .map((response: Response) => {
                const solution = response.json().obj;
                return new Solution(
                    solution.unassigned,
                    solution.total,
                    solution.sc,
                    solution.time,
                    solution.room,
                    solution.distr,
                    solution.technique,
                    solution.info,
                    solution.postDate,
                    solution.data,
                    solution.instance,
                    solution.paper,
                    null,
                    solution._id,
                    false
                );
            })
            .catch((error: Response) => {
                return Observable.throw(error);
            });
    }

    getSolutionsByLoggedUser(){
        const token = sessionStorage.getItem('token')
            ? '?token=' + sessionStorage.getItem('token')
            : '';
        const headers = new Headers({'Content-Type': 'application/json'});
        return this.http.get(this.hostUrl.concat('solutionsByLoggedUser') + token, {headers: headers})
            .map((response: Response) => {
                const solutions = response.json().obj;
                let transformedSolutions: Solution[] = [];
                for (let solution of solutions) {
                    transformedSolutions.push(new Solution(
                        solution.unassigned,
                        solution.total,
                        solution.sc,
                        solution.time,
                        solution.room,
                        solution.distr,
                        solution.technique,
                        solution.info,
                        solution.postDate,
                        solution.data,
                        solution.instance,
                        solution.paper ? new Paper(
                                solution.paper.citation,
                                solution.paper.url,
                                solution.paper._id
                                        ) : null,
                        null,
                        solution._id,
                        false)
                    );
                }
                return transformedSolutions;
            })
            .catch((error: Response) => Observable.throw(error));
    }

    getSolutionsByInstance(instanceId: string){
        return this.http.get(this.hostUrl.concat('solutionsByInstance/') + instanceId)
            .map((response: Response) => {
                const solutions = response.json().obj;
                let transformedSolutions: Solution[] = [];
                for (let solution of solutions) {
                    transformedSolutions.push(new Solution(
                        solution.unassigned,
                        solution.total,
                        solution.sc,
                        solution.time,
                        solution.room,
                        solution.distr,
                        solution.technique,
                        solution.info,
                        solution.postDate,
                        solution.data,
                        new Instance(
                            solution.instance.name,
                            solution.instance._id,
                            solution.instance.order),
                        solution.paper,
                        new Author(
                            solution.user.firstName.concat(" ").concat(solution.user.lastName),
                            solution.user._id),
                        solution._id)
                    );
                }
                return transformedSolutions;
            })
            .catch((error: Response) => Observable.throw(error));
    }

    getSolutionsByUser(userId: string){
        return this.http.get(this.hostUrl.concat('solutionsByUser/') + userId)
            .map((response: Response) => {
                const solutions = response.json().obj;
                let transformedSolutions: Solution[] = [];
                for (let solution of solutions) {
                    transformedSolutions.push(new Solution(
                        solution.unassigned,
                        solution.total,
                        solution.sc,
                        solution.time,
                        solution.room,
                        solution.distr,
                        solution.technique,
                        solution.info,
                        solution.postDate,
                        solution.data,
                        new Instance(
                            solution.instance.name,
                            solution.instance._id,
                            solution.instance.order),
                        solution.paper,
                        new Author(
                            solution.user.firstName.concat(" ").concat(solution.user.lastName),
                            solution.user._id),
                        solution._id)
                    );
                }
                return transformedSolutions;
            })
            .catch((error: Response) => Observable.throw(error));
    }

    deletePaperFromSolution(solution: Solution){
        const headers = new Headers({'Content-Type': 'application/json'});
        return this.http.patch(this.hostUrl.concat('solutionRemovePaper/') + solution.solutionId, {headers: headers})
            .map((response: Response) => {
                return response.json();
            })
            .catch((error: Response) => Observable.throw(error));
    }

    successValidationShowResult(validation: Validation, file: any){
        this.setSolutionFile(file);
        this.successValidation.emit(validation);
    }

    successValidationHideResult(){
        this.successValidationDeleteSource.next();
    }

    worseSolutionsShow(solutions: Solution[]){
        this.worseSolutions.emit(solutions);
    }

    worseSolutionsHide(){
        this.worseSolutionsDeleteSource.next();
    }

    setSolutionFile(file: any){
        this.solutionFile = file;
    }

    saveFileSolution(solutionId: string) {
        this.xmlHttp = new XMLHttpRequest();
        return Observable.create(observer => {
            const headers = new Headers({'Content-Type': 'multipart/form-data'});

            this.xmlHttp.onreadystatechange = () => {
                if (this.xmlHttp.readyState === 4) {
                    if (this.xmlHttp.status === 200) {
                        observer.next(this.xmlHttp.response);
                        observer.complete();
                    } else {
                        observer.error(this.xmlHttp.response);
                    }
                }
            };

            let fd = new FormData();
            fd.append('solution', this.solutionFile);

            this.xmlHttp.open("POST", this.hostUrl.concat('solutionFile/') + solutionId);
            this.xmlHttp.setRequestHeader("enctype", "multipart/form-data");
            this.xmlHttp.send(fd);
        });
    }

    updateSolutionPaper(solution: SolutionPaper){
        const body = JSON.stringify(solution);
        const token = sessionStorage.getItem('token')
            ? '?token=' + sessionStorage.getItem('token')
            : '';
        const headers = new Headers({'Content-Type': 'application/json'});
        return this.http.patch(this.hostUrl.concat('solutionAddPaper/') +  solution.solutionId, body, {headers: headers})
            .map((response: Response) => {
                return response.json();
            })
            .catch((error: Response) => Observable.throw(error));
    }

    deleteSolution(solution: Solution){
        return this.http.delete(
            this.hostUrl.concat('solution/') + solution.solutionId)
            .map((response: Response) => {
                return response.json();
            })
            .catch((error: Response) => {
                return Observable.throw(error.json());
            });
    }

    deleteSolutions(solutions: Solution[]) {
        for (let s of solutions){
            this.deleteSolution(s)
                .subscribe(
                    () => {},
                    error => console.error(error))
        }
        if (solutions.length == 1){
            this.flashMessageService.showMessage('Solution was deleted.', 'success');
        }else {
            this.flashMessageService.showMessage('Solutions were deleted.', 'success');
        }
    }
}