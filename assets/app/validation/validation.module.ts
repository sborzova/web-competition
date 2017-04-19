import { NgModule } from "@angular/core";
import {CommonModule} from "@angular/common";
import {ReactiveFormsModule, FormsModule} from "@angular/forms";

import {validationRouting} from "./validation.routing";
import {ValidationComponent} from "./validation.component";
import {SuccessValidationComponent} from "./success-validation/success-validation.component";
import {EscapeHtmlModule} from "../escape-html.module";
import {PaperService} from "../shared/paper.service";
import {SolutionService} from "../shared/solution.service";
import {FileService} from "../shared/file.service";

@NgModule({
    declarations: [
        ValidationComponent,
        SuccessValidationComponent,
    ],
    imports: [
        ReactiveFormsModule,
        FormsModule,
        CommonModule,
        EscapeHtmlModule,
        validationRouting,
    ],
    providers: [
        PaperService,
        SolutionService,
        FileService
    ]
})
export class ValidationModule {}