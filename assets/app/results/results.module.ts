import { NgModule } from "@angular/core";
import {CommonModule} from "@angular/common";

import {ResultsBestComponent} from "./results-best/results-best.component";
import {ResultsInstanceComponent} from "./results-instance/results-instance.component";
import {ResultsAuthorComponent} from "./results-author/results-author.component";
import {ResultsAuthorTechniqueComponent} from "./results-author-technique/results-author-technique.component";
import {resultsRouting} from "./results.routing";
import {OrderByModule} from "../order-by.module";
import {PaperService} from "../shared/paper.service";
import {InstanceService} from "../shared/instance.service";
import {SolutionService} from "../shared/solution.service";
import {SortService} from "../shared/sort.service";
import {ResultsAuthorInstanceComponent} from "./results-author-instance/results-author-instance.component";
import {ResultsAuthorInstanceTechniqueComponent} from "./results-author-instance-technique/results-author-instance-technique.component";
import {FileService} from "../shared/file.service";
import {SessionStorageService} from "../shared/session-storage.service";

@NgModule({
    declarations: [
        ResultsBestComponent,
        ResultsInstanceComponent,
        ResultsAuthorComponent,
        ResultsAuthorInstanceComponent,
        ResultsAuthorTechniqueComponent,
        ResultsAuthorInstanceTechniqueComponent
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
        SortService,
        FileService,
        SessionStorageService
    ]
})
export class ResultsModule {}