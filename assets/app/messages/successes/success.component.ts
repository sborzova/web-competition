import { Component, OnInit, OnDestroy } from "@angular/core";

import { Subscription } from "rxjs";
import { Success } from "./success.model";
import { SuccessService } from "./success.service";

@Component({
    selector: 'app-success',
    templateUrl: './success.component.html'
})
export class SuccessComponent implements OnInit, OnDestroy{
    success: Success;
    display = 'none';
    subscription: Subscription;

    constructor(private successService: SuccessService) {
        this.subscription = successService.successDelete$
            .subscribe(
                () => {
                    this.display = 'none';
                }
            );
    }

    onSuccessHandled() {
        this.display = 'none';
    }

    ngOnInit() {
        this.successService.successOccurred
            .subscribe(
                (success: Success) => {
                    this.success = success;
                    this.display = 'block';
                }
            );
    }

    ngOnDestroy(){
        this.subscription.unsubscribe();
    }

}