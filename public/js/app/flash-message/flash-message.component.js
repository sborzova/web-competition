import { Component } from "@angular/core";
import { FlashMessageService } from "./flash-messages.service";
/**
 * Component for showing flash message.
 */
export var FlashMessageComponent = (function () {
    /**
     * When creating component, inject dependency.
     *
     * @param flashMessageService
     */
    function FlashMessageComponent(flashMessageService) {
        this.flashMessageService = flashMessageService;
    }
    /**
     * When creating component, create subscription for occurring message.
     * When message occurs, show it.
     */
    FlashMessageComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.flashMessageService.messageOccurred
            .subscribe(function (message) {
            _this.message = message;
            document.getElementById('openFlashMessage').click();
        });
    };
    FlashMessageComponent.decorators = [
        { type: Component, args: [{
                    selector: 'app-flash-message',
                    templateUrl: './flash-message.component.html',
                    styleUrls: ['flash-message.component.css']
                },] },
    ];
    /** @nocollapse */
    FlashMessageComponent.ctorParameters = [
        { type: FlashMessageService, },
    ];
    return FlashMessageComponent;
}());
