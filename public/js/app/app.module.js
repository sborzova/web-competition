import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from "@angular/http";
import { AppComponent } from "./app.component";
import { HeaderComponent } from "./header/header.component";
import { routing } from "./app.routing";
import { HomeComponent } from "./home/home.component";
import { PreferenceService } from "./preference/preference.service";
import { SessionStorageService } from "./shared/services/session-storage.service";
import { FlashMessageComponent } from "./flash-message/flash-message.component";
import { FlashMessageService } from "./flash-message/flash-messages.service";
export var AppModule = (function () {
    function AppModule() {
    }
    AppModule.decorators = [
        { type: NgModule, args: [{
                    declarations: [
                        AppComponent,
                        HeaderComponent,
                        HomeComponent,
                        FlashMessageComponent
                    ],
                    imports: [
                        BrowserModule,
                        HttpModule,
                        routing,
                    ],
                    providers: [
                        PreferenceService,
                        SessionStorageService,
                        FlashMessageService
                    ],
                    bootstrap: [AppComponent]
                },] },
    ];
    /** @nocollapse */
    AppModule.ctorParameters = [];
    return AppModule;
}());
