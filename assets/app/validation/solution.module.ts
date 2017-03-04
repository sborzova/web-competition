import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { SolutionService } from "./solution.service";
import { ValidationComponent } from "./validation.component";
import { SuccessValidationComponent } from "./success-validation/success-validation.component";

@NgModule({
    declarations: [
    ],
    imports: [
        CommonModule,
        // ReactiveFormsModule,
    ],
    providers: [SolutionService]
})
export class SolutionModule {

}