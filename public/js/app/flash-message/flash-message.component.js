import { Component } from "@angular/core";
import { FlashMessageService } from "./flash-messages.service";
export var FlashMessageComponent = (function () {
    function FlashMessageComponent(flashMessageService) {
        this.flashMessageService = flashMessageService;
        this.display = 'none';
    }
    FlashMessageComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.flashMessageService.messageOccurred
            .subscribe(function (message) {
            _this.message = message;
            _this.display = 'block';
        });
    };
    FlashMessageComponent.prototype.onOk = function () {
        this.display = 'none';
    };
    FlashMessageComponent.decorators = [
        { type: Component, args: [{
                    selector: 'app-flash-message',
                    templateUrl: 'flash-message.component.html',
                },] },
    ];
    /** @nocollapse */
    FlashMessageComponent.ctorParameters = [
        { type: FlashMessageService, },
    ];
    return FlashMessageComponent;
}());
