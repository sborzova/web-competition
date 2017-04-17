export var Email = (function () {
    function Email(receiver, subject, content) {
        this.receiver = receiver;
        this.subject = subject;
        this.content = content;
    }
    return Email;
}());
