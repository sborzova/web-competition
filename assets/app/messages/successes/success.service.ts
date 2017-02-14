import { EventEmitter, Injectable } from "@angular/core";
import { Subject } from "rxjs";
import { Success } from "./success.model";

@Injectable()
export class SuccessService {
    successOccurred = new EventEmitter<Success>();
    private successDeleteSource = new Subject();
    successDelete$ = this.successDeleteSource.asObservable();

    handleSuccess(success: any) {
        const successData = new Success("", success.obj.message);
        this.successOccurred.emit(successData);
    }

    deleteSuccess() {
        this.successDeleteSource.next();
    }

}