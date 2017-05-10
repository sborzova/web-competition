import { Pipe } from "@angular/core";
/**
 * Pipe to replace enter and tab space.
 */
export var EscapeHtmlPipe = (function () {
    function EscapeHtmlPipe() {
    }
    EscapeHtmlPipe.prototype.transform = function (text) {
        if (text == null) {
            return console.error("Value can not be null");
        }
        return text
            .replace(/(?:\r\n|\r|\n)/g, '<br />')
            .replace(/(?:\t)/g, '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;');
    };
    EscapeHtmlPipe.decorators = [
        { type: Pipe, args: [{ name: 'escapeHtml', pure: false },] },
    ];
    /** @nocollapse */
    EscapeHtmlPipe.ctorParameters = [];
    return EscapeHtmlPipe;
}());
