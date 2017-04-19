import { Routes, RouterModule } from "@angular/router";

import { HomeComponent } from "./home/home.component";

const APP_ROUTES: Routes = [
    { path: '', redirectTo: '#home', pathMatch: 'full' },
    { path: '#home', component: HomeComponent },
    { path: '#users', loadChildren: '../app/users/users.module#UsersModule' },
    { path: '#results', loadChildren: '../app/results/results.module#ResultsModule' },
    { path: '#validator', loadChildren: '../app/validation/validation.module#ValidationModule' },
    { path: '#mysolutions', loadChildren: '../app/user-solutions/user-solutions.module#UserSolutionsModule' },
    { path: '#signin', loadChildren: '../app/auth/signin/signin.module#SigninModule' },
    { path: '#signup', loadChildren: '../app/auth/signup/signup.module#SignupModule' },
    { path: '#instances', loadChildren: '../app/instances/instance.module#InstanceModule' },
    { path: '#profile', loadChildren: '../app/profile/profile.module#ProfileModule' },
    { path: '#preferences', loadChildren: '../app/preference/preference.module#PreferenceModule' },
    { path: '#solution/validatorinfo/:id', loadChildren: '../app/validator-info/validator-info.module#ValidatorInfoModule' },
];

export const hostUrl = 'http://localhost:3000/';
// export const hostUrl = 'https://test-cttcompetition.herokuapp.com/';

export const routing = RouterModule.forRoot(APP_ROUTES);