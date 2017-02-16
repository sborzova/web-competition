import { Injectable } from "@angular/core";
import { Headers, Http, Response } from "@angular/http";
import { Observable } from "rxjs";

@Injectable()
export class ValidationService {
    private url = 'http://demo.unitime.org/SolverValidatorMockup/';
    private username = 'validator';
    private password = 'solver';

    constructor(private http: Http){}

    validate(file: any){
        const headers = new Headers();
        headers.append('Authorization', 'Basic ' +  this.username + ':' + this.password);
        headers.append('Content-Type', 'application/xml;charset=UTF-8');
        return this.http.post(this.url,{headers: headers})
            .map((response: Response) => {
                const result = response.json();

                return;
            })
            .catch((error: Response) =>
                Observable.throw(error.json()));
    }

}