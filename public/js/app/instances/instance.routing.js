import { RouterModule } from "@angular/router";
import { InstancesComponent } from "./instances.component";
import { InstanceCreateComponent } from "./instance-new/instance-new.component";
import { InstanceEditComponent } from "./instance-update/instance-update.component";
import { InstanceStatsComponent } from "./instance-stats/instance-stats.component";
var INSTANCE_ROUTES = [
    { path: '', children: [
            { path: '', redirectTo: 'all', pathMatch: 'full' },
            { path: 'all', component: InstancesComponent },
            { path: 'create', component: InstanceCreateComponent },
            { path: 'edit', component: InstanceEditComponent },
            { path: 'stats', component: InstanceStatsComponent },
        ] }
];
export var instanceRouting = RouterModule.forChild(INSTANCE_ROUTES);
