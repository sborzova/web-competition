import { NgModule } from "@angular/core";
import {CommonModule} from "@angular/common";

import {ResultsComponent} from "./results.component";
import {ResultsBestComponent} from "./results-best/results-best.component";
import {ResultsInstanceComponent} from "./results-instance/results-instance.component";
import {ResultsAuthorComponent} from "./results-author/results-author.component";
import {ResultsAuthorTechniqueComponent} from "./results-author-technique/results-author-technique.component";
import {resultsRouting} from "./results.routing";
import {OrderByModule} from "../order-by.module";
import {PaperService} from "../shared/paper.service";
import {InstanceService} from "../instances/instance.service";
import {SolutionService} from "../validation/solution.service";
import {ResultsService} from "./results.service";
import {FlashMessageService} from "../flash-message/flash-messages.service";

@NgModule({
    declarations: [
        ResultsComponent,
        ResultsBestComponent,
        ResultsInstanceComponent,
        ResultsAuthorComponent,
        ResultsAuthorTechniqueComponent,
    ],
    imports: [
        CommonModule,
        OrderByModule,
        resultsRouting
    ],
    providers: [
        PaperService,
        InstanceService,
        SolutionService,
        ResultsService,
        FlashMessageService
    ]
})
export class ResultsModule {}