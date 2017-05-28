import { Component, OnInit} from "@angular/core";
import { FlashMessage } from "./flash-message.model";
import { FlashMessageService } from "./flash-messages.service";

/**
 * Component for showing flash message.
 */
@Component({
    selector: 'app-flash-message',
    templateUrl: './flash-message.component.html',
    styleUrls: ['flash-message.component.css']
})
export class FlashMessageComponent implements OnInit {
    message: FlashMessage;

    /**
     * When creating component, inject dependency.
     *
     * @param flashMessageService
     */
    constructor(private flashMessageService: FlashMessageService){
    }

    /**
     * When creating component, create subscription for occurring message.
     * When message occurs, show it.
     */
    ngOnInit(){
        this.flashMessageService.messageOccurred
            .subscribe(
                (message: FlashMessage) => {
                    this.message = message;
                    document.getElementById('openFlashMessage').click();
                }
            )
    }

}