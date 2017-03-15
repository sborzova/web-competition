import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";

import {PreferenceComponent} from "./preference.component";
import {preferenceRouting} from "./preference.routing";

@NgModule({
    declarations: [
        PreferenceComponent,
    ],
    imports: [
        CommonModule,
        preferenceRouting
    ]
})
export class PreferenceModule {}