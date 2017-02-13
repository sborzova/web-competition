import { Component, Input } from "@angular/core";

import { Instance } from "../instance.model";
import { InstanceService } from "../instance.service";
import {Response} from "@angular/http";

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

    onDownload(){
        this.instanceService.getInstance(this.instance.instanceId)
                .subscribe(
                    data => this.downloadFile(data.data),
                    error => console.log("Error downloading the file."))
    }

    downloadFile(data: Response){
        const blob = new Blob([data], {type: 'text/csv'});
        const url = window.URL.createObjectURL(blob);
        window.open(url);
    }
}