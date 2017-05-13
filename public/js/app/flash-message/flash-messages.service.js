import { EventEmitter } from "@angular/core";
import { FlashMessage } from "./flash-message.model";
export var FlashMessageService = (function () {
    function FlashMessageService() {
        this.messageOccurred = new EventEmitter();
    }
    FlashMessageService.prototype.showMessage = function (text, cssClass) {
        var flashMessage = new FlashMessage(text, cssClass);
        this.messageOccurred.emit(flashMessage);
    };
    return FlashMessageService;
}());
