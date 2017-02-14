import { Component, Input } from "@angular/core";

import { Instance } from "../instance.model";
import { InstanceService } from "../instance.service";

@Component({
    selector: 'app-instance',
    templateUrl: './instance.component.html'
})
export class InstanceComponent {
    @Input() instance: Instance;
    fileSaver = require('file-saver');

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
                data => {
                    let filename = data.name;
                    let file = new File([data.data], filename.concat('.xml'), {type: "text/xml;charset=utf-8"});
                    this.fileSaver.saveAs(file);
                },
                error => console.log("Error downloading the file."))
    }
}