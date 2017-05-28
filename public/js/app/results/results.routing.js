import { RouterModule } from "@angular/router";
import { ResultsBestComponent } from "./results-best/results-best.component";
/**
 * Routes for component Result.
 */
var RESULTS_ROUTES = [
    { path: '', children: [
            { path: '', component: ResultsBestComponent },
        ] }
];
export var resultsRouting = RouterModule.forChild(RESULTS_ROUTES);
