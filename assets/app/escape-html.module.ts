import {NgModule} from "@angular/core";
import {EscapeHtmlPipe} from "./shared/escape-html.pipe";

@NgModule({
    declarations: [EscapeHtmlPipe],
    exports: [EscapeHtmlPipe]
})
export class EscapeHtmlModule {}