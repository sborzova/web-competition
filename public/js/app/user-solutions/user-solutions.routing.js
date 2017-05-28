import { RouterModule } from "@angular/router";
import { UserSolutionsComponent } from "./user-solutions.component";
/**
 * Routes for component UserSolutions.
 */
var USER_SOLUTIONS_ROUTES = [
    { path: '', children: [
            { path: '', redirectTo: 'all', pathMatch: 'full' },
            { path: 'all', component: UserSolutionsComponent },
        ] }
];
export var userSolutionsRouting = RouterModule.forChild(USER_SOLUTIONS_ROUTES);
