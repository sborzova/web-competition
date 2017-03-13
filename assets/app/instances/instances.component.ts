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


    ngOnInit(){
        if (!this.isLoggedIn()){
            this.display = 'block';
        }
    }

    isAdmin(){
       return this.authService.isAdmin();
    }

    isLoggedIn(){
        return this.authService.isLoggedIn();
    }
}
