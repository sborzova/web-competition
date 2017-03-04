import { Component, OnInit, OnDestroy, ViewChild, Input } from "@angular/core";
import { FormGroup, FormControl, Validators, NgForm } from "@angular/forms";
import { Router, ActivatedRoute, Params } from "@angular/router";

import { InstanceService } from "../instance.service";
import { Instance } from "../instance.model";
import { Subscription } from "rxjs";
import { minValue } from "../min-value.validator";
import { FlashMessageService } from "../../flash-message/flash-messages.service";

@Component({
    selector: 'app-instance-edit',
    templateUrl: 'instance-update.component.html'
})
export class InstanceEditComponent implements OnInit, OnDestroy {
    myForm: FormGroup;
    @Input() instance: Instance;
    private submitted: boolean = false;
    @ViewChild('stats') statsElem;
    @ViewChild('data') dataElem;
    private subscription: Subscription;

    constructor(private router: Router,
                private instanceService: InstanceService,
                private activatedRoute: ActivatedRoute,
                private flashMessageService: FlashMessageService){

    }

    ngOnInit(){
        this.subscription = this.activatedRoute.queryParams
            .subscribe((params: Params) => {
                let instanceId = params['instanceId'];
                this.instanceService.getInstance(instanceId)
                    .subscribe(
                        (instance: Instance) => {
                            this.instance = instance;
                            this.myForm = new FormGroup({
                                order: new FormControl(this.instance.order, [Validators.required, minValue(0)]),
                                name: new FormControl(this.instance.name, Validators.required),
                                description: new FormControl(this.instance.description, Validators.required)
                            });
                        });
        });
    }

    ngOnDestroy(){
        this.subscription.unsubscribe();
    }

    onSubmit(form: NgForm){
        this.submitted = true;

        if (form.valid){
            this.instance.order = form.value.order;
            this.instance.name = form.value.name;
            this.instance.description = form.value.description;

            this.instanceService.updateInstanceTextFields(this.instance)
                .subscribe(
                    data => {
                        this.navigateBack();
                        this.flashMessageService.showMessage('Instance was updated', 'alert-success' );
                        this.saveFiles();
                    },
                    error => console.error(error)
                );
        }
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

    isSubmitted(){
        return this.submitted;
    }
}