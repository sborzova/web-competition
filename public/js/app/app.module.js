import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from "@angular/http";
import { AppComponent } from "./app.component";
import { HeaderComponent } from "./header/header.component";
import { AuthService } from "./auth/auth.service";
import { routing } from "./app.routing";
import { HomeComponent } from "./home/home.component";
import { FlashMessageComponent } from "./flash-message/flash-message.component";
import { FlashMessageService } from "./flash-message/flash-messages.service";
export var AppModule = (function () {
    function AppModule() {
    }
    AppModule.decorators = [
        { type: NgModule, args: [{
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
                        FlashMessageService
                    ],
                    bootstrap: [AppComponent]
                },] },
    ];
    /** @nocollapse */
    AppModule.ctorParameters = [];
    return AppModule;
}());
