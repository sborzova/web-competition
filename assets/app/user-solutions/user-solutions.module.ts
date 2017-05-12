import { NgModule } from "@angular/core";
import {CommonModule} from "@angular/common";
import {ReactiveFormsModule, FormsModule} from "@angular/forms";

import {userSolutionsRouting} from "./user-solutions.routing";
import {UserSolutionsComponent} from "./user-solutions.component";
import {OrderByModule} from "../shared/pipes/order-by.module";
import {EscapeHtmlModule} from "../shared/pipes/escape-html.module";
import {PaperService} from "../shared/services/paper.service";
import {SolutionService} from "../shared/services/solution.service";
import {SortDownloadService} from "../shared/services/sort-download.service";
import {FileService} from "../shared/services/file.service";
import {DateFormatModule} from "../shared/pipes/date-format.module";

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
        DateFormatModule,
        userSolutionsRouting,
    ],
    providers: [
        PaperService,
        SolutionService,
        SortDownloadService,
        FileService
    ]
})
export class UserSolutionsModule {}