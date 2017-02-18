import { Injectable } from "@angular/core";
import { Headers, Http, Response } from "@angular/http";
import { Observable } from "rxjs";
import {SolutionCreate} from "./solution-create.model";
import {Solution} from "../auth/solution.model";
import {Technique} from "./technique.model";

@Injectable()
export class SolutionService {
    private hostUrl : string;
    private validatorUrl : string = 'https://demo.unitime.org/SolverValidatorMockup/test';
    private username : string = 'validator';
    private password :string = 'solver';

    constructor(private http: Http){
        const routeModule = require("../app.routing");
        this.hostUrl = routeModule.hostUrl;
    }

    validate(file: any){
        const headers = new Headers();
        headers.append('Authorization', 'Basic ' +  btoa(this.username + ':' + this.password));
        headers.append('Content-Type', 'application/xml;charset=UTF-8');
        return this.http.post(this.validatorUrl, file,  {headers: headers})
            .map((response: Response) => {
                const result = response.json();
                return response.json();

            })
            .catch((error: Response) =>
                Observable.throw(error.json()));
    }

    saveSolution(solution: SolutionCreate){
        const body = JSON.stringify(solution);
        const token = localStorage.getItem('token')
            ? '?token=' + localStorage.getItem('token')
            : '';
        const headers = new Headers({'Content-Type': 'application/json'});
        return this.http.post(this.hostUrl.concat('solution') + token, body, {headers: headers})
            .map((response: Response) => {
                // this.successService.handleSuccess(response.json());
                return response.json();
            })
            .catch((error: Response) => Observable.throw(error.json()));
    }

    getSolutionsByLoggedUser(){
        const token = localStorage.getItem('token')
            ? '?token=' + localStorage.getItem('token')
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
                        solution.info,
                        solution.postDate,
                        solution.data,
                        solution.instance,
                        solution.technique,
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
                // this.successService.handleSuccess(response.json());
                return response.json();
            })
            .catch((error: Response) => Observable.throw(error.json()));
    }
}