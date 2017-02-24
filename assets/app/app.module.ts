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
import { UserInfoComponent } from "./auth/user/user.component";
import { UserEditComponent } from "./auth/user-edit/user-edit.component";
import { UserEditPasswordComponent } from "./auth/user-edit-password/user-edit-password.component";
import { UsersComponent } from "./users/users.component";
import { EqualValidator } from "./auth/validator-equal.directive";
import { ErrorComponent } from "./messages/errors/error.component";
import { ErrorService } from "./messages/errors/error.service";
import { InstancesComponent } from "./instances/instances.component";
import { SuccessComponent } from "./messages/successes/success.component";
import { SuccessService } from "./messages/successes/success.service";
import { InstanceCreateComponent } from "./instances/instance-new/instance-new.component";
import { InstanceEditComponent } from "./instances/instance-update/instance-update.component";
import { InstanceListComponent } from "./instances/instance-list/instance-list.component";
import { InstanceStatsComponent } from "./instances/instance-stats/instance-stats.component";
import { EscapeHtmlPipe } from "./instances/escape-html.pipe";
import { UsersService } from "./users/user.service";
import { InstanceService } from "./instances/instance.service";
import { ValidationComponent } from "./validation/validation.component";
import { SolutionService } from "./validation/solution.service";
import { ProfileComponent } from "./auth/profile/profile.component";
import { UserSolutionsComponent } from "./auth/user-solutions/user-solutions.component";
import { PaperService } from "./auth/paper.service";

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
        UserSolutionsComponent,
        UserInfoComponent,
        UserEditComponent,
        UserEditPasswordComponent,
        UsersComponent,
        InstancesComponent,
        InstanceListComponent,
        InstanceCreateComponent,
        InstanceEditComponent,
        InstanceStatsComponent,
        ValidationComponent,
        EqualValidator,
        EscapeHtmlPipe
    ],
    imports: [
        BrowserModule,
        FormsModule,
        ReactiveFormsModule,
        HttpModule,
        routing
    ],
    providers: [
        AuthService,
        ErrorService,
        SuccessService,
        UsersService,
        InstanceService,
        SolutionService,
        PaperService
    ],
    bootstrap: [ AppComponent ]
})
export class AppModule {

}