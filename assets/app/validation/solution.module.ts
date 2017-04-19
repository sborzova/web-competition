import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { SolutionService } from "../shared/solution.service";
import {FileService} from "../shared/file.service";

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