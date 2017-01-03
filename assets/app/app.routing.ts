import { Routes, RouterModule } from "@angular/router";

import { SigninComponent } from "./auth/signin.component";
import { SignupComponent } from "./auth/signup.component";
import { HomeComponent } from "./home/home.component";
import { PROFILE_ROUTES } from "./profile/profile.routes";
import { UsersManagementComponent } from "./usersManagement/usersManagement.component";
import { FilesComponent } from "./files/files.component";

const APP_ROUTES: Routes = [
    { path: '', redirectTo: "home", pathMatch: "full"},
    { path: 'home', component: HomeComponent },
    { path: 'signin', component: SigninComponent },
    { path: 'signup', component: SignupComponent },
    { path: 'usersmanagement', component: UsersManagementComponent },
    { path: 'files', component: FilesComponent },
    { path: 'profile', children: PROFILE_ROUTES },
];

export const routing = RouterModule.forRoot(APP_ROUTES);