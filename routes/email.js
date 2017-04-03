var express = require('express');
var router = express.Router();

var User = require('../models/user');

router.post('/email', function (req, res) {
    var helper = require('sendgrid').mail;
    var from_email = new helper.Email('no-reply@test-cttcompetition.com');
    var to_email = new helper.Email(req.body.receiver);
    var subject = req.body.subject;
    var content = new helper.Content('text/plain', req.body.content);
    var mail = new helper.Mail(from_email, subject, to_email, content);

    var sg = require('sendgrid')('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');
    var request = sg.emptyRequest({
        method: 'POST',
        path: '/v3/mail/send',
        body: mail.toJSON(),
    });

    // sg.API(request, function(error, response) {
    //     if (error){
    //         return res.status(500).json({
    //             title: 'An error occurred',
    //             error: err
    //         });
    //     }
    //
    //     return res.status(200).json({
    //         message: 'Email send'
    //     });
    // });
});

/**
 *  change password when forgotten
 */

router.post('/emailpassword/:email', function (req, res, next) {
    User.findOne({email: req.params.email}, function(err, user) {
        if (err) {
            return res.status(500).json({
                title: 'An error occurred',
                error: err
            });
        }
        if (!user) {
            return res.status(500).json({
                title: 'No User Found!',
                error: {message: 'User not found'}
            });
        }

        var newPassword = "";
        var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

        for( var i=0; i < 10; i++ )
            newPassword += possible.charAt(Math.floor(Math.random() * possible.length));

        // user.password = bcrypt.hashSync(newPassword, 10);

        var helper = require('sendgrid').mail;
        var from_email = new helper.Email('no-reply@test-cttcompetition.com');
        var to_email = new helper.Email(req.params.email);
        var subject = 'Reset password';
        var content = new helper.Content('text/plain',
            'Dear user!/n Your new password is: ' + newPassword + '/n You can change it in your profile after login./n'
            + 'If you did not request this, please ignore this email.');
        var mail = new helper.Mail(from_email, subject, to_email, content);

        var sg = require('sendgrid')('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');
        var request = sg.emptyRequest({
            method: 'POST',
            path: '/v3/mail/send',
            body: mail.toJSON(),
        });

        // sg.API(request, function(error, response) {
        //     if (error){
        //         return res.status(500).json({
        //             title: 'An error occurred',
        //             error: err
        //         });
        //     }
        // });

        user.save(function (err, result) {
            if (err) {
                return res.status(500).json({
                    title: 'An error occurred',
                    error: err
                });
            }
            res.status(200).json({
                message: 'Updated user and email send',
                obj: {message: 'Password was updated', data: result}
            });
        });
    });
});

module.exports = router;