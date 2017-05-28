import {Routes, RouterModule} from "@angular/router";
import {SignupComponent} from "./signup.component";

/**
 * Routes for component SignUp.
 */
const SIGNUP_ROUTES: Routes = [
    { path: '', children: [
        { path: '', component: SignupComponent},
    ]}
];

export const signupRouting = RouterModule.forChild(SIGNUP_ROUTES);