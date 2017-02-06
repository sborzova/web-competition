import {Component, OnInit, Input} from "@angular/core";

import { InstanceGroupService } from "../instance-group-new/instance-group.service";
import { FormGroup, FormControl, Validators, NgForm } from "@angular/forms";
import { InstanceGroup } from "../instance-group-new/instance-group.model";
import { AuthService } from "../auth/auth.service";
import {InstancesService} from "../instances/instances.service";

@Component({
    selector: 'app-instance-group-edit',
    templateUrl: 'instance-group-edit.component.html',
    providers: [InstanceGroupService]
})
export class InstanceGroupEditComponent implements OnInit {
    myForm: FormGroup;
    display = 'block';
    @Input() instanceGroup: InstanceGroup;

    constructor(private authService: AuthService,
                private instanceGroupService: InstanceGroupService,
                private instancesService: InstancesService){
    }

    ngOnInit(){
        this.myForm = new FormGroup({
            name: new FormControl(this.instanceGroup.name, Validators.required)});

        // this.instanceGroupService.showEditComponent()
        //     .subscribe(() => {
        //         this.display = 'block';
        //         this.myForm = new FormGroup({
        //         name: new FormControl(this.instanceGroup.name, Validators.required)
        //         })
        //     });

    }

    onSubmit(form: NgForm){
        this.instanceGroup.name = form.value.name;
        this.instancesService.editInstanceGroup(this.instanceGroup)
            .subscribe(
                data => console.log(data),
                error => console.log(error)
            );
    }

    isAdmin() : boolean {
        return this.authService.isAdmin();
    }
}