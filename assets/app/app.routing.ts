import { Routes, RouterModule } from "@angular/router";

import { SigninComponent } from "./auth/signin/signin.component";
import { SignupComponent } from "./auth/signup/signup.component";
import { HomeComponent } from "./home/home.component";
import { PROFILE_ROUTES } from "./profile/profile.routes";
import { UsersManagementComponent } from "./users-management/users-management.component";
import { InstancesComponent } from "./instances/instances.component";
import {InstanceCreateComponent} from "./instances/instance-new/instance-new.component";

const APP_ROUTES: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full'},
    { path: 'home', component: HomeComponent },
    { path: 'usersmanagement', component: UsersManagementComponent },
    { path: 'instances', component: InstancesComponent },
    { path: 'instances/create', component: InstanceCreateComponent },
    { path: 'signin', component: SigninComponent },
    { path: 'signup', component: SignupComponent },
    { path: 'profile', children: PROFILE_ROUTES },
];
// export const hostUrl = 'http://localhost:3000/';
export const hostUrl = 'https://bakalar.herokuapp.com/';

export const routing = RouterModule.forRoot(APP_ROUTES);