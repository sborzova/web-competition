import {NgModule} from "@angular/core";
import {EscapeHtmlPipe} from "./instances/escape-html.pipe";

@NgModule({
    declarations: [EscapeHtmlPipe],
    exports: [EscapeHtmlPipe]
})
export class EscapeHtmlModule {}