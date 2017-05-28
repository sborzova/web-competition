import {Routes, RouterModule} from "@angular/router";

import {UsersComponent} from "./users.component";
import {UserEditComponent} from "./user-edit/user-edit.component";
import {UserEditPasswordComponent} from "./user-edit-password/user-edit-password.component";

/**
 * Routes for component Users.
 */
const USERS_ROUTES: Routes = [
    { path: '', children: [
        { path: '', redirectTo: 'all', pathMatch: 'full' },
        { path: 'all', component:  UsersComponent },
        { path: 'edit/:id', component:  UserEditComponent },
        { path: 'editpass/:id', component:  UserEditPasswordComponent },
    ]}
];

export const usersRouting = RouterModule.forChild(USERS_ROUTES);
