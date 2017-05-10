import { NgModule } from "@angular/core";
import { ReactiveFormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";
import { SignupComponent } from "./signup.component";
import { signupRouting } from "./signup.routing";
import { AuthService } from "../auth.service";
import { EqualValidatorModule } from "../../shared/directives/equal-validator.module";
export var SignupModule = (function () {
    function SignupModule() {
    }
    SignupModule.decorators = [
        { type: NgModule, args: [{
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
                },] },
    ];
    /** @nocollapse */
    SignupModule.ctorParameters = [];
    return SignupModule;
}());
