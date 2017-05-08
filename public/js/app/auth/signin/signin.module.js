import { NgModule } from "@angular/core";
import { SigninComponent } from "./signin.component";
import { ReactiveFormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";
import { signinRouting } from "./signin.routing";
import { AuthService } from "../auth.service";
import { EmailService } from "./email.service";
export var SigninModule = (function () {
    function SigninModule() {
    }
    SigninModule.decorators = [
        { type: NgModule, args: [{
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
                        EmailService,
                    ]
                },] },
    ];
    /** @nocollapse */
    SigninModule.ctorParameters = [];
    return SigninModule;
}());
