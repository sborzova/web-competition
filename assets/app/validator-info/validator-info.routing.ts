import { Routes, RouterModule } from "@angular/router";
import {ValidatorInfoComponent} from "./validator-info.component";

/**
 * Routes for component ValidatorInfo.
 */
const VALIDATOR_INFO_ROUTES: Routes = [
    { path: '', children: [
        { path: '', component:  ValidatorInfoComponent},
    ]}
];

export const validatorInfoRouting = RouterModule.forChild(VALIDATOR_INFO_ROUTES);
