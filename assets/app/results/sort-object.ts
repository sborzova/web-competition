import { Pipe } from "@angular/core";

@Pipe({ name: "sortByObject" })

export class SortObjectPipe{
    transform(array: Array<any>, args: any): Array<any> {
        array.sort((a: any, b: any) => {
            if ( a.order[args] < b.order[args] ){
                return -1;
            }else if( a.order[args] > b.order[args] ){
                return 1;
            }else{
                return 0;
            }
        });
        return array;
    }
}