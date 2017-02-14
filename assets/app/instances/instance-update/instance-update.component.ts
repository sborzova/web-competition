import { Component, OnInit, OnDestroy, ViewChild } from "@angular/core";
import { FormGroup, FormControl, Validators, NgForm } from "@angular/forms";
import { Router, ActivatedRoute, Params } from "@angular/router";

import { InstanceService } from "../instance.service";
import { ErrorService } from "../../messages/errors/error.service";
import { SuccessService } from "../../messages/successes/success.service";
import { Instance } from "../instance.model";

@Component({
    selector: 'app-instance-edit',
    templateUrl: 'instance-update.component.html',
    providers: [InstanceService]
})
export class InstanceEditComponent implements OnInit, OnDestroy {
    myForm: FormGroup;
    private instance: Instance;
    private submitted: boolean = false;
    @ViewChild('stats') statsElem;
    @ViewChild('data') dataElem;

    constructor(private router: Router,
                private errorService: ErrorService,
                private successService: SuccessService,
                private instanceService: InstanceService,
                private activatedRoute: ActivatedRoute){

        this.errorService.deleteError();
        this.successService.deleteSuccess();
    }

    ngOnInit(){
        this.activatedRoute.queryParams
            .subscribe((params: Params) => {
                let instanceId = params['instanceId'];
                this.instanceService.getInstance(instanceId)
                    .subscribe(
                        (instance: Instance) => {
                            this.instance = instance;
                            this.myForm = new FormGroup({
                                name: new FormControl(this.instance.name, Validators.required),
                                description: new FormControl(this.instance.description, Validators.required)
                            });
                        });
        });
    }

    onSubmit(form: NgForm){
        this.submitted = true;

        if (form.valid){
            this.instance.name = form.value.name;
            this.instance.description = form.value.description;

            this.instanceService.updateInstanceTextFields(this.instance)
                .subscribe(
                    result => {
                        console.log(result);
                        this.navigateBack();
                    },
                    error => console.error(error)
                );
            this.saveFiles();

            this.navigateBack();
        }
    }

    ngOnDestroy(){
        //TODO unsubscribe
    }

    saveFiles(){
        let statsInput = this.statsElem.nativeElement;
        let dataInput = this.dataElem.nativeElement;
        let fd = new FormData();
        let updateFiles : boolean = false;

        if (statsInput.files && statsInput.files[0]){
            fd.append('stats', statsInput.files[0], statsInput.files[0].name);
            updateFiles = true;
        }else {
            fd.append('stats', null);
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
                    data => console.log(data),
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

    isSubmitted(){
        return this.submitted;
    }
}