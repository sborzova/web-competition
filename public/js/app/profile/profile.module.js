import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { profileRouting } from "./profile.routing";
import { ProfileInfoComponent } from "./profile-info/profile-info.component";
import { ProfileEditComponent } from "./profile-edit/profile-edit.component";
import { ProfileEditPasswordComponent } from "./profile-edit-password/profile-edit-password.component";
import { ReactiveFormsModule } from "@angular/forms";
import { UserService } from "../shared/user.service";
export var ProfileModule = (function () {
    function ProfileModule() {
    }
    ProfileModule.decorators = [
        { type: NgModule, args: [{
                    declarations: [
                        ProfileInfoComponent,
                        ProfileEditComponent,
                        ProfileEditPasswordComponent,
                    ],
                    imports: [
                        ReactiveFormsModule,
                        CommonModule,
                        profileRouting,
                    ],
                    providers: [
                        UserService,
                    ]
                },] },
    ];
    /** @nocollapse */
    ProfileModule.ctorParameters = [];
    return ProfileModule;
}());