import {NgModule} from "@angular/core";
import {SigninComponent} from "./signin.component";
import {ReactiveFormsModule} from "@angular/forms";
import {CommonModule} from "@angular/common";
import {signinRouting} from "./signin.routing";
import {AuthService} from "../auth.service";
import {FlashMessageService} from "../../flash-message/flash-messages.service";

@NgModule({
    declarations: [
        SigninComponent,
    ],
    imports: [
        ReactiveFormsModule,
        CommonModule,
        signinRouting,
    ],
    providers: [
        AuthService,
    ]
})
export class SigninModule {}