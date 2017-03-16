import { RouterModule } from "@angular/router";
import { UserSolutionsComponent } from "./user-solutions.component";
import { ValidatorInfoComponent } from "./validator-info/validator-info.component";
var USER_SOLUTIONS_ROUTES = [
    { path: '', children: [
            { path: '', redirectTo: 'all', pathMatch: 'full' },
            { path: 'all', component: UserSolutionsComponent },
            { path: 'validatorinfo', component: ValidatorInfoComponent },
        ] }
];
export var userSolutionsRouting = RouterModule.forChild(USER_SOLUTIONS_ROUTES);
