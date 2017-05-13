import { RouterModule } from "@angular/router";
import { UserSolutionsComponent } from "./user-solutions.component";
var USER_SOLUTIONS_ROUTES = [
    { path: '', children: [
            { path: '', redirectTo: 'all', pathMatch: 'full' },
            { path: 'all', component: UserSolutionsComponent },
        ] }
];
export var userSolutionsRouting = RouterModule.forChild(USER_SOLUTIONS_ROUTES);
