import { Component, OnInit } from "@angular/core";

import { Instance } from "../instance.model";
import { InstanceService } from "../../shared/instance.service";
import { FlashMessageService } from "../../flash-message/flash-messages.service";
import {SessionStorageService} from "../../shared/session-storage.service";

@Component({
    selector: 'app-instance-list',
    templateUrl: './instance-list.component.html'
})
export class InstanceListComponent implements OnInit {
    instances: Instance[];
    defaultOrder: number;

    constructor(private instanceService: InstanceService,
                private sessionStorageService: SessionStorageService,
                private flashMessageService: FlashMessageService) {

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
                    this.flashMessageService.showMessage('Instance was deleted', 'success'  );
                },
                error => console.error(error)
            );
    }

    onDownload(instance: Instance){
        this.instanceService.getInstance(instance.instanceId)
            .subscribe(
                instance => {
                    this.instanceService.download(instance);
                },
                error => console.log("Error downloading the file."))
    }

    isAdmin(){
        return this.sessionStorageService.isAdmin();
    }
}