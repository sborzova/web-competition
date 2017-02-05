import { Routes } from "@angular/router";

import { ProfileEditComponent } from "./profile-edit/profile-edit.component";
import { ProfileEditPasswordComponent } from "./profile-edit-password/profile-edit-password.component";
import { ProfileComponent } from "./profile.component";

export const PROFILE_ROUTES: Routes = [
    { path: '', redirectTo: 'info', pathMatch: 'full' },
    { path: 'edit', component: ProfileEditComponent },
    { path: 'editpass', component: ProfileEditPasswordComponent },
    { path: 'info', component: ProfileComponent },
];
