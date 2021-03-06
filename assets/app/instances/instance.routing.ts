import { Routes, RouterModule } from "@angular/router";

import { InstancesComponent } from "./instances.component";
import { InstanceCreateComponent } from "./instance-new/instance-new.component";
import { InstanceEditComponent } from "./instance-update/instance-update.component";
import { InstanceStatusComponent } from "./instance-status/instance-status.component";

/**
 * Routes for component Instances.
 */
const INSTANCE_ROUTES: Routes = [
    { path: '', children: [
        { path: '', redirectTo: 'all', pathMatch: 'full' },
        { path: 'all', component: InstancesComponent },
        { path: 'create', component: InstanceCreateComponent },
        { path: 'edit/:id', component: InstanceEditComponent },
        { path: 'status/:id', component: InstanceStatusComponent },
    ]}
];

export const instanceRouting = RouterModule.forChild(INSTANCE_ROUTES);
