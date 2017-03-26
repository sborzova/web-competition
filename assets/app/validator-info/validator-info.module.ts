import { NgModule } from "@angular/core";
import {CommonModule} from "@angular/common";

import {EscapeHtmlModule} from "../escape-html.module";
import {ValidatorInfoComponent} from "./validator-info.component";
import {validatorInfoRouting} from "./validator-info.routing";
import {SolutionService} from "../shared/solution.service";

@NgModule({
    declarations: [
        ValidatorInfoComponent
    ],
    imports: [
        CommonModule,
        EscapeHtmlModule,
        validatorInfoRouting
    ],
    providers: [SolutionService]
})
export class ValidatorInfoModule {}