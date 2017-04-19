import { Injectable, EventEmitter } from "@angular/core";
import { Headers, Http, Response } from "@angular/http";
import { Observable, Subject } from "rxjs";

import { SolutionCreate } from "../validation/solution-create.model";
import { Validation } from "../validation/validation.model";
import { SolutionPaper } from "../user-solutions/solution-paper.model";
import { FlashMessageService } from "../flash-message/flash-messages.service";
import { Author } from "./author.model";
import { Instance } from "./instance.model";
import {Paper} from "./paper.model";
import {Solution} from "./solution.model";
import {FileService} from "./file.service";
import {PaperService} from "./paper.service";
import {FileModel} from "../instances/file.model";
import {Visibility} from "../results/visibility.model";

@Injectable()
export class SolutionService {
    private hostUrl : string;
    private xmlHttp;
    private solutionFile;
    successValidation = new EventEmitter<Validation>();
    private successValidationDeleteSource = new Subject();
    private solutionDeleteSource = new Subject<Solution>();
    private solutionSetVisibleSource = new Subject<Solution>();
    private solutionSetNotVisibleSource = new Subject<Solution>();

    successValidationDelete$ = this.successValidationDeleteSource.asObservable();
    solutionDelete$ = this.solutionDeleteSource.asObservable();
    solutionSetVisible$ = this.solutionSetVisibleSource.asObservable();
    solutionSetNotVisible$ = this.solutionSetNotVisibleSource.asObservable();

    constructor(private http: Http,
                private paperService: PaperService,
                private flashMessageService: FlashMessageService,
                private fileService: FileService){
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

    uploadSolution(solution: SolutionCreate,
                   paperCitation: string,
                   paperUrl: string){

        if (paperCitation || paperUrl){
            this.savePaper(new Paper(paperCitation, paperUrl))
                .subscribe(
                    paperId => {
                        solution.paperId = paperId;
                        this.saveSolutionAndFile(solution);
                    },
                    error => {
                        console.error(error);
                    }
                );
        } else {
            this.saveSolutionAndFile(solution);
        }
    }

    saveSolutionAndFile(solution: SolutionCreate){
        let idFile;
        this.fileService.saveFile(this.solutionFile)
            .subscribe(
                file => {
                    idFile = JSON.parse(file).id;
                    solution.fileId = idFile;
                    this.saveSolution(solution)
                        .subscribe(
                            data => {
                                this.flashMessageService.showMessage('Solution was uploaded.', 'success' );
                                this.successValidationHideResult();
                            },
                            error => {
                                this.paperService.deletePaper(solution.paperId);
                                this.fileService.deleteFile(solution.fileId);
                                console.error(error)
                            }
                        )
                },
                error => {
                    this.paperService.deletePaper(solution.paperId);
                    console.error(error)
                }
            )
    }

    findDuplicateSolution(solution: Solution){
        const body = JSON.stringify(solution);
        const token = sessionStorage.getItem('token')
            ? '?token=' + sessionStorage.getItem('token')
            : '';
        const headers = new Headers({'Content-Type': 'application/json'});
        return this.http.post(this.hostUrl.concat('duplicateSolution') + token, body, {headers: headers})
            .map((response: Response) => {
                if (response.json().obj){
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
                            solution.submissionTime,
                            solution.visible,
                            null,
                            solution.instance,
                            solution.paper ? new Paper(
                                solution.paper.citation,
                                solution.paper.url,
                                solution.paper._id
                            ) : null,
                            null,
                            solution._id,
                            false);
                }
                else {
                    return null;
                }
            })
            .catch((error: Response) => Observable.throw(error));
    }

    savePaper(paper: Paper){
            const body = JSON.stringify(paper);
            const headers = new Headers({'Content-Type': 'application/json'});
            return this.http.post(this.hostUrl.concat('paper'), body, {headers: headers})
                .map((response: Response) => {
                    return response.json().obj.data._id;
                })
                .catch((error: Response) => Observable.throw(error));
    }

    saveSolution(solution: SolutionCreate){
        const body = JSON.stringify(solution);
        const token = sessionStorage.getItem('token')
            ? '?token=' + sessionStorage.getItem('token')
            : '';
        const headers = new Headers({'Content-Type': 'application/json'});
        return this.http.post(this.hostUrl.concat('solution') + token, body, {headers: headers})
            .map((response: Response) => {
                return response.json().obj.data._id;
            })
            .catch((error: Response) => {
                this.flashMessageService.showMessage('Invalid XML format.', 'danger' );
                return Observable.throw(error)
        });
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
                    solution.submissionTime,
                    solution.visible,
                    new FileModel(new Buffer(solution.data.content), solution.data._id),
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
                        solution.submissionTime,
                        solution.visible,
                        null,
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
                        solution.submissionTime,
                        solution.visible,
                        new FileModel(new Buffer(solution.data.content), solution.data._id),
                        new Instance(
                            solution.instance.name,
                            solution.instance._id,
                            solution.instance.order),
                        solution.paper,
                        new Author(
                            solution.user.firstName,
                            solution.user.lastName,
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
                        solution.submissionTime,
                        solution.visible,
                        new FileModel(new Buffer(solution.data.content), solution.data._id),
                        new Instance(
                            solution.instance.name,
                            solution.instance._id,
                            solution.instance.order),
                        solution.paper,
                        new Author(
                            solution.user.firstName,
                            solution.user.lastName,
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

    deleteSolutionObservable(solution: Solution){
        this.solutionDeleteSource.next(solution);
    }

    setVisibleObservable(solution: Solution){
        this.solutionSetVisibleSource.next(solution);
    }

    setNotVisibleObservable(solution: Solution){
        this.solutionSetNotVisibleSource.next(solution);
    }

    setSolutionFile(file: any){
        this.solutionFile = file;
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

    updateSolutionVisibility(solution: Solution){
        let visibility = new Visibility(solution.visible);
        const body = JSON.stringify(visibility);
        const token = sessionStorage.getItem('token')
            ? '?token=' + sessionStorage.getItem('token')
            : '';
        const headers = new Headers({'Content-Type': 'application/json'});
        return this.http.patch(this.hostUrl.concat('solutionVisibility/') +  solution.solutionId, body, {headers: headers})
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
}