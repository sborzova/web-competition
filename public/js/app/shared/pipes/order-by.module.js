import { NgModule } from "@angular/core";
import { OrderByPipe } from "./order-by.pipe";
export var OrderByModule = (function () {
    function OrderByModule() {
    }
    OrderByModule.decorators = [
        { type: NgModule, args: [{
                    declarations: [OrderByPipe],
                    exports: [OrderByPipe]
                },] },
    ];
    /** @nocollapse */
    OrderByModule.ctorParameters = [];
    return OrderByModule;
}());
