import { NgModule } from "@angular/core";
import {CommonModule} from "@angular/common";
import {ReactiveFormsModule, FormsModule} from "@angular/forms";

import {userSolutionsRouting} from "./user-solutions.routing";
import {UserSolutionsComponent} from "./user-solutions.component";
import {OrderByModule} from "../order-by.module";
import {EscapeHtmlModule} from "../escape-html.module";
import {PaperService} from "../shared/paper.service";
import {SolutionService} from "../validation/solution.service";
import {FlashMessageService} from "../flash-message/flash-messages.service";

@NgModule({
    declarations: [
        UserSolutionsComponent,
    ],
    imports: [
        ReactiveFormsModule,
        FormsModule,
        CommonModule,
        OrderByModule,
        EscapeHtmlModule,
        userSolutionsRouting,
    ],
    providers: [
        PaperService,
        SolutionService,
    ]
})
export class UserSolutionsModule {}