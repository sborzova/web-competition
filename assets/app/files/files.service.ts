import { Injectable } from "@angular/core";
import { Http } from "@angular/http";

@Injectable()
export class FilesService {
    constructor(private http: Http) {
    }
}
