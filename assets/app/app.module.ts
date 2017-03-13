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
import { ProfileInfoComponent } from "./profile/profile-info/profile-info.component";
import { ProfileEditComponent } from "./profile/profile-edit/profile-edit.component";
import { ProfileEditPasswordComponent } from "./profile/profile-edit-password/profile-edit-password.component";
import { UsersComponent } from "./users/users.component";
import { EqualValidator } from "./auth/validator-equal.directive";
import { InstancesComponent } from "./instances/instances.component";
import { InstanceCreateComponent } from "./instances/instance-new/instance-new.component";
import { InstanceEditComponent } from "./instances/instance-update/instance-update.component";
import { InstanceListComponent } from "./instances/instance-list/instance-list.component";
import { InstanceStatsComponent } from "./instances/instance-stats/instance-stats.component";
import { EscapeHtmlPipe } from "./instances/escape-html.pipe";
import { UsersService } from "./users/user.service";
import { InstanceService } from "./instances/instance.service";
import { ValidationComponent } from "./validation/validation.component";
import { SolutionService } from "./validation/solution.service";
import { UserSolutionsComponent } from "./user-solutions/user-solutions.component";
import { PaperService } from "./user-solutions/paper.service";
import { SuccessValidationComponent } from "./validation/success-validation/success-validation.component";
import { FlashMessageComponent } from "./flash-message/flash-message.component";
import { FlashMessageService} from "./flash-message/flash-messages.service";
import { WorseSolutionsComponent } from "./validation/worse-solutions/worse-solutions.component";
import { ResultsComponent } from "./results/results.component";
import { ResultsBestComponent } from "./results/results-best/results-best.component";
import { ResultsInstanceComponent } from "./results/results-instance/results-instance.component";
import { ResultsAuthorComponent } from "./results/results-author/results-author.component";
import { ResultsAuthorTechniqueComponent } from "./results/results-author-technique/results-author-technique.component";
import { OrderByPipe } from "./results/order-by.pipe";
import { ValidatorInfoComponent } from "./user-solutions/validator-info/validator-info.component";
import { UserEditComponent } from "./users/user-edit/user-edit.component";
import { UserEditPasswordComponent } from "./users/user-edit-password/user-edit-password.component";
import { PreferenceComponent } from "./preference/preference.component";

@NgModule({
    declarations: [
        AppComponent,
        FlashMessageComponent,
        HeaderComponent,
        HomeComponent,
        SigninComponent,
        SignupComponent,
        UserSolutionsComponent,
        ProfileInfoComponent,
        ProfileEditComponent,
        ProfileEditPasswordComponent,
        UsersComponent,
        InstancesComponent,
        InstanceListComponent,
        InstanceCreateComponent,
        InstanceEditComponent,
        InstanceStatsComponent,
        ValidationComponent,
        SuccessValidationComponent,
        WorseSolutionsComponent,
        ResultsComponent,
        ResultsBestComponent,
        ResultsInstanceComponent,
        ResultsAuthorComponent,
        ResultsAuthorTechniqueComponent,
        ValidatorInfoComponent,
        UserEditComponent,
        UserEditPasswordComponent,
        PreferenceComponent,
        EqualValidator,
        EscapeHtmlPipe,
        OrderByPipe
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
        UsersService,
        InstanceService,
        SolutionService,
        PaperService,
        FlashMessageService
    ],
    bootstrap: [ AppComponent ]
})
export class AppModule {

}