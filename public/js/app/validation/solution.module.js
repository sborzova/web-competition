import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { SolutionService } from "../shared/services/solution.service";
import { FileService } from "../shared/services/file.service";
export var SolutionModule = (function () {
    function SolutionModule() {
    }
    SolutionModule.decorators = [
        { type: NgModule, args: [{
                    declarations: [],
                    imports: [
                        CommonModule,
                    ],
                    providers: [SolutionService, FileService]
                },] },
    ];
    /** @nocollapse */
    SolutionModule.ctorParameters = [];
    return SolutionModule;
}());
