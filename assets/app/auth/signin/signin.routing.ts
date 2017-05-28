import {Routes, RouterModule} from "@angular/router";
import {SigninComponent} from "./signin.component";

/**
 * Routes for sign in user.
 */
const SIGNIN_ROUTES: Routes = [
    { path: '', children: [
        { path: '', component: SigninComponent},
    ]}
];

export const signinRouting = RouterModule.forChild(SIGNIN_ROUTES);
