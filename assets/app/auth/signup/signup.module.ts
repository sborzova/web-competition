import {NgModule} from "@angular/core";
import {ReactiveFormsModule} from "@angular/forms";
import {CommonModule} from "@angular/common";
import {SignupComponent} from "./signup.component";
import {signupRouting} from "./signup.routing";
import {EqualValidator} from "../validator-equal.directive";

@NgModule({
    declarations: [
        SignupComponent,
        EqualValidator
    ],
    imports: [
        ReactiveFormsModule,
        CommonModule,
        signupRouting
    ]
})
export class SignupModule {}