import { RouterModule } from "@angular/router";
import { ValidatorInfoComponent } from "./validator-info.component";
/**
 * Routes for component ValidatorInfo.
 */
var VALIDATOR_INFO_ROUTES = [
    { path: '', children: [
            { path: '', component: ValidatorInfoComponent },
        ] }
];
export var validatorInfoRouting = RouterModule.forChild(VALIDATOR_INFO_ROUTES);
