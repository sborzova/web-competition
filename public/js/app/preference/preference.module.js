import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { PreferenceComponent } from "./preference.component";
import { preferenceRouting } from "./preference.routing";
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
                        preferenceRouting
                    ]
                },] },
    ];
    /** @nocollapse */
    PreferenceModule.ctorParameters = [];
    return PreferenceModule;
}());
