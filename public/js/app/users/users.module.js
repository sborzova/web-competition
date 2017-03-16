import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ReactiveFormsModule } from "@angular/forms";
import { usersRouting } from "./users.routing";
import { UsersComponent } from "./users.component";
import { UserEditPasswordComponent } from "./user-edit-password/user-edit-password.component";
import { UserEditComponent } from "./user-edit/user-edit.component";
import { OrderByModule } from "../order-by.module";
import { UsersService } from "./users.service";
export var UsersModule = (function () {
    function UsersModule() {
    }
    UsersModule.decorators = [
        { type: NgModule, args: [{
                    declarations: [
                        UsersComponent,
                        UserEditComponent,
                        UserEditPasswordComponent,
                    ],
                    imports: [
                        ReactiveFormsModule,
                        CommonModule,
                        OrderByModule,
                        usersRouting
                    ],
                    providers: [UsersService]
                },] },
    ];
    /** @nocollapse */
    UsersModule.ctorParameters = [];
    return UsersModule;
}());
