import { RouterModule } from "@angular/router";
import { PreferenceComponent } from "./preference.component";
var PREFERENCE_ROUTES = [
    { path: '', children: [
            { path: '', component: PreferenceComponent },
        ] }
];
export var preferenceRouting = RouterModule.forChild(PREFERENCE_ROUTES);
