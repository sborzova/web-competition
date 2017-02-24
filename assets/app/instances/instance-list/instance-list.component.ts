import { Component, OnInit } from "@angular/core";

import { Instance } from "../instance.model";
import { InstanceService } from "../instance.service";

@Component({
    selector: 'app-instance-list',
    templateUrl: './instance-list.component.html'
})
export class InstanceListComponent implements OnInit {
    instances: Instance[];
    fileSaver = require('file-saver');

    constructor(private instanceService: InstanceService) {

    }

    ngOnInit() {
        this.instanceService.getInstances()
            .subscribe(
                (instances: Instance[]) => {
                    this.instances = instances;
                }
            );
    }

    onDelete(instance: Instance) {
        this.instanceService.deleteInstance(instance)
            .subscribe(
                result => console.log(result)
            );
    }

    onDownload(instance: Instance){
        this.instanceService.getInstance(instance.instanceId)
            .subscribe(
                data => {
                    let filename = data.name;
                    let file = new File([data.data], filename.concat('.xml'), {type: "text/xml;charset=utf-8"});
                    this.fileSaver.saveAs(file);
                },
                error => console.log("Error downloading the file."))
    }
}