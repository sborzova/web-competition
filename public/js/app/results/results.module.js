import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ResultsBestComponent } from "./results-best/results-best.component";
import { ResultsInstanceComponent } from "./results-instance/results-instance.component";
import { ResultsAuthorComponent } from "./results-author/results-author.component";
import { ResultsAuthorTechniqueComponent } from "./results-author-technique/results-author-technique.component";
import { resultsRouting } from "./results.routing";
import { OrderByModule } from "../shared/pipes/order-by.module";
import { PaperService } from "../shared/services/paper.service";
import { InstanceService } from "../shared/services/instance.service";
import { SolutionService } from "../shared/services/solution.service";
import { SortDownloadSolutionService } from "../shared/services/sort-download-solution.service";
import { ResultsAuthorInstanceComponent } from "./results-author-instance/results-author-instance.component";
import { ResultsAuthorInstanceTechniqueComponent } from "./results-author-instance-technique/results-author-instance-technique.component";
import { FileService } from "../shared/services/file.service";
import { SessionStorageService } from "../shared/services/session-storage.service";
export var ResultsModule = (function () {
    function ResultsModule() {
    }
    ResultsModule.decorators = [
        { type: NgModule, args: [{
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
                        SortDownloadSolutionService,
                        FileService,
                        SessionStorageService
                    ]
                },] },
    ];
    /** @nocollapse */
    ResultsModule.ctorParameters = [];
    return ResultsModule;
}());
