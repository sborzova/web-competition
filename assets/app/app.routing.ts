import { Routes, RouterModule } from "@angular/router";

import { SigninComponent } from "./auth/signin/signin.component";
import { SignupComponent } from "./auth/signup/signup.component";
import { HomeComponent } from "./home/home.component";
import { PROFILE_ROUTES } from "./auth/user.routes";
import { UsersComponent } from "./users/users.component";
import { INSTANCE_ROUTES } from "./instances/instance.routes";
import { ValidationComponent } from "./validation/validation.component";

const APP_ROUTES: Routes = [
    { path: '', redirectTo: '#home', pathMatch: 'full'},
    { path: '#home', component: HomeComponent },
    { path: '#usersmanagement', component: UsersComponent },
    { path: '#results', component: HomeComponent },
    { path: '#validator', component: ValidationComponent },
    { path: '#signin', component: SigninComponent },
    { path: '#signup', component: SignupComponent },
    { path: '#instances', children: INSTANCE_ROUTES },
    { path: '#profile', children: PROFILE_ROUTES },
];
// export const hostUrl = 'http://localhost:3000/';
export const hostUrl = 'https://bakalar.herokuapp.com/';

export const routing = RouterModule.forRoot(APP_ROUTES);