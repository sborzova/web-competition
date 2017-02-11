import { Component, Input } from "@angular/core";

import { Instance } from "../instance.model";
import { InstanceService } from "../instance.service";

@Component({
    selector: 'app-instance',
    templateUrl: './instance.component.html'
})
export class InstanceComponent {
    @Input() instance: Instance;

    constructor(private instanceService: InstanceService) {}

    onDelete() {
        this.instanceService.deleteInstance(this.instance)
            .subscribe(
                result => console.log(result)
            );
    }

}