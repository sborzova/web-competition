import { Injectable, EventEmitter } from "@angular/core";
import { Headers, Http, Response } from "@angular/http";
import { Observable, Subject } from "rxjs";

import { SolutionCreate } from "./solution-create.model";
import { Solution } from "../auth/solution.model";
import { Validation } from "./validation.model";
import { Paper } from "./paper.model";
import { FlashMessagesService } from "angular2-flash-messages";
import { SolutionPaper } from "../auth/solution-paper.model";
import { SolutionFindBetter } from "./solution-find-better.model";

@Injectable()
export class SolutionService {
    private hostUrl : string;
    private xmlHttp;
    private solutionFile;
    successValidation = new EventEmitter<Validation>();
    private successValidationDeleteSource = new Subject();
    successValidationDelete$ = this.successValidationDeleteSource.asObservable();

    constructor(private http: Http,
                private flashMessagesService: FlashMessagesService){
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
                                                this.flashMessagesService.grayOut(true);
                                                this.flashMessagesService.show('Solution was uploaded.', { cssClass: 'alert-success', timeout:1700 } );
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
                                    this.flashMessagesService.grayOut(true);
                                    this.flashMessagesService.show('Solution was uploaded.', { cssClass: 'alert-success', timeout:1700 } );
                                    this.successValidationHideResult();
                                },
                                error => console.error(JSON.parse(error))
                        );
                    },
                    error => console.error(error)
                );
        }
    }

    getBetterSolutionWithTechnique(solution: SolutionFindBetter){
        const body = JSON.stringify(solution);
        const token = sessionStorage.getItem('token')
            ? '?token=' + sessionStorage.getItem('token')
            : '';
        const headers = new Headers({'Content-Type': 'application/json'});
        return this.http.post(this.hostUrl.concat('betterSolutions') + token, body, {headers: headers})
            .map((response: Response) => {
                return response.json().obj;
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
                        solution.paper,
                        solution._id,
                        false)
                    );
                }
                return transformedSolutions;
            })
            .catch((error: Response) => Observable.throw(error.json()));
    }

    deletePaperFromSolution(solution: Solution){
        const headers = new Headers({'Content-Type': 'application/json'});
        return this.http.patch(this.hostUrl.concat('solutionRemovePaper/') + solution.solutionId, {headers: headers})
            .map((response: Response) => {
                return response.json();
            })
            .catch((error: Response) => Observable.throw(error.json()));
    }

    successValidationShowResult(validation: Validation, file: any){
        this.setSolutionFile(file);
        this.successValidation.emit(validation);
    }

    successValidationHideResult(){
        this.successValidationDeleteSource.next();
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
            .catch((error: Response) => Observable.throw(error.json()));
    }
}