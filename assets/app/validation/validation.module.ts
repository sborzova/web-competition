import { NgModule } from "@angular/core";
import {CommonModule} from "@angular/common";
import {ReactiveFormsModule, FormsModule} from "@angular/forms";

import {validationRouting} from "./validation.routing";
import {ValidationComponent} from "./validation.component";
import {SuccessValidationComponent} from "./success-validation/success-validation.component";
import {WorseSolutionsComponent} from "./worse-solutions/worse-solutions.component";
import {EscapeHtmlModule} from "../escape-html.module";

@NgModule({
    declarations: [
        ValidationComponent,
        SuccessValidationComponent,
        WorseSolutionsComponent,
    ],
    imports: [
        ReactiveFormsModule,
        FormsModule,
        CommonModule,
        EscapeHtmlModule,
        validationRouting
    ]
})
export class ValidationModule {}