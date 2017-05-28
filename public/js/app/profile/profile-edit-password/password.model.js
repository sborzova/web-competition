/**
 * Class represents model for Pass
 */
export var Password = (function () {
    function Password(current, newPassword, confirmNew) {
        this.current = current;
        this.newPassword = newPassword;
        this.confirmNew = confirmNew;
    }
    return Password;
}());
