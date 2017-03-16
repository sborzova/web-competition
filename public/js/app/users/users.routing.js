import { RouterModule } from "@angular/router";
import { UsersComponent } from "./users.component";
import { UserEditComponent } from "./user-edit/user-edit.component";
import { UserEditPasswordComponent } from "./user-edit-password/user-edit-password.component";
var USERS_ROUTES = [
    { path: '', children: [
            { path: '', redirectTo: 'all', pathMatch: 'full' },
            { path: 'all', component: UsersComponent },
            { path: 'edit', component: UserEditComponent },
            { path: 'editpass', component: UserEditPasswordComponent },
        ] }
];
export var usersRouting = RouterModule.forChild(USERS_ROUTES);
