import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { SolutionService } from "../shared/solution.service";
import { FileService } from "../shared/file.service";
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
