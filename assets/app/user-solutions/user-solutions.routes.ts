import { Routes } from "@angular/router";

import { UserSolutionsComponent } from "./user-solutions.component";
import { ValidatorInfoComponent } from "./validator-info/validator-info.component";

export const USER_SOLUTIONS_ROUTES: Routes = [
    { path: '', redirectTo: 'all', pathMatch: 'full' },
    { path: 'all', component:  UserSolutionsComponent},
    { path: 'validatorinfo', component:  ValidatorInfoComponent},
];