import { RouterModule } from "@angular/router";
import { ResultsComponent } from "./results.component";
var RESULTS_ROUTES = [
    { path: '', children: [
            { path: '', component: ResultsComponent },
        ] }
];
export var resultsRouting = RouterModule.forChild(RESULTS_ROUTES);
