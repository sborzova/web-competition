import {Routes, RouterModule} from "@angular/router";
import {PreferenceComponent} from "./preference.component";

/**
 *  Routes for component Preference.
 */
const PREFERENCE_ROUTES: Routes = [
    { path: '', children: [
        { path: '', component: PreferenceComponent},
    ]}
];

export const preferenceRouting = RouterModule.forChild(PREFERENCE_ROUTES);
