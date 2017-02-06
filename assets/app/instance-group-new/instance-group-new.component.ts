import { Component, OnInit } from "@angular/core";
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { Router } from "@angular/router";

import { AuthService } from "../auth/auth.service";
import { ErrorService } from "../messages/errors/error.service";
import { InstanceGroupService } from "./instance-group.service";
import {InstanceGroup} from "./instance-group.model";

@Component({
    selector: 'app-instance-group-new',
    templateUrl: 'instance-group-new.component.html',
    providers: [InstanceGroupService]
})
export class InstanceGroupNewComponent implements OnInit {
    myForm: FormGroup;

    constructor(private authService: AuthService,
                private router: Router,
                private instanceGroupService: InstanceGroupService,
                private errorService: ErrorService) {}

    ngOnInit(): void {
        this.myForm = new FormGroup({
            name: new FormControl(null, Validators.required)
        });
    }

    onSubmit(){
        const instanceGroup = new InstanceGroup(this.myForm.value.name);
        this.instanceGroupService.save(instanceGroup)
            .subscribe(
                data => console.log(data),
                error => console.error(error)
            );
        this.myForm.reset();
    }

    isAdmin() : boolean {
        return this.authService.isAdmin();
    }
}