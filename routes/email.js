var express = require('express');
var router = express.Router();
var helper = require('sendgrid').mail;

var User = require('../models/user');

router.post('/email', function (req, res) {
    User.find()
        .where('role').equals('user')
        .exec(function (err, users) {
            if (err) {
                return res.status(500).json({
                    title: 'An error occurred',
                    error: err
                });
            }
            if (!users) {
                return res.status(500).json({
                    title: 'No User Found!',
                    error: {message: 'User not found'}
                });
            }
            for (var i=0; i<users.length; i++){
                var from_email = new helper.Email('no-reply@test-cttcompetition.herokuapp.com');
                var to_email = new helper.Email('borzovasilvia@gmail.com');
                var subject = req.body.subject;
                var content = new helper.Content('text/plain', req.body.content);
                var mail = new helper.Mail(from_email, subject, to_email, content);

                var sg = require('sendgrid')('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');
                var request = sg.emptyRequest({
                    method: 'POST',
                    path: '/v3/mail/send',
                    body: mail.toJSON(),
                });

                sg.API(request, function(error, response) {
                    console.log(response.statusCode);
                    console.log(response.body);
                    console.log(response.headers);
                });
            }
        });


});


module.exports = router;