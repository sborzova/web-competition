import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ReactiveFormsModule } from "@angular/forms";
import { instanceRouting } from "./instance.routing";
import { InstancesComponent } from "./instances.component";
import { InstanceCreateComponent } from "./instance-new/instance-new.component";
import { InstanceEditComponent } from "./instance-update/instance-update.component";
import { InstanceStatusComponent } from "./instance-status/instance-status.component";
import { OrderByModule } from "../shared/pipes/order-by.module";
import { InstanceService } from "../shared/services/instance.service";
import { FileService } from "../shared/services/file.service";
import { DateFormatModule } from "../shared/pipes/date-format.module";
export var InstanceModule = (function () {
    function InstanceModule() {
    }
    InstanceModule.decorators = [
        { type: NgModule, args: [{
                    declarations: [
                        InstancesComponent,
                        InstanceCreateComponent,
                        InstanceEditComponent,
                        InstanceStatusComponent,
                    ],
                    imports: [
                        ReactiveFormsModule,
                        CommonModule,
                        OrderByModule,
                        instanceRouting,
                        DateFormatModule,
                    ],
                    providers: [
                        InstanceService,
                        FileService
                    ]
                },] },
    ];
    /** @nocollapse */
    InstanceModule.ctorParameters = [];
    return InstanceModule;
}());
