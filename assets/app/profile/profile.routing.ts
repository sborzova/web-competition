import { Routes, RouterModule } from "@angular/router";

import { ProfileEditComponent } from "./profile-edit/profile-edit.component";
import { ProfileEditPasswordComponent } from "./profile-edit-password/profile-edit-password.component";
import { ProfileInfoComponent } from "./profile-info/profile-info.component";

/**
 * Routes for component Profile.
 */
const PROFILE_ROUTES: Routes = [
    { path: '', children: [
        { path: '', redirectTo: 'info', pathMatch: 'full' },
        { path: 'edit', component: ProfileEditComponent },
        { path: 'editpass', component: ProfileEditPasswordComponent },
        { path: 'info', component: ProfileInfoComponent },
    ]}
];

export const profileRouting = RouterModule.forChild(PROFILE_ROUTES);