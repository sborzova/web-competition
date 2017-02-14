import { Pipe, PipeTransform } from "@angular/core";

@Pipe({ name: 'escapeHtml', pure: false })
export class EscapeHtmlPipe implements PipeTransform {

    transform(value: string): any {
        return value
            .replace(/(?:\r\n|\r|\n)/g, '<br />')
            .replace(/(?:\t)/g, '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;');
    }
}