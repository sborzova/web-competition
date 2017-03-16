import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ResultsComponent } from "./results.component";
import { ResultsBestComponent } from "./results-best/results-best.component";
import { ResultsInstanceComponent } from "./results-instance/results-instance.component";
import { ResultsAuthorComponent } from "./results-author/results-author.component";
import { ResultsAuthorTechniqueComponent } from "./results-author-technique/results-author-technique.component";
import { resultsRouting } from "./results.routing";
import { OrderByModule } from "../order-by.module";
import { PaperService } from "../shared/paper.service";
import { InstanceService } from "../instances/instance.service";
import { SolutionService } from "../validation/solution.service";
export var ResultsModule = (function () {
    function ResultsModule() {
    }
    ResultsModule.decorators = [
        { type: NgModule, args: [{
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
                    providers: [PaperService, InstanceService, SolutionService]
                },] },
    ];
    /** @nocollapse */
    ResultsModule.ctorParameters = [];
    return ResultsModule;
}());
