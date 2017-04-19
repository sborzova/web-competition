import {Injectable} from "@angular/core";
import {Http, Response} from "@angular/http";
import {Observable} from "rxjs/Observable";
import {FileModel} from "../instances/file.model";

@Injectable()
export class FileService {
    private hostUrl: string;
    private xmlHttp;

    constructor(private http: Http) {

        const routeModule = require("../app.routing");
        this.hostUrl = routeModule.hostUrl;
    }

    saveFile(file: Buffer){
        this.xmlHttp = new XMLHttpRequest();
        return Observable.create(observer => {
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
            fd.append('file', file);

            this.xmlHttp.open("POST", this.hostUrl.concat('file'));
            this.xmlHttp.setRequestHeader("enctype", "multipart/form-data");
            this.xmlHttp.send(fd);
        });
    }

    updateFile(file: FileModel){
        this.xmlHttp = new XMLHttpRequest();
        return Observable.create(observer => {
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
            fd.append('file', file.content);

            this.xmlHttp.open("POST", this.hostUrl.concat('fileUpdate/') + file.id);
            this.xmlHttp.setRequestHeader("enctype", "multipart/form-data");
            this.xmlHttp.send(fd);
        });
    }

    deleteFile(id: string){
        return this.http.delete(
            this.hostUrl.concat('delete/') + id)
            .map((response: Response) => {
                return response.json();
            })
            .catch((error: Response) => {
                return Observable.throw(error);
            });
    }
}