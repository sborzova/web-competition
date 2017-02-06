import { Component, OnInit, OnDestroy } from "@angular/core";

import { Error } from "./error.model";
import { ErrorService } from "./error.service";
import { Subscription } from "rxjs";

@Component({
    selector: 'app-error',
    templateUrl: './error.component.html'
})
export class ErrorComponent implements OnInit, OnDestroy{
    error: Error;
    display = 'none';
    subscription: Subscription;

    constructor(private errorService: ErrorService) {
        this.subscription = errorService.errorDelete$
            .subscribe(
                () => {
                    this.display = 'none';
                }
            );
    }

    onErrorHandled() {
        this.display = 'none';
    }

    ngOnInit() {
        this.errorService.errorOccurred
            .subscribe(
                (error: Error) => {
                    this.error = error;
                    this.display = 'block';
                }
            );
    }

    ngOnDestroy(){
        this.subscription.unsubscribe();
    }

}