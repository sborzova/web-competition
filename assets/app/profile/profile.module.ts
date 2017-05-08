import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {profileRouting} from "./profile.routing";
import {ProfileInfoComponent} from "./profile-info/profile-info.component";
import {ProfileEditComponent} from "./profile-edit/profile-edit.component";
import {ProfileEditPasswordComponent} from "./profile-edit-password/profile-edit-password.component";
import {ReactiveFormsModule} from "@angular/forms";
import {ProfileService} from "./profile.service";
import {EqualValidatorModule} from "../equal-validator.module";

@NgModule({
    declarations: [
        ProfileInfoComponent,
        ProfileEditComponent,
        ProfileEditPasswordComponent,
    ],
    imports: [
        ReactiveFormsModule,
        CommonModule,
        profileRouting,
        EqualValidatorModule
    ],
    providers: [
        ProfileService,
    ]
})
export class ProfileModule {}