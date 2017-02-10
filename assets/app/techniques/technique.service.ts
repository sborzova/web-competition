import { Injectable } from "@angular/core";
import { Http } from "@angular/http";
import { SuccessService } from "../messages/successes/success.service";
import { ErrorService } from "../messages/errors/error.service";

@Injectable()
export class TechniqueService {
    private hostUrl: string;

    constructor(private http: Http,
                private successService: SuccessService,
                private errorService: ErrorService) {

        const routeModule = require("../app.routing");
        this.hostUrl = routeModule.hostUrl;
    }
}