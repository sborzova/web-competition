import {Routes, RouterModule} from "@angular/router";
import {ValidationComponent} from "./validation.component";

/**
 * Routes for component Validation.
 */
const VALIDATION_ROUTES: Routes = [
    { path: '', children: [
        { path: '', component: ValidationComponent },
    ]}
];

export const validationRouting = RouterModule.forChild(VALIDATION_ROUTES);
