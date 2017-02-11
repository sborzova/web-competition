import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { HttpModule } from "@angular/http";

import { AppComponent } from "./app.component";
import { HeaderComponent } from "./header/header.component";
import { AuthService } from "./auth/auth.service";
import { SigninComponent } from "./auth/signin/signin.component";
import { SignupComponent } from "./auth/signup/signup.component";
import { routing } from "./app.routing";
import { HomeComponent } from "./home/home.component";
import { ProfileComponent } from "./profile/profile.component";
import { ProfileEditComponent } from "./profile/profile-edit/profile-edit.component";
import { ProfileEditPasswordComponent } from "./profile/profile-edit-password/profile-edit-password.component";
import { UsersManagementComponent } from "./users-management/users-management.component";
import { FileUploadModule} from "ng2-file-upload";
import { EqualValidator } from "./auth/validator-equal.directive";
import { ErrorComponent } from "./messages/errors/error.component";
import { ErrorService } from "./messages/errors/error.service";
import { InstancesComponent } from "./instances/instances.component";
import { UserComponent } from "./users-management/user/user.component";
import { SuccessComponent } from "./messages/successes/success.component";
import { SuccessService } from "./messages/successes/success.service";
import { InstanceCreateComponent } from "./instances/instance-new/instance-new.component";
import { InstanceEditComponent } from "./instances/instance-edit/instance-edit.component";
import { TechniquesComponent } from "./techniques/techniques.component";
import { TechniqueCreateComponent } from "./techniques/technique-new/technique-new.component";
import { TechniqueComponent } from "./techniques/technique/technique.component";
import { TechniqueListComponent } from "./techniques/technique-list/technique-list.component";
import { TechniqueUpdateComponent } from "./techniques/technique-update/technique-update.component";

@NgModule({
    declarations: [
        AppComponent,
        ErrorComponent,
        SuccessComponent,
        HeaderComponent,
        HomeComponent,
        SigninComponent,
        SignupComponent,
        ProfileComponent,
        ProfileEditComponent,
        ProfileEditPasswordComponent,
        UsersManagementComponent,
        InstancesComponent,
        InstanceCreateComponent,
        InstanceEditComponent,
        UserComponent,
        TechniquesComponent,
        TechniqueCreateComponent,
        TechniqueUpdateComponent,
        TechniqueComponent,
        TechniqueListComponent,
        EqualValidator
    ],
    imports: [
        BrowserModule,
        FormsModule,
        ReactiveFormsModule,
        HttpModule,
        routing,
        FileUploadModule,
    ],
    providers: [
        AuthService,
        ErrorService,
        SuccessService
    ],
    bootstrap: [ AppComponent ]
})
export class AppModule {

}