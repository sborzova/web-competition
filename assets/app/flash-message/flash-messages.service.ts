import { EventEmitter } from "@angular/core";
import { FlashMessage } from "./flash-message.model";

/**
 * Service for managing flash messages.
 */
export class FlashMessageService {
    messageOccurred = new EventEmitter<FlashMessage>();

    /**
     * When flash message with cssClass emit, show it.
     *
     * @param text
     * @param cssClass
     */
    showMessage(text: string, cssClass: any) {
        const flashMessage = new FlashMessage(text, cssClass);
        this.messageOccurred.emit(flashMessage);
    }
}