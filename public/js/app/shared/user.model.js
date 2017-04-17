export var User = (function () {
    function User(email, password, firstName, lastName, role, confirmPassword, newPassword) {
        this.email = email;
        this.password = password;
        this.firstName = firstName;
        this.lastName = lastName;
        this.role = role;
        this.confirmPassword = confirmPassword;
        this.newPassword = newPassword;
    }
    return User;
}());
