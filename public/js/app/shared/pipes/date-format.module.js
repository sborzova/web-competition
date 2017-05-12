import { NgModule } from "@angular/core";
import { DateFormatPipe } from "./date-format.pipe";
export var DateFormatModule = (function () {
    function DateFormatModule() {
    }
    DateFormatModule.decorators = [
        { type: NgModule, args: [{
                    declarations: [DateFormatPipe],
                    exports: [DateFormatPipe]
                },] },
    ];
    /** @nocollapse */
    DateFormatModule.ctorParameters = [];
    return DateFormatModule;
}());
