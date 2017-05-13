import { RouterModule } from "@angular/router";
import { ValidatorInfoComponent } from "./validator-info.component";
var VALIDATOR_INFO_ROUTES = [
    { path: '', children: [
            { path: '', component: ValidatorInfoComponent },
        ] }
];
export var validatorInfoRouting = RouterModule.forChild(VALIDATOR_INFO_ROUTES);
