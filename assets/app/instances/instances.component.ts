import {Component, OnInit} from '@angular/core';

import { AuthService } from "../auth/auth.service";

@Component({
    selector: 'app-instances',
    templateUrl: 'instances.component.html'
})
export class InstancesComponent implements OnInit{
    display = 'none';

    constructor(private authService: AuthService){
    }

    isAdmin(){
       return this.authService.isAdmin();
    }

    ngOnInit(){
        if (!this.authService.isLoggedIn()){
            this.display = 'block';
        }
    }
}