import { RouterModule } from "@angular/router";
import { SigninComponent } from "./signin.component";
var SIGNIN_ROUTES = [
    { path: '', children: [
            { path: '', component: SigninComponent },
        ] }
];
export var signinRouting = RouterModule.forChild(SIGNIN_ROUTES);
