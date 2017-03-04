import { EventEmitter } from "@angular/core";
import { FlashMessage } from "./flash-message.model";

export class FlashMessageService {
    messageOccurred = new EventEmitter<FlashMessage>();

    showMessage(text: string, cssClass: any) {
        const flashMessage = new FlashMessage(text, cssClass);
        this.messageOccurred.emit(flashMessage);
    }
}