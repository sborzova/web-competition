import {Routes, RouterModule} from "@angular/router";
import {ValidationComponent} from "./validation.component";

const VALIDATION_ROUTES: Routes = [
    { path: '', children: [
        { path: '', component: ValidationComponent },
    ]}
];

export const validationRouting = RouterModule.forChild(VALIDATION_ROUTES);
