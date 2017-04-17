import { Component, OnInit, ViewChild } from "@angular/core";
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { Router } from "@angular/router";

import { InstanceService } from "../../shared/instance.service";
import { Instance } from "../instance.model";
import { minValue } from "../min-value.validator";
import { FlashMessageService } from "../../flash-message/flash-messages.service";

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
                private flashMessageService: FlashMessageService,
                private instancesService: InstanceService) {

    }

    ngOnInit(): void {
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
            const instance = new Instance(
                this.instanceForm.value.order,
                this.instanceForm.value.name,
                this.instanceForm.value.description
            );

            this.instancesService.saveInstance(instance)
                .subscribe(
                    data => {
                        let id = data.instanceId;
                        let fd = new FormData();
                        fd.append('status', statusInput.files[0], statusInput.files[0].name);
                        fd.append('data', dataInput.files[0], dataInput.files[0].name);

                        this.navigateBack();
                        this.instancesService.saveFiles(fd, id)
                            .subscribe(
                                () => {
                                    this.flashMessageService.showMessage('Instance was created.', 'success' );
                                },
                                error => {
                                    console.error(error);
                                }
                            );
                    },
                    error => console.error(error)
                );

        }
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