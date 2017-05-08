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

    /**
     * Send request to server to save new file.
     *
     * @param file
     * @returns {response} response with status 200 if success, other way error
     */
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

            this.xmlHttp.open("POST", this.hostUrl.concat('server/file'));
            this.xmlHttp.setRequestHeader("enctype", "multipart/form-data");
            this.xmlHttp.send(fd);
        });
    }

    /**
     * Send request to server to update new file.
     *
     * @param file
     * @returns {response} response with status 200 if success, other way error
     */
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

            this.xmlHttp.open("POST", this.hostUrl.concat('server/fileUpdate/') + file.id);
            this.xmlHttp.setRequestHeader("enctype", "multipart/form-data");
            this.xmlHttp.send(fd);
        });
    }

    /**
     * Send request to server to delete file by id.
     *
     * @param id
     * @returns {Observable<Response>} response contains file if success, other way error
     */
    deleteFile(id: string){
        return this.http.delete(
            this.hostUrl.concat('server/delete/') + id)
            .map((response: Response) => {
                return response.json();
            })
            .catch((error: Response) => {
                return Observable.throw(error);
            });
    }
}