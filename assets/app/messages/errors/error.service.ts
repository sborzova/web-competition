import {EventEmitter, Injectable} from "@angular/core";
import {Subject} from "rxjs";

import { Error } from "./error.model";

@Injectable()
export class ErrorService {
    errorOccurred = new EventEmitter<Error>();

    handleError(error: any) {
        const errorData = new Error(error.title, error.error.message);
        this.errorOccurred.emit(errorData);
    }

    // Observable string sources
    private errorDeleteSource = new Subject();

    // Observable string streams
    errorDelete$ = this.errorDeleteSource.asObservable();

    // Service message commands
    deleteError() {
        this.errorDeleteSource.next();
    }

}