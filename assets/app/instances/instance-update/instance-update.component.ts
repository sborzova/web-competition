import { Component, OnInit, OnDestroy, ViewChild, Input } from "@angular/core";
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { Router, ActivatedRoute, Params } from "@angular/router";

import { InstanceService } from "../../shared/instance.service";
import { Instance } from "../instance.model";
import { minValue } from "../min-value.validator";
import { FlashMessageService } from "../../flash-message/flash-messages.service";
import {FileService} from "../../shared/file.service";
import {FileModel} from "../file.model";
import {InstanceUpdate} from "../instance-update.model";

@Component({
    selector: 'app-instance-edit',
    templateUrl: './instance-update.component.html'
})
export class InstanceEditComponent implements OnInit {
    instanceForm: FormGroup;
    instance: Instance;
    submitted: boolean = false;
    @ViewChild('status') statusElem;
    @ViewChild('data') dataElem;

    constructor(private router: Router,
                private instanceService: InstanceService,
                private fileService: FileService,
                private route: ActivatedRoute,
                private flashMessageService: FlashMessageService){

    }

    ngOnInit(){
        let id = this.route.snapshot.params['id'];
        this.instanceService.getInstance(id)
            .subscribe(
                (instance: Instance) => {
                    console.log(instance);
                    this.instance = instance;
                    this.instanceForm = new FormGroup({
                        order: new FormControl(this.instance.order, [Validators.required, minValue(0)]),
                        name: new FormControl(this.instance.name, Validators.required),
                        description: new FormControl(this.instance.description, Validators.required)
                    });
                });
    }

    onSubmit(){
        this.submitted = true;

        if (this.instanceForm.valid){
            let updateInstance = new InstanceUpdate(
                this.instanceForm.value.order,
                this.instanceForm.value.name,
                this.instanceForm.value.description,
                this.instance.instanceId
            );

            this.instanceService.updateInstanceTextFields(updateInstance)
                .subscribe(
                    data => {
                        this.navigateBack();
                        this.flashMessageService.showMessage('Instance was updated', 'success' );
                        this.saveFiles();
                    },
                    error => console.error(error)
                );
        }
    }

    saveFiles(){
        let statusInput = this.statusElem.nativeElement;
        let dataInput = this.dataElem.nativeElement;
        if (statusInput.files && statusInput.files[0]) {
            this.fileService.updateFile(new FileModel(statusInput.files[0], this.instance.status.id))
                .subscribe(
                    data => {},
                    error => this.flashMessageService.showMessage('Something went wrong', 'danger'),
                )
        }

        if (dataInput.files && dataInput.files[0]) {
            this.fileService.updateFile(new FileModel(dataInput.files[0], this.instance.data.id))
                .subscribe(
                    data => {},
                    error => this.flashMessageService.showMessage('Something went wrong', 'danger'),
                )
        }
    }

    onCancel() {
        this.navigateBack();
    }

    private navigateBack() {
        this.router.navigate(['/#instances']);
    }
}