import { Component, OnInit } from "@angular/core";

import { Instance } from "../instance.model";
import { InstanceService } from "../instance.service";
import { AuthService } from "../../auth/auth.service";
import {FlashMessagesService} from "angular2-flash-messages";

@Component({
    selector: 'app-instance-list',
    templateUrl: './instance-list.component.html'
})
export class InstanceListComponent implements OnInit {
    instances: Instance[];
    defaultOrder: number;
    fileSaver = require('file-saver');

    constructor(private instanceService: InstanceService,
                private authService: AuthService,
                private flashMessagesService: FlashMessagesService) {

    }

    ngOnInit() {
        this.instanceService.getInstances()
            .subscribe(
                (instances: Instance[]) => {
                    this.instances = instances;
                    let max = 0;
                    for (let instance of instances){
                        if (instance.order > max){
                            max = instance.order;
                        }
                    }
                    this.defaultOrder = max + 1;
                }
            );
    }

    onDelete(instance: Instance) {
        this.instanceService.deleteInstance(instance)
            .subscribe(
                result => {
                    this.flashMessagesService.grayOut(true);
                    this.flashMessagesService.show('Instance was deleted', { cssClass: 'alert-success', timeout:1700 } );
                },
                error => console.error(error)
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

    isAdmin(){
        return this.authService.isAdmin();
    }
}