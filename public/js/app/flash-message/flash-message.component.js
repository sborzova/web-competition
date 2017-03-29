import { Component } from "@angular/core";
import { FlashMessageService } from "./flash-messages.service";
export var FlashMessageComponent = (function () {
    function FlashMessageComponent(flashMessageService) {
        this.flashMessageService = flashMessageService;
    }
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
                    templateUrl: 'flash-message.component.html',
                    styleUrls: ['flash-message.component.css']
                },] },
    ];
    /** @nocollapse */
    FlashMessageComponent.ctorParameters = [
        { type: FlashMessageService, },
    ];
    return FlashMessageComponent;
}());
