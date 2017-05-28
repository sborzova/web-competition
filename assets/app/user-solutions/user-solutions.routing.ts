import { Routes, RouterModule } from "@angular/router";

import { UserSolutionsComponent } from "./user-solutions.component";

/**
 * Routes for component UserSolutions.
 */
const USER_SOLUTIONS_ROUTES: Routes = [
    { path: '', children: [
        { path: '', redirectTo: 'all', pathMatch: 'full' },
        { path: 'all', component:  UserSolutionsComponent},
    ]}
];

export const userSolutionsRouting = RouterModule.forChild(USER_SOLUTIONS_ROUTES);
