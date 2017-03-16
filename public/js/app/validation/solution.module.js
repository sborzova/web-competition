import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { SolutionService } from "./solution.service";
export var SolutionModule = (function () {
    function SolutionModule() {
    }
    SolutionModule.decorators = [
        { type: NgModule, args: [{
                    declarations: [],
                    imports: [
                        CommonModule,
                    ],
                    providers: [SolutionService]
                },] },
    ];
    /** @nocollapse */
    SolutionModule.ctorParameters = [];
    return SolutionModule;
}());
