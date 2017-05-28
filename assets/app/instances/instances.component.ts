import {Component, OnInit} from '@angular/core';

import {SessionStorageService} from "../shared/services/session-storage.service";
import {Instance} from "./instance.model";
import {InstanceService} from "../shared/services/instance.service";
import {FlashMessageService} from "../flash-message/flash-messages.service";

/**
 * Component for showing all instance and managing them.
 */
@Component({
    selector: 'app-instances',
    templateUrl: './instances.component.html'
})
export class InstancesComponent implements OnInit{
    instances: Instance[];
    private instance: Instance;

    /**
     * When creating component, inject dependencies.
     *
     * @param sessionStorageService
     * @param instanceService
     * @param flashMessageService
     */
    constructor(private sessionStorageService: SessionStorageService,
                private instanceService: InstanceService,
                private flashMessageService: FlashMessageService){}

    /**
     * When creating component, check if instance component can be shown.
     * If component can be shown, call function to get all instances.
     */
    ngOnInit(){
        if (!this.showInstances()){
            document.getElementById('openModalNotView').click();
        }else {
            this.instanceService.getInstances()
                .subscribe(
                    (instances: Instance[]) => {
                        this.instances = instances;
                    }
                );
        }
    }

    /**
     * Return true if instance component can be shown, other way false.
     *
     * @returns {boolean} true if logged in user is admin or competition state is off
     *  or (competition state is on and user is logged in), other way false
     */
    showInstances(){
        let isLoggedIn = this.isLoggedIn();
        let competitionIsOn = this.competitionIsOn();
        let isAdmin = this.isAdmin();

        return !competitionIsOn || isAdmin || (competitionIsOn && isLoggedIn);
    }

    /**
     * Open modal dialog to show delete ensure question.
     *
     * @param instance
     */
    onDelete(instance: Instance) {
        this.instance = instance;
        document.getElementById('openModalDelete').click();
    }

    /**
     * Call function to get instance populated with all properties and then download instance's data.
     *
     * @param instance
     */
    onDownload(instance: Instance){
        this.instanceService.getInstance(instance.instanceId)
            .subscribe(
                instance => {
                    this.instanceService.download(instance);
                },
                error => console.log("Error downloading the file."))
    }

    /**
     * Call function to delete instance which is stored in variable instance.
     */
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

    isAdmin(){
        return this.sessionStorageService.isAdmin();
    }

    isLoggedIn(){
        return this.sessionStorageService.isLoggedIn();
    }

    competitionIsOn(){
        return this.sessionStorageService.getCompetitionIsOn();
    }
}
