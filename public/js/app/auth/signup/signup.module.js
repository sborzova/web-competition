import { NgModule } from "@angular/core";
import { ReactiveFormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";
import { SignupComponent } from "./signup.component";
import { signupRouting } from "./signup.routing";
import { EqualValidator } from "../validator-equal.directive";
import { AuthService } from "../auth.service";
export var SignupModule = (function () {
    function SignupModule() {
    }
    SignupModule.decorators = [
        { type: NgModule, args: [{
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
                },] },
    ];
    /** @nocollapse */
    SignupModule.ctorParameters = [];
    return SignupModule;
}());
