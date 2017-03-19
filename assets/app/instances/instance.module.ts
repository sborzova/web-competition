import { NgModule } from "@angular/core";
import {CommonModule} from "@angular/common";
import {ReactiveFormsModule} from "@angular/forms";
import {instanceRouting} from "./instance.routing";
import {InstancesComponent} from "./instances.component";
import {InstanceListComponent} from "./instance-list/instance-list.component";
import {InstanceCreateComponent} from "./instance-new/instance-new.component";
import {InstanceEditComponent} from "./instance-update/instance-update.component";
import {InstanceStatsComponent} from "./instance-stats/instance-stats.component";
import {OrderByModule} from "../order-by.module";
import {EscapeHtmlModule} from "../escape-html.module";
import {InstanceService} from "./instance.service";
import {FlashMessageService} from "../flash-message/flash-messages.service";

@NgModule({
    declarations: [
        InstancesComponent,
        InstanceListComponent,
        InstanceCreateComponent,
        InstanceEditComponent,
        InstanceStatsComponent,
    ],
    imports: [
        ReactiveFormsModule,
        CommonModule,
        OrderByModule,
        EscapeHtmlModule,
        instanceRouting,
    ],
    providers: [
        InstanceService,
    ]
})
export class InstanceModule {}