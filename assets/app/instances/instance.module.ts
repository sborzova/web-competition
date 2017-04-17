import { NgModule } from "@angular/core";
import {CommonModule} from "@angular/common";
import {ReactiveFormsModule} from "@angular/forms";
import {instanceRouting} from "./instance.routing";
import {InstancesComponent} from "./instances.component";
import {InstanceListComponent} from "./instance-list/instance-list.component";
import {InstanceCreateComponent} from "./instance-new/instance-new.component";
import {InstanceEditComponent} from "./instance-update/instance-update.component";
import {InstanceStatusComponent} from "./instance-status/instance-status.component";
import {OrderByModule} from "../order-by.module";
import {InstanceService} from "../shared/instance.service";

@NgModule({
    declarations: [
        InstancesComponent,
        InstanceListComponent,
        InstanceCreateComponent,
        InstanceEditComponent,
        InstanceStatusComponent,
    ],
    imports: [
        ReactiveFormsModule,
        CommonModule,
        OrderByModule,
        instanceRouting,
    ],
    providers: [
        InstanceService,
    ]
})
export class InstanceModule {}