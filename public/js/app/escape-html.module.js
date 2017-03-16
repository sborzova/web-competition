import { NgModule } from "@angular/core";
import { EscapeHtmlPipe } from "./instances/escape-html.pipe";
export var EscapeHtmlModule = (function () {
    function EscapeHtmlModule() {
    }
    EscapeHtmlModule.decorators = [
        { type: NgModule, args: [{
                    declarations: [EscapeHtmlPipe],
                    exports: [EscapeHtmlPipe]
                },] },
    ];
    /** @nocollapse */
    EscapeHtmlModule.ctorParameters = [];
    return EscapeHtmlModule;
}());
