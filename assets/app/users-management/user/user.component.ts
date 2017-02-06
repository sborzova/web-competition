import {Component, Input} from "@angular/core";

import { UsersManagementService } from "../users-management.service";
import {User} from "../user.model";

@Component({
    selector: 'app-user',
    templateUrl: './user.component.html',
    providers: [UsersManagementService]
})
export class UserComponent{
    @Input() user: User;
    @Input() i: Number;

    constructor(private usersManagementService: UsersManagementService) {}

    onDelete() {
        this.usersManagementService.deleteUser(this.user)
            .subscribe(
                result => console.log(result)
            );
    }

}
