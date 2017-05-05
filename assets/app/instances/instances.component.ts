import {Component, OnInit} from '@angular/core';

import {SessionStorageService} from "../shared/session-storage.service";
import {Instance} from "./instance.model";
import {InstanceService} from "../shared/instance.service";
import {FlashMessageService} from "../flash-message/flash-messages.service";

@Component({
    selector: 'app-instances',
    templateUrl: './instances.component.html'
})
export class InstancesComponent implements OnInit{
    instances: Instance[];
    defaultOrder: number;
    instance: Instance;

    constructor(private sessionStorageService: SessionStorageService,
                private instanceService: InstanceService,
                private flashMessageService: FlashMessageService){}

    ngOnInit(){
        if (!this.showInstances()){
            document.getElementById('openModalNotView').click();
        }else {
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
    }

    showInstances(){
        let isLoggedIn = this.isLoggedIn();
        let competitionIsOn = this.competitionIsOn();
        let isAdmin = this.isAdmin();

        return !competitionIsOn || isAdmin || (competitionIsOn && isLoggedIn);
    }

    isAdmin(){
       return this.sessionStorageService.isAdmin();
    }

    isLoggedIn(){
        return this.sessionStorageService.isLoggedIn();
    }

    competitionIsOn(){
        return this.sessionStorageService.getCompetitionIsOn();
    }

    onDelete(instance: Instance) {
        this.instance = instance;
        document.getElementById('openModalDelete').click();
    }

    onDownload(instance: Instance){
        this.instanceService.getInstance(instance.instanceId)
            .subscribe(
                instance => {
                    this.instanceService.download(instance);
                },
                error => console.log("Error downloading the file."))
    }

    onOk(){
        this.instanceService.deleteInstance(this.instance)
            .subscribe(
                result => {
                    this.instance = null;
                    this.flashMessageService.showMessage('Instance was deleted', 'success'  );
                },
                error => console.error(error)
            );
    }
}
