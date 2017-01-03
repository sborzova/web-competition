import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { HttpModule } from "@angular/http";

import { AppComponent } from "./app.component";
import { HeaderComponent } from "./header.component";
import { AuthService } from "./auth/auth.service";
import { SigninComponent } from "./auth/signin.component";
import { SignupComponent } from "./auth/signup.component";
import { routing } from "./app.routing";
import { HomeComponent } from "./home/home.component";
import { ProfileComponent } from "./profile/profile.component";
import { ProfileEditComponent } from "./profile/profileEdit.component";
import { ProfileEditpassComponent } from "./profile/profileEditpass.component";
import { UsersManagementComponent } from "./usersManagement/usersManagement.component";
import { FilesComponent } from "./files/files.component";
import { FileUploadModule} from "ng2-file-upload";

@NgModule({
    declarations: [
        AppComponent,
        HeaderComponent,
        HomeComponent,
        SigninComponent,
        SignupComponent,
        ProfileComponent,
        ProfileEditComponent,
        ProfileEditpassComponent,
        UsersManagementComponent,
        FilesComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        ReactiveFormsModule,
        HttpModule,
        routing,
        FileUploadModule
    ],
    providers: [AuthService],
    bootstrap: [AppComponent]
})
export class AppModule {

}