import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { EscapeHtmlModule } from "../shared/pipes/escape-html.module";
import { ValidatorInfoComponent } from "./validator-info.component";
import { validatorInfoRouting } from "./validator-info.routing";
import { SolutionService } from "../shared/services/solution.service";
import { PaperService } from "../shared/services/paper.service";
import { FileService } from "../shared/services/file.service";
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
