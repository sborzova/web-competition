import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { PreferenceComponent } from "./preference.component";
import { preferenceRouting } from "./preference.routing";
import { PreferenceService } from "./preference.service";
export var PreferenceModule = (function () {
    function PreferenceModule() {
    }
    PreferenceModule.decorators = [
        { type: NgModule, args: [{
                    declarations: [
                        PreferenceComponent,
                    ],
                    imports: [
                        CommonModule,
                        preferenceRouting,
                        FormsModule,
                    ],
                    providers: [
                        PreferenceService,
                    ]
                },] },
    ];
    /** @nocollapse */
    PreferenceModule.ctorParameters = [];
    return PreferenceModule;
}());
