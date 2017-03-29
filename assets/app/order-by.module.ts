import {NgModule} from "@angular/core";
import {OrderByPipe} from "./shared/order-by.pipe";

@NgModule({
    declarations: [OrderByPipe],
    exports: [OrderByPipe]
})
export class OrderByModule {}