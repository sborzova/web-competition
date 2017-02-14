import { Component, Input } from "@angular/core";

import { UsersService } from "../user.service";
import { User } from "../user.model";

@Component({
    selector: 'app-user',
    templateUrl: './user.component.html'
})
export class UserComponent{
    @Input() user: User;
    @Input() i: number;

    constructor(private usersService: UsersService) {}

    onDelete() {
        this.usersService.deleteUser(this.user)
            .subscribe(
                result => console.log(result)
            );
    }
}
