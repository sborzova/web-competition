import {NgModule} from "@angular/core";
import {EqualValidator} from "./equal-validator.directive";

@NgModule({
    declarations: [EqualValidator],
    exports: [EqualValidator]
})
export class EqualValidatorModule {}