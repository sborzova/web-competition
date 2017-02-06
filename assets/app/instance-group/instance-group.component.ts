import {Component, Input} from "@angular/core";

import {InstanceGroup} from "../instance-group-new/instance-group.model";
import {InstancesService} from "../instances/instances.service";
import {AuthService} from "../auth/auth.service";

@Component({
    selector: 'app-instance-group',
    templateUrl: 'instance-group.component.html',
    providers: [InstancesService]
})
export class InstanceGroupComponent {
    @Input() instanceGroup: InstanceGroup;

    constructor(private instanceService: InstancesService,
                private authService: AuthService) {}

    onEdit() {
        this.instanceService.editInstanceGroup(this.instanceGroup);
    }

    onDelete() {
        this.instanceService.deleteInstanceGroup(this.instanceGroup)
            .subscribe(
                result => console.log(result)
            );
    }

    isAdmin() : boolean {
        return this.authService.isAdmin();
    }
}