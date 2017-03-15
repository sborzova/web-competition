import {Routes, RouterModule} from "@angular/router";

import {ResultsComponent} from "./results.component";

const RESULTS_ROUTES: Routes = [
    { path: '', children: [
        { path: '', component: ResultsComponent},
    ]}
];

export const resultsRouting = RouterModule.forChild(RESULTS_ROUTES);
