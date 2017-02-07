import { Component, OnInit} from "@angular/core";
import {FormGroup, FormControl, Validators} from "@angular/forms";
import { Router } from "@angular/router";

import { AuthService } from "../../auth/auth.service";
import { InstanceGroupService } from "../../instance-group-new/instance-group.service";
import { ErrorService } from "../../messages/errors/error.service";
import { InstancesService } from "../instances.service";
import {Instance} from "../instance.model";
import {SuccessService} from "../../messages/successes/success.service";

@Component({
    selector: 'app-instance-new',
    templateUrl: 'instance-new.component.html',
    providers: [InstancesService]
})
export class InstanceCreateComponent implements OnInit {
    myForm: FormGroup;
    private submitted: boolean = false;

    constructor(private authService: AuthService,
                private router: Router,
                private successService: SuccessService,
                private errorService: ErrorService) {

        this.errorService.deleteError();
        this.successService.deleteSuccess();
    }

    ngOnInit(): void {
        this.myForm = new FormGroup({
            name: new FormControl(null, Validators.required),
            courses: new FormControl(null, [Validators.required, Validators.pattern("^[0-9]+$")]),
            rooms: new FormControl(null, [Validators.required, Validators.pattern("^[0-9]+$")]),
            periodsPerDay: new FormControl(null, [Validators.required, Validators.pattern("^[0-9]+$")]),
            days: new FormControl(null, [Validators.required, Validators.pattern("^[0-9]+$")]),
            curricula: new FormControl(null, [Validators.required, Validators.pattern("^[0-9]+$")]),
            dailyMin: new FormControl(null, [Validators.required, Validators.pattern("^[0-9]+$")]),
            dailyMax: new FormControl(null, [Validators.required, Validators.pattern("^[0-9]+$")]),
        });
    }

    onSubmit(){
        this.submitted = true;
        if (this.myForm.valid){
            const instance = new Instance(
                this.myForm.value.name,
                this.myForm.value.courses,
                this.myForm.value.rooms,
                this.myForm.value.periodsPerDay,
                this.myForm.value.days,
                this.myForm.value.curricula,
                this.myForm.value.dailyMin,
                this.myForm.value.dailyMax,
            );
            // this.instanceGroupService.save(instanceGroup)
            //     .subscribe(
            //         data => console.log(data),
            //         error => console.error(error)
            //     );
            this.router.navigateByUrl('instances');
            this.myForm.reset();
        }
    }

    isSubmitted(){
        return this.submitted;
    }
}