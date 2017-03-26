import {Routes, RouterModule} from "@angular/router";

import {ResultsBestComponent} from "./results-best/results-best.component";

const RESULTS_ROUTES: Routes = [
    { path: '', children: [
        { path: '', component: ResultsBestComponent},
    ]}
];

export const resultsRouting = RouterModule.forChild(RESULTS_ROUTES);
