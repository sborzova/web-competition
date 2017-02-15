import {Component, OnInit, ViewChild} from "@angular/core";
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { Router } from "@angular/router";

import { AuthService } from "../../auth/auth.service";
import { ErrorService } from "../../messages/errors/error.service";
import { InstanceService } from "../instance.service";
import { Instance } from "../instance.model";
import { SuccessService } from "../../messages/successes/success.service";

@Component({
    selector: 'app-instance-new',
    templateUrl: 'instance-new.component.html'
})
export class InstanceCreateComponent implements OnInit {
    myForm: FormGroup;
    private submitted: boolean = false;
    private statsInvalid: boolean = false;
    private dataInvalid: boolean = false;
    @ViewChild('stats') statsElem;
    @ViewChild('data') dataElem;

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
            description: new FormControl(null, Validators.required)
        });
    }

    onSubmit(){
        this.submitted = true;
        let statsInput = this.statsElem.nativeElement;
        let dataInput = this.dataElem.nativeElement;

        if (!(statsInput.files && statsInput.files[0])){
            this.statsInvalid = true;
        }else {
            this.statsInvalid = false;
        }
        if (!(dataInput.files && dataInput.files[0])){
            return this.dataInvalid = true;
        }else {
            this.dataInvalid = false;
        }
        if (this.myForm.valid){
            const instance = new Instance(
                this.myForm.value.name,
                this.myForm.value.description
            );

            this.instancesService.saveInstance(instance)
                .subscribe(
                    data => {
                        console.log(data);
                        let id = data.instanceId;
                        let fd = new FormData();
                        fd.append('stats', statsInput.files[0], statsInput.files[0].name);
                        fd.append('data', dataInput.files[0], dataInput.files[0].name);

                        this.instancesService.saveFiles(fd, id)
                            .subscribe(
                                data => console.log("Data saved"),
                                error => console.error(error)
                            );
                        this.router.navigate(['/#instances']);
                    },
                    error => console.error(error)
                );

        }
    }

    isSubmitted(){
        return this.submitted;
    }

    isStatsInvalid(){
        return this.statsInvalid;
    }

    isDataInvalid(){
        return this.dataInvalid;
    }
}