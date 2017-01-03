import { Routes } from "@angular/router";

import { ProfileEditComponent } from "./profileEdit.component";
import { ProfileEditpassComponent } from "./profileEditpass.component";
import { ProfileComponent } from "./profile.component";

export const PROFILE_ROUTES: Routes = [
    { path: '', redirectTo: 'info', pathMatch: 'full' },
    { path: 'edit', component: ProfileEditComponent },
    { path: 'editpass', component: ProfileEditpassComponent },
    { path: 'info', component: ProfileComponent },
];
