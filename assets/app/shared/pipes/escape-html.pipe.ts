import { Pipe, PipeTransform } from "@angular/core";

/**
 * Pipe to replace enter and tab space.
 */
@Pipe({ name: 'escapeHtml', pure: false })
export class EscapeHtmlPipe implements PipeTransform {

    transform(text: string): any {
        if (text == null){
            return console.error("Value can not be null");
        }
        return text
            .replace(/(?:\r\n|\r|\n)/g, '<br />')
            .replace(/(?:\t)/g, '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;');
    }
}