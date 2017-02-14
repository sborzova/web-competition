import { EventEmitter, Injectable } from "@angular/core";
import { Subject } from "rxjs";

import { Error } from "./error.model";

@Injectable()
export class ErrorService {
    errorOccurred = new EventEmitter<Error>();
    private errorDeleteSource = new Subject();
    errorDelete$ = this.errorDeleteSource.asObservable();

    handleError(error: any) {
        const errorData = new Error(error.title, error.error.message);
        this.errorOccurred.emit(errorData);
    }

    deleteError() {
        this.errorDeleteSource.next();
    }

}