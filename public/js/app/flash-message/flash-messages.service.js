import { EventEmitter } from "@angular/core";
import { FlashMessage } from "./flash-message.model";
/**
 * Service for managing flash messages.
 */
export var FlashMessageService = (function () {
    function FlashMessageService() {
        this.messageOccurred = new EventEmitter();
    }
    /**
     * When flash message with cssClass emit, show it.
     *
     * @param text
     * @param cssClass
     */
    FlashMessageService.prototype.showMessage = function (text, cssClass) {
        var flashMessage = new FlashMessage(text, cssClass);
        this.messageOccurred.emit(flashMessage);
    };
    return FlashMessageService;
}());
