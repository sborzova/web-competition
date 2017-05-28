/**
 * Class represents profile model.
 */
export var ProfileUser = (function () {
    function ProfileUser(email, password, firstName, lastName, confirmPassword, newPassword) {
        this.email = email;
        this.password = password;
        this.firstName = firstName;
        this.lastName = lastName;
        this.confirmPassword = confirmPassword;
        this.newPassword = newPassword;
    }
    return ProfileUser;
}());
