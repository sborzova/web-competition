import { Component, OnInit, OnDestroy, ViewChild, Input } from "@angular/core";
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { Router, ActivatedRoute, Params } from "@angular/router";

import { InstanceService } from "../../shared/instance.service";
import { Instance } from "../instance.model";
import { Subscription } from "rxjs";
import { minValue } from "../min-value.validator";
import { FlashMessageService } from "../../flash-message/flash-messages.service";

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
                private route: ActivatedRoute,
                private flashMessageService: FlashMessageService){

    }

    ngOnInit(){
        let id = this.route.snapshot.params['id'];
        this.instanceService.getInstance(id)
            .subscribe(
                (instance: Instance) => {
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
            this.instance.order = this.instanceForm.value.order;
            this.instance.name = this.instanceForm.value.name;
            this.instance.description = this.instanceForm.value.description;

            this.instanceService.updateInstanceTextFields(this.instance)
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
        let fd = new FormData();
        let updateFiles : boolean = false;

        if (statusInput.files && statusInput.files[0]){
            fd.append('status', statusInput.files[0], statusInput.files[0].name);
            updateFiles = true;
        }else {
            fd.append('status', null);
        }

        if (dataInput.files && dataInput.files[0]){
            fd.append('data', dataInput.files[0], dataInput.files[0].name);
            updateFiles = true;
        }else {
            fd.append('data', null);
        }

        if (updateFiles){
            this.instanceService.saveFiles(fd, this.instance.instanceId)
                .subscribe(
                    () => console.log("Data was saved"),
                    error => console.error(error)
                );
        }
    }

    onCancel() {
        this.navigateBack();
    }

    private navigateBack() {
        this.router.navigate(['/#instances']);
    }
}