import { Routes } from "@angular/router";

import { UserEditComponent } from "./user-edit/user-edit.component";
import { UserEditPasswordComponent } from "./user-edit-password/user-edit-password.component";
import { UserProfileComponent } from "./user/user.component";

export const PROFILE_ROUTES: Routes = [
    { path: '', redirectTo: 'info', pathMatch: 'full' },
    { path: 'edit', component: UserEditComponent },
    { path: 'editpass', component: UserEditPasswordComponent },
    { path: 'info', component: UserProfileComponent },
];
