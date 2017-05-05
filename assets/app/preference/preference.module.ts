import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {FormsModule} from "@angular/forms";

import {PreferenceComponent} from "./preference.component";
import {preferenceRouting} from "./preference.routing";
import {PreferenceService} from "./preference.service";

@NgModule({
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
})
export class PreferenceModule {}