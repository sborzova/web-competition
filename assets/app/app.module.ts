import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from "@angular/http";

import { AppComponent } from "./app.component";
import { HeaderComponent } from "./header/header.component";
import { AuthService } from "./auth/auth.service";
import { routing } from "./app.routing";
import { HomeComponent } from "./home/home.component";
import { UsersService } from "./users/user.service";
import { InstanceService } from "./instances/instance.service";
import { SolutionService } from "./validation/solution.service";
import { PaperService } from "./user-solutions/paper.service";
import { FlashMessageComponent } from "./flash-message/flash-message.component";
import { FlashMessageService} from "./flash-message/flash-messages.service";

@NgModule({
    declarations: [
        AppComponent,
        FlashMessageComponent,
        HeaderComponent,
        HomeComponent,
    ],
    imports: [
        BrowserModule,
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