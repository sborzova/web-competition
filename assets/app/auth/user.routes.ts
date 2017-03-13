import { Routes } from "@angular/router";

import { ProfileEditComponent } from "../profile/profile-edit/profile-edit.component";
import { ProfileEditPasswordComponent } from "../profile/profile-edit-password/profile-edit-password.component";
import { ProfileInfoComponent } from "../profile/profile-info/profile-info.component";

export const PROFILE_ROUTES: Routes = [
    { path: '', redirectTo: 'info', pathMatch: 'full' },
    { path: 'edit', component: ProfileEditComponent },
    { path: 'editpass', component: ProfileEditPasswordComponent },
    { path: 'info', component: ProfileInfoComponent },
];
