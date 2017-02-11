import { Component, OnInit } from "@angular/core";
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { Router } from "@angular/router";

import { AuthService } from "../../auth/auth.service";
import { ErrorService } from "../../messages/errors/error.service";
import { InstanceService } from "../instance.service";
import { Instance } from "../instance.model";
import { SuccessService } from "../../messages/successes/success.service";

@Component({
    selector: 'app-instance-new',
    templateUrl: 'instance-new.component.html',
    providers: [InstanceService]
})
export class InstanceCreateComponent implements OnInit {
    myForm: FormGroup;
    private submitted: boolean = false;

    constructor(private authService: AuthService,
                private router: Router,
                private instancesService: InstanceService,
                private successService: SuccessService,
                private errorService: ErrorService) {

        this.errorService.deleteError();
        this.successService.deleteSuccess();
    }

    ngOnInit(): void {
        this.myForm = new FormGroup({
            name: new FormControl(null, Validators.required),
            description: new FormControl(null, Validators.required),
            // stats: new FormControl(null, Validators.required),
            // data: new FormControl(null, Validators.required)
        });
    }

    onSubmit(){
        this.submitted = true;
        // if (this.myForm.valid){
        //     const instance = new Instance(
        //         this.myForm.value.name,
        //         this.myForm.value.description,
        //         this.myForm.value.stats,
        //         this.myForm.value.data
        //     );
        //     this.instancesService.saveInstance(instance)
        //         .subscribe(
        //             data => console.log(data),
        //             error => console.error(error)
        //         );
        //     this.router.navigate(['/#instances']);
        // }
    }

    isSubmitted(){
        return this.submitted;
    }
}