import { Component } from '@angular/core';
/**
 * Basic component creating when bootstraping
 */
export var AppComponent = (function () {
    function AppComponent() {
    }
    AppComponent.decorators = [
        { type: Component, args: [{
                    selector: 'my-app',
                    templateUrl: './app.component.html',
                },] },
    ];
    /** @nocollapse */
    AppComponent.ctorParameters = [];
    return AppComponent;
}());
