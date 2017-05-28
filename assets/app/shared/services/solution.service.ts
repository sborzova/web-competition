import {Injectable, EventEmitter} from "@angular/core";
import {Headers, Http, Response} from "@angular/http";
import {Observable, Subject} from "rxjs";

import {SolutionCreate} from "../../validation/solution-create.model";
import {Validation} from "../../validation/validation.model";
import {SolutionPaper} from "../../user-solutions/solution-paper.model";
import {FlashMessageService} from "../../flash-message/flash-messages.service";
import {Author} from "../models/author.model";
import {Instance} from "../models/instance.model";
import {Paper} from "../models/paper.model";
import {Solution} from "../models/solution.model";
import {FileService} from "./file.service";
import {PaperService} from "./paper.service";
import {FileModel} from "../../instances/file.model";
import {Visibility} from "../../results/visibility.model";
import {Technique} from "../../results/technique.model";

@Injectable()
export class SolutionService {
    private hostUrl : string;
    private xmlHttp;
    private solutionFile;
    private successValidationDeleteSource = new Subject();
    private solutionDeleteSource = new Subject<Solution>();
    private solutionEditTechniqueSource = new Subject<Solution>();
    private solutionSetVisibleSource = new Subject<Solution>();
    private solutionSetNotVisibleSource = new Subject<Solution>();
    successValidation = new EventEmitter<Validation>();
    successValidationDelete$ = this.successValidationDeleteSource.asObservable();
    solutionDelete$ = this.solutionDeleteSource.asObservable();
    solutionEditTechnique$ = this.solutionEditTechniqueSource.asObservable();
    solutionSetVisible$ = this.solutionSetVisibleSource.asObservable();
    solutionSetNotVisible$ = this.solutionSetNotVisibleSource.asObservable();

    constructor(private http: Http,
                private paperService: PaperService,
                private flashMessageService: FlashMessageService,
                private fileService: FileService){
        const routeModule = require("../../app.routing");
        this.hostUrl = routeModule.hostUrl;
    }

    /**
     *  Send request to server to validate solution file.
     *
     * @param fd - FormData contains solution file
     * @returns {Observer<Response>} response contains validation result, other way error
     */
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

            this.xmlHttp.open("POST", this.hostUrl.concat('server/validator/'));
            this.xmlHttp.setRequestHeader("enctype", "multipart/form-data");
            this.xmlHttp.send(fd);
        });
    }

    /**
     * Save paper when paper citation is not null.
     * Call function to save solution with validation info and solution file.
     *
     * @param solution
     * @param paperCitation
     * @param paperUrl
     */
    uploadSolution(solution: SolutionCreate,
                   paperCitation: string,
                   paperUrl: string){

        if (paperCitation){
            this.paperService.savePaper(new Paper(paperCitation, paperUrl))
                .subscribe(
                    paper => {
                        solution.paperId = paper.paperId;
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

    /**
     * Save solution's file and solution with validation info.
     *
     * @param solution
     */
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

    /**
     * Send request to server to find duplicate solution.
     *
     * @param solution
     * @returns {Observable<Response>} if success, response contains or does not contain duplicate solution, other way response contains error
     */
    findDuplicateSolution(solution: Solution){
        return this.http.post(
            this.hostUrl.concat('server/duplicateSolution') + this.getToken(), this.stringifyObject(solution), {headers: this.getHeaders()})
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
            .catch((error: Response) => {
                this.flashMessageService.showMessage('Invalid XML format.', 'danger' );
                return Observable.throw(error)
            });
    }

    /**
     * Send request to server to save new solution.
     *
     * @param solution
     * @returns {Observable<Response>} response contains solution if success, other way error
     */
    saveSolution(solution: SolutionCreate){
        return this.http.post(
            this.hostUrl.concat('server/solution') + this.getToken(), this.stringifyObject(solution), {headers: this.getHeaders()})
            .map((response: Response) => {
                return response.json().obj.data._id;
            })
            .catch((error: Response) => {
                 return Observable.throw(error)
            });
    }

    /**
     * Send request to server to get solution by id.
     *
     * @param id
     * @returns {Observable<Response>} response contains solution if success, other way error
     */
    getSolution(id: string){
        return this.http.get(this.hostUrl.concat('server/solution/' + id))
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

    /**
     * Send request to server to get all solutions by logged in user.
     *
     * @returns {Observable<Response>} response contains solutions if success, other way error
     */
    getSolutionsByLoggedUser(){
        return this.http.get(
            this.hostUrl.concat('server/solutionsByLoggedUser') + this.getToken(), {headers: this.getHeaders()})
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
                        new Instance(solution.instance.name),
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

    /**
     * Send request to server to get all solutions that contains instances's id.
     *
     * @param instanceId
     * @returns {Observable<Response>} response contains solutions if success, other way error
     */
    getSolutionsByInstance(instanceId: string){
        return this.http.get(
            this.hostUrl.concat('server/solutionsByInstance/') + instanceId)
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

    /**
     * Send request to server to delete paper from solution.
     *
     * @param solution
     * @returns {Observable<Response>} response contains solution if success, other way error
     */
    deletePaperFromSolution(solution: Solution){
        return this.http.patch(
            this.hostUrl.concat('server/solutionRemovePaper/') + solution.solutionId, {headers: this.getHeaders()})
            .map((response: Response) => {
                return response.json();
            })
            .catch((error: Response) => Observable.throw(error));
    }

    /**
     * Send request to server to update solution's paper.
     *
     * @param solution - solution with paper
     * @returns {Observable<Response>} response contains solutin if success, other way error
     */
    updateSolutionPaper(solution: SolutionPaper){
        return this.http.patch(this.hostUrl.concat('server/solutionAddPaper/') +  solution.solutionId, this.stringifyObject(solution), {headers: this.getHeaders()})
            .map((response: Response) => {
                return response.json();
            })
            .catch((error: Response) => Observable.throw(error));
    }

    /**
     * Send request to server to update visibility of solution.
     *
     * @param solution
     * @returns {Observable<Response>} response contains solution if success, other way error
     */
    updateSolutionVisibility(solution: Solution){
        let visibility = new Visibility(solution.visible);
        return this.http.patch(
            this.hostUrl.concat('server/admin/solutionVisibility/') +  solution.solutionId + this.getToken(), this.stringifyObject(visibility), {headers: this.getHeaders()})
            .map((response: Response) => {
                return response.json();
            })
            .catch((error: Response) => Observable.throw(error));
    }

    /**
     * Send request to server to update technique of solution.
     *
     * @param solution
     * @returns {Observable<Response>} response contains solution if success, other way error
     */
    updateSolutionTechnique(solution: Solution){
        let technique = new Technique(solution.technique);
        return this.http.patch(
            this.hostUrl.concat('server/admin/solutionTechnique/') +  solution.solutionId + this.getToken(),
                this.stringifyObject(technique), {headers: this.getHeaders()})
            .map((response: Response) => {
                return response.json();
            })
            .catch((error: Response) => Observable.throw(error));
    }

    /**
     * Send request to server to delete solution by id.
     *
     * @param solution
     * @returns {Observable<Response>} response contains solution if success, other way error
     */
    deleteSolution(solution: Solution){
        return this.http.delete(
            this.hostUrl.concat('server/solution/') + solution.solutionId)
            .map((response: Response) => {
                return response.json();
            })
            .catch((error: Response) => {
                return Observable.throw(error.json());
            });
    }

    /**
     * Get token from session storage.
     *
     * @returns {string} token
     */
    getToken(){
        return sessionStorage.getItem('token')
            ? '?token=' + sessionStorage.getItem('token')
            : '';
    }

    /**
     * Return headers with set content-type.
     *
     * @returns {Headers} headers
     */
    getHeaders (){
        return new Headers({'Content-Type': 'application/json'});
    }

    /**
     * Stringify object.
     *
     * @param object
     * @returns {string} stringified object
     */
    stringifyObject(object){
        return JSON.stringify(object);
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

    editSolutionTechniqueObservable(solution: Solution){
        this.solutionEditTechniqueSource.next(solution);
    }

    setVisibleObservable(solution: Solution){
        this.solutionSetVisibleSource.next(solution);
    }

    setNotVisibleObservable(solution: Solution){
        this.solutionSetNotVisibleSource.next(solution);
    }

    setSolutionFile(file: any){
        console.log(file);
        this.solutionFile = file;
        console.log('aaa');
        console.log(this.solutionFile);
    }

    getSolutionFile(){
        return this.solutionFile;
    }
}