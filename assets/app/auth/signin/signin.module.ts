import {NgModule} from "@angular/core";
import {SigninComponent} from "./signin.component";
import {ReactiveFormsModule} from "@angular/forms";
import {CommonModule} from "@angular/common";
import {signinRouting} from "./signin.routing";

@NgModule({
    declarations: [
        SigninComponent,
    ],
    imports: [
        ReactiveFormsModule,
        CommonModule,
        signinRouting
    ]
})
export class SigninModule {}