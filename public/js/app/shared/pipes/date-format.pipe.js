import { Pipe } from "@angular/core";
/**
 * Pipe to format date.
 */
export var DateFormatPipe = (function () {
    function DateFormatPipe() {
    }
    DateFormatPipe.prototype.transform = function (dateText) {
        if (dateText == null) {
            return console.error("Value can not be null");
        }
        var date = new Date(dateText);
        return this.getNameOfMonth(date.getMonth()) + ' ' + date.getDate() + ', ' +
            date.getFullYear() + ', ' + date.toLocaleTimeString();
    };
    DateFormatPipe.prototype.getNameOfMonth = function (number) {
        switch (number) {
            case 0:
                return 'Jan';
            case 1:
                return 'Feb';
            case 2:
                return 'Mar';
            case 3:
                return 'Apr';
            case 4:
                return 'May';
            case 5:
                return 'Jun';
            case 6:
                return 'Jul';
            case 7:
                return 'Aug';
            case 8:
                return 'Sep';
            case 9:
                return 'Oct';
            case 10:
                return 'Nov';
            case 11:
                return 'Dec';
        }
    };
    DateFormatPipe.decorators = [
        { type: Pipe, args: [{ name: 'dateFormat', pure: false },] },
    ];
    /** @nocollapse */
    DateFormatPipe.ctorParameters = [];
    return DateFormatPipe;
}());
