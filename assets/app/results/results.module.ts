import { NgModule } from "@angular/core";
import {CommonModule} from "@angular/common";

import {ResultsComponent} from "./results.component";
import {ResultsBestComponent} from "./results-best/results-best.component";
import {ResultsInstanceComponent} from "./results-instance/results-instance.component";
import {ResultsAuthorComponent} from "./results-author/results-author.component";
import {ResultsAuthorTechniqueComponent} from "./results-author-technique/results-author-technique.component";
import {resultsRouting} from "./results.routing";
import {OrderByModule} from "../order-by.module";

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
    ]
})
export class ResultsModule {}