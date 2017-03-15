import { Routes, RouterModule } from "@angular/router";

import { UserSolutionsComponent } from "./user-solutions.component";
import { ValidatorInfoComponent } from "./validator-info/validator-info.component";

const USER_SOLUTIONS_ROUTES: Routes = [
    { path: '', children: [
        { path: '', redirectTo: 'all', pathMatch: 'full' },
        { path: 'all', component:  UserSolutionsComponent},
        { path: 'validatorinfo', component:  ValidatorInfoComponent},
    ]}
];

export const userSolutionsRouting = RouterModule.forChild(USER_SOLUTIONS_ROUTES);
