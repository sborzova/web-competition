import { NgModule } from "@angular/core";
import { EqualValidator } from "./equal-validator.directive";
export var EqualValidatorModule = (function () {
    function EqualValidatorModule() {
    }
    EqualValidatorModule.decorators = [
        { type: NgModule, args: [{
                    declarations: [EqualValidator],
                    exports: [EqualValidator]
                },] },
    ];
    /** @nocollapse */
    EqualValidatorModule.ctorParameters = [];
    return EqualValidatorModule;
}());
