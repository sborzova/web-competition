import { Component, OnInit } from "@angular/core";
import { FormGroup, FormControl, Validators, NgForm } from "@angular/forms";
import { Router } from "@angular/router";

import { InstancesService } from "../instances.service";
import { ErrorService } from "../../messages/errors/error.service";
import { SuccessService } from "../../messages/successes/success.service";
import { Instance } from "../instance.model";

@Component({
    selector: 'app-instance-edit',
    templateUrl: 'instance-edit.component.html',
    providers: [InstancesService]
})
export class InstanceEditComponent implements OnInit {
    myForm: FormGroup;
    private instance: Instance;
    private submitted: boolean = false;

    constructor(private router: Router,
                private errorService: ErrorService,
                private successService: SuccessService,
                private instancesService: InstancesService){

        this.errorService.deleteError();
        this.successService.deleteSuccess();
    }

    ngOnInit(){
        this.myForm = new FormGroup({
            name: new FormControl(this.instance.name, Validators.required),
            });
    }

    onSubmit(form: NgForm){
        this.submitted = true;
        if (form.valid){
            this.instance.name = form.value.name;


            // this.instancesService.updateInstance(this.instance)
            //     .subscribe(
            //         result => {
            //             console.log(result);
            //             this.navigateBack();
            //         },
            //         error => console.error(error)
            //     );
        }
    }

    onCancel() {
        this.navigateBack();
    }

    private navigateBack() {
        this.router.navigate(['/instances']);
    }

    isSubmitted(){
        return this.submitted;
    }
}