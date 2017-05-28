/**
 * Class represents sign up model.
 */
export var SignupUser = (function () {
    function SignupUser(email, password, firstName, lastName) {
        this.email = email;
        this.password = password;
        this.firstName = firstName;
        this.lastName = lastName;
    }
    return SignupUser;
}());
