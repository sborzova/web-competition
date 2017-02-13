import { Component, Input } from "@angular/core";

import { UsersService } from "../user.service";
import { User } from "../user.model";

@Component({
    selector: 'app-user',
    templateUrl: './user.component.html',
    providers: [ UsersService ]
})
export class UserComponent{
    @Input() user: User;
    @Input() i: number;

    constructor(private usersManagementService: UsersService) {}

    onDelete() {
        this.usersManagementService.deleteUser(this.user)
            .subscribe(
                result => console.log(result)
            );
    }
}
