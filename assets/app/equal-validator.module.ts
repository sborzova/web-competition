import {NgModule} from "@angular/core";
import {EqualValidator} from "./shared/validator-equal.directive";

@NgModule({
    declarations: [EqualValidator],
    exports: [EqualValidator]
})
export class EqualValidatorModule {}