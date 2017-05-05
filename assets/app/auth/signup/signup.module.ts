import {NgModule} from "@angular/core";
import {ReactiveFormsModule} from "@angular/forms";
import {CommonModule} from "@angular/common";
import {SignupComponent} from "./signup.component";
import {signupRouting} from "./signup.routing";
import {AuthService} from "../auth.service";
import {EqualValidatorModule} from "../../equal-validator.module";

@NgModule({
    declarations: [
        SignupComponent,
    ],
    imports: [
        ReactiveFormsModule,
        CommonModule,
        signupRouting,
        EqualValidatorModule
    ],
    providers: [
        AuthService,
    ]
})
export class SignupModule {}