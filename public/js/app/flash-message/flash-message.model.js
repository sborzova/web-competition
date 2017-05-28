/**
 * Class represents flash message model.
 */
export var FlashMessage = (function () {
    function FlashMessage(text, cssClass) {
        this.text = text;
        this.cssClass = cssClass;
    }
    return FlashMessage;
}());
