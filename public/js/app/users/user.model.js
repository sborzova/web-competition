export var User = (function () {
    function User(email, firstName, lastName, password, role, userId) {
        this.email = email;
        this.firstName = firstName;
        this.lastName = lastName;
        this.password = password;
        this.role = role;
        this.userId = userId;
    }
    return User;
}());
