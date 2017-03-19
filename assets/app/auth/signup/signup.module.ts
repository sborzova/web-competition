import {NgModule} from "@angular/core";
import {ReactiveFormsModule} from "@angular/forms";
import {CommonModule} from "@angular/common";
import {SignupComponent} from "./signup.component";
import {signupRouting} from "./signup.routing";
import {EqualValidator} from "../validator-equal.directive";
import {AuthService} from "../auth.service";
import {FlashMessageService} from "../../flash-message/flash-messages.service";

@NgModule({
    declarations: [
        SignupComponent,
        EqualValidator,
    ],
    imports: [
        ReactiveFormsModule,
        CommonModule,
        signupRouting,
    ],
    providers: [
        AuthService,
    ]
})
export class SignupModule {}