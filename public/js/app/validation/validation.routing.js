import { RouterModule } from "@angular/router";
import { ValidationComponent } from "./validation.component";
var VALIDATION_ROUTES = [
    { path: '', children: [
            { path: '', component: ValidationComponent },
        ] }
];
export var validationRouting = RouterModule.forChild(VALIDATION_ROUTES);
