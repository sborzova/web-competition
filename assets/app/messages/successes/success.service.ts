import { EventEmitter, Injectable } from "@angular/core";
import { Subject } from "rxjs";
import { Success } from "./success.model";

@Injectable()
export class SuccessService {
    successOccurred = new EventEmitter<Success>();

    handleSuccess(success: any) {
        const successData = new Success("", success.obj.message);
        this.successOccurred.emit(successData);
    }

    // Observable string sources
    private successDeleteSource = new Subject();

    // Observable string streams
    successDelete$ = this.successDeleteSource.asObservable();

    // Service message commands
    deleteSuccess() {
        this.successDeleteSource.next();
    }

}