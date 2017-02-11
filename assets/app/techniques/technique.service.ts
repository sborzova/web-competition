import { Injectable } from "@angular/core";
import { Http, Headers, Response } from "@angular/http";
import { SuccessService } from "../messages/successes/success.service";
import { ErrorService } from "../messages/errors/error.service";
import { Technique } from "./technique.model";
import { Observable } from "rxjs";

@Injectable()
export class TechniqueService {
    private hostUrl: string;
    private techniques: Technique[] = [];

    constructor(private http: Http,
                private successService: SuccessService,
                private errorService: ErrorService) {

        const routeModule = require("../app.routing");
        this.hostUrl = routeModule.hostUrl;
    }

    saveTechnique(technique: Technique){
        const body = JSON.stringify(technique);
        const headers = new Headers({'Content-Type': 'application/json'});
        return this.http.post(this.hostUrl.concat('technique'), body, {headers: headers})
            .map((response: Response) => {
                this.successService.handleSuccess(response.json());
                return response.json();
            })
            .catch((error: Response) => {
                if (error.status === 422){
                    this.errorService.handleError(error.json());
                }
                return Observable.throw(error.json())
            });
    }

    getTechniques(){
        return this.http.get(this.hostUrl.concat('techniques'))
            .map((response: Response) => {
                const techniques = response.json().obj;
                let transformedTechniques: Technique[] = [];
                for (let technique of techniques) {
                    transformedTechniques.push(new Technique(
                        technique.name)
                    );
                }
                this.techniques = techniques;
                return transformedTechniques;
            })
            .catch((error: Response) => Observable.throw(error.json()));
    }

    deleteTechnique(technique: Technique){
        this.techniques.splice(this.techniques.indexOf(technique), 1);
        return this.http.delete(
            this.hostUrl.concat('technique/') + technique.techniqueId)
            .map((response: Response) => {
                this.successService.handleSuccess(response.json());
                return response.json();
            })
            .catch((error: Response) => {
                this.errorService.handleError(error.json());
                return Observable.throw(error.json());
            });
    }

    updateTechnique(technique: Technique){
        const body = JSON.stringify(technique);
        const headers = new Headers({'Content-Type': 'application/json'});
        return this.http.patch(
            this.hostUrl.concat('technique/') + technique.techniqueId + body, {headers: headers})
            .map((response: Response) => response.json())
            .catch((error: Response) => {
                this.errorService.handleError(error.json());
                return Observable.throw(error.json());
            });
    }
}