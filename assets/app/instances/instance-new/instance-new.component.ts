import { Component, OnInit, ViewChild } from "@angular/core";
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { Router } from "@angular/router";

import { InstanceService } from "../../shared/instance.service";
import { Instance } from "../instance.model";
import { minValue } from "../min-value.validator";
import { FlashMessageService } from "../../flash-message/flash-messages.service";
import {FileService} from "../../shared/file.service";
import {InstanceCreate} from "../instance-create.model";

@Component({
    selector: 'app-instance-new',
    templateUrl: './instance-new.component.html'
})
export class InstanceCreateComponent implements OnInit {
    instanceForm: FormGroup;
    defaultOrder: number;
    submitted: boolean = false;
    statusInvalid: boolean = false;
    dataInvalid: boolean = false;
    @ViewChild('status') statusElem;
    @ViewChild('data') dataElem;

    constructor(private router: Router,
                private fileService: FileService,
                private flashMessageService: FlashMessageService,
                private instancesService: InstanceService) {

    }

    ngOnInit(){
        this.instancesService.getInstances()
            .subscribe(
                (instances: Instance[]) => {
                    let max = 0;
                    for (let instance of instances){
                        if (instance.order > max){
                            max = instance.order;
                        }
                    }
                    this.defaultOrder = max + 1;
                    this.setForm();
                },
                error => console.error(error)
            );
        this.setForm();
    }

    onSubmit(){
        this.submitted = true;
        let statusInput = this.statusElem.nativeElement;
        let dataInput = this.dataElem.nativeElement;

        if (!(statusInput.files && statusInput.files[0])){
            this.statusInvalid = true;
        }else {
            this.statusInvalid = false;
        }
        if (!(dataInput.files && dataInput.files[0])){
            return this.dataInvalid = true;
        }else {
            this.dataInvalid = false;
        }
        if (this.instanceForm.valid){
            this.saveInstance(statusInput.files[0], dataInput.files[0]);
        }
    }

    saveInstance(status: Buffer, data: Buffer){
        let idStatus;
        let idData;
        this.fileService.saveFile(status)
            .subscribe(
                status => {
                    idStatus = JSON.parse(status).id;
                    this.fileService.saveFile(data)
                        .subscribe(
                            data => {
                                idData = JSON.parse(data).id;
                                this.instancesService.saveInstance(new InstanceCreate(
                                            this.instanceForm.value.order,
                                            this.instanceForm.value.name,
                                            this.instanceForm.value.description,
                                            idStatus,
                                            idData
                                    )).subscribe(
                                           data => {
                                               this.navigateBack();
                                               this.flashMessageService.showMessage('Instance was created', 'success');
                                           },
                                            error => {
                                               console.error(error);
                                               this.fileService.deleteFile(idData);
                                               this.fileService.deleteFile(idStatus);
                                            }
                                        )
                            },
                            error => {
                                this.fileService.deleteFile(idStatus);
                                console.error(error);
                            }
                        )
                },
                error => console.error(error)
            )
    }

    setForm(){
        this.instanceForm = new FormGroup({
            order: new FormControl(this.defaultOrder, [Validators.required, minValue(1)]),
            name: new FormControl(null, Validators.required),
            description: new FormControl(null, Validators.required)
        });
    }


    onCancel(){
        this.navigateBack();
    }

    private navigateBack() {
        this.router.navigate(['/#instances']);
    }
}