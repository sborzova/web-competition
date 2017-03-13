import { Routes, RouterModule } from "@angular/router";

import { SigninComponent } from "./auth/signin/signin.component";
import { SignupComponent } from "./auth/signup/signup.component";
import { HomeComponent } from "./home/home.component";
import { ValidationComponent } from "./validation/validation.component";
import { ResultsComponent } from "./results/results.component";
import { PROFILE_ROUTES } from "./auth/user.routes";
import { INSTANCE_ROUTES } from "./instances/instance.routes";
import { USER_SOLUTIONS_ROUTES } from "./user-solutions/user-solutions.routes";
import { USERS_ROUTES } from "./users/users.routes";
import {PreferenceComponent} from "./preference/preference.component";

const APP_ROUTES: Routes = [
    { path: '', redirectTo: '#home', pathMatch: 'full'},
    { path: '#home', component: HomeComponent },
    { path: '#users', children: USERS_ROUTES },
    { path: '#results', component: ResultsComponent },
    { path: '#validator', component: ValidationComponent },
    { path: '#mysolutions', children: USER_SOLUTIONS_ROUTES },
    { path: '#signin', component: SigninComponent },
    { path: '#signup', component: SignupComponent },
    { path: '#instances', children: INSTANCE_ROUTES },
    { path: '#profile', children: PROFILE_ROUTES },
    { path: '#preferences', component: PreferenceComponent },
];
export const hostUrl = 'http://localhost:3000/';
// export const hostUrl = 'https://bakalar.herokuapp.com/';

export const routing = RouterModule.forRoot(APP_ROUTES);