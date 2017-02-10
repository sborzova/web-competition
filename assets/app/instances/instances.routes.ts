import { Routes } from "@angular/router";

import { InstancesComponent } from "./instances.component";
import { InstanceCreateComponent } from "./instance-new/instance-new.component";
import { InstanceEditComponent } from "./instance-edit/instance-edit.component";

export const INSTANCE_ROUTES: Routes = [
    { path: '', redirectTo: 'all', pathMatch: 'full' },
    { path: 'all', component: InstancesComponent },
    { path: 'create', component: InstanceCreateComponent },
    { path: 'edit', component: InstanceEditComponent },
];
