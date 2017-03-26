import { Component, OnInit} from "@angular/core";
import { FlashMessage } from "./flash-message.model";
import { FlashMessageService } from "./flash-messages.service";

@Component({
    selector: 'app-flash-message',
    templateUrl: 'flash-message.component.html',
    // styleUrls: ['flash-message.component.css']
})
export class FlashMessageComponent implements OnInit {
    message: FlashMessage;
    display = 'none';

    constructor(private flashMessageService: FlashMessageService){

    }

    ngOnInit(){
        this.flashMessageService.messageOccurred
            .subscribe(
                (message: FlashMessage) => {
                    this.message = message;
                    this.display = 'block';
                }
            )
    }

    onOk(){
        this.display = 'none';
    }
}