import { RouterModule } from "@angular/router";
import { HomeComponent } from "./home/home.component";
var APP_ROUTES = [
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
    { path: '#solution/validatorinfo', loadChildren: '../app/validator-info/validator-info.module#ValidatorInfoModule' },
];
// export const hostUrl = 'http://localhost:3000/';
// export const hostUrl = 'https://bakalar.herokuapp.com/';
export var hostUrl = 'https://http://test-cttcompetition.azurewebsites.net/';
export var routing = RouterModule.forRoot(APP_ROUTES);
