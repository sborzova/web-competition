import { RouterModule } from "@angular/router";
import { ProfileEditComponent } from "./profile-edit/profile-edit.component";
import { ProfileEditPasswordComponent } from "./profile-edit-password/profile-edit-password.component";
import { ProfileInfoComponent } from "./profile-info/profile-info.component";
var PROFILE_ROUTES = [
    { path: '', children: [
            { path: '', redirectTo: 'info', pathMatch: 'full' },
            { path: 'edit', component: ProfileEditComponent },
            { path: 'editpass', component: ProfileEditPasswordComponent },
            { path: 'info', component: ProfileInfoComponent },
        ] }
];
export var profileRouting = RouterModule.forChild(PROFILE_ROUTES);
