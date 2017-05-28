/**
 * Class represents author model.
 */
export var Author = (function () {
    function Author(firstName, lastName, authorId) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.authorId = authorId;
    }
    return Author;
}());
