import { NgModule } from "@angular/core";
import {CommonModule} from "@angular/common";
import {ReactiveFormsModule, FormsModule} from "@angular/forms";

import {userSolutionsRouting} from "./user-solutions.routing";
import {UserSolutionsComponent} from "./user-solutions.component";
import {ValidatorInfoComponent} from "./validator-info/validator-info.component";
import {OrderByModule} from "../order-by.module";
import {EscapeHtmlModule} from "../escape-html.module";

@NgModule({
    declarations: [
        UserSolutionsComponent,
        ValidatorInfoComponent,
    ],
    imports: [
        ReactiveFormsModule,
        FormsModule,
        CommonModule,
        OrderByModule,
        EscapeHtmlModule,
        userSolutionsRouting
    ]
})
export class UserSolutionsModule {}