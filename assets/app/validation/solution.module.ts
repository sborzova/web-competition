import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";

import {SolutionService} from "../shared/services/solution.service";
import {FileService} from "../shared/services/file.service";

@NgModule({
    declarations: [
    ],
    imports: [
        CommonModule,
    ],
    providers: [SolutionService, FileService]
})
export class SolutionModule {

}