import {NgModule} from "@angular/core";
import {ReactiveFormsModule} from "@angular/forms";
import {CommonModule} from "@angular/common";
import {SignupComponent} from "./signup.component";
import {signupRouting} from "./signup.routing";
import {EqualValidator} from "../../shared/validator-equal.directive";
import {AuthService} from "../auth.service";
import {FlashMessageService} from "../../flash-message/flash-messages.service";
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