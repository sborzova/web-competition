import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {ReactiveFormsModule} from "@angular/forms";

import {usersRouting} from "./users.routing";
import {UsersComponent} from "./users.component";
import {UserEditPasswordComponent} from "./user-edit-password/user-edit-password.component";
import {UserEditComponent} from "./user-edit/user-edit.component";
import {OrderByModule} from "../shared/pipes/order-by.module";
import {UsersService} from "./users.service";
import {EqualValidatorModule} from "../shared/directives/equal-validator.module";
import {EmailService} from "../auth/signin/email.service";

@NgModule({
    declarations: [
        UsersComponent,
        UserEditComponent,
        UserEditPasswordComponent,
    ],
    imports: [
        ReactiveFormsModule,
        CommonModule,
        OrderByModule,
        usersRouting,
        EqualValidatorModule
    ],
    providers: [
        UsersService,
        EmailService
    ]
})
export class UsersModule {}