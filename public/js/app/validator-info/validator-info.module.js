import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { EscapeHtmlModule } from "../escape-html.module";
import { ValidatorInfoComponent } from "./validator-info.component";
import { validatorInfoRouting } from "./validator-info.routing";
import { SolutionService } from "../shared/solution.service";
import { PaperService } from "../shared/paper.service";
import { FileService } from "../shared/file.service";
export var ValidatorInfoModule = (function () {
    function ValidatorInfoModule() {
    }
    ValidatorInfoModule.decorators = [
        { type: NgModule, args: [{
                    declarations: [
                        ValidatorInfoComponent
                    ],
                    imports: [
                        CommonModule,
                        EscapeHtmlModule,
                        validatorInfoRouting
                    ],
                    providers: [
                        SolutionService,
                        PaperService,
                        FileService
                    ]
                },] },
    ];
    /** @nocollapse */
    ValidatorInfoModule.ctorParameters = [];
    return ValidatorInfoModule;
}());
