import { NgModule } from "@angular/core";
import {CommonModule} from "@angular/common";
import {ReactiveFormsModule, FormsModule} from "@angular/forms";

import {validationRouting} from "./validation.routing";
import {ValidationComponent} from "./validation.component";
import {SuccessValidationComponent} from "./success-validation/success-validation.component";
import {WorseSolutionsComponent} from "./worse-solutions/worse-solutions.component";
import {EscapeHtmlModule} from "../escape-html.module";
import {PaperService} from "../shared/paper.service";
import {SolutionService} from "./solution.service";
import {FlashMessageComponent} from "../flash-message/flash-message.component";
import {FlashMessageService} from "../flash-message/flash-messages.service";

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
        validationRouting,
    ],
    providers: [
        PaperService,
        SolutionService,
    ]
})
export class ValidationModule {}