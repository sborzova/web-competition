import { NgModule } from "@angular/core";
import { EqualValidator } from "./shared/validator-equal.directive";
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
