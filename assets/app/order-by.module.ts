import {NgModule} from "@angular/core";
import {OrderByPipe} from "./results/order-by.pipe";

@NgModule({
    declarations: [OrderByPipe],
    exports: [OrderByPipe]
})
export class OrderByModule {}