import { RouterModule } from "@angular/router";
import { SignupComponent } from "./signup.component";
/**
 * Routes for component SignUp.
 */
var SIGNUP_ROUTES = [
    { path: '', children: [
            { path: '', component: SignupComponent },
        ] }
];
export var signupRouting = RouterModule.forChild(SIGNUP_ROUTES);
