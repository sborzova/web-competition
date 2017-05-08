var express = require('express');
var router = express.Router();
var bcrypt = require('bcryptjs');
var jwt = require('jsonwebtoken');

var User = require('../models/user');

/**
 *  Reset password
 *
 *  req.body.receiver contains email of user
 */
router.post('/server/resetpassword', function (req, res, next) {
     User.findOne({email: req.body.receiver}, function(err, user) {
        if (err) {
            return res.status(500).json({
                title: 'An error occurred',
                error: err
            });
        }
        if (!user) {
            return res.status(422).json({
                title: 'No User Found!',
                error: {message: 'User not found'}
            });
        }

        var newPassword = createPassword();
        user.password = bcrypt.hashSync(newPassword, 10);
        sendEmail(newPassword, res, req.body.receiver);

        user.save(function (err, result) {
            if (err) {
                return res.status(500).json({
                    title: 'An error occurred',
                    error: err
                });
            }
            res.status(200).json({
                message: 'Updated user and email send',
                obj: result
            });
        });
    });
});

/**
 * Create password
 * @returns {string} password
 */
function createPassword() {
    var newPassword = "";
    var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

    for( var i = 0; i < 10; i++ )
        newPassword += possible.charAt(Math.floor(Math.random() * possible.length));

    return newPassword;
}

/**
 * Send email to receiver with password
 * @param password - password to send
 * @param res - respond
 * @param receiver - receiver
 */
function sendEmail(password, res, receiver) {
    var helper = require('sendgrid').mail;
    var from = new helper.Email('no-reply@testcttcompetition.herokuapp.com');
    var to = new helper.Email(receiver);
    var subject = 'Reset password';
    var content = new helper.Content('text/html',
        "<html><body>" +
        "<div>Dear user!</div>" +
        "<div></div>" +
        "<div>Your new password is: </div>"+ password +
        "<div></div>" +
        "<div>You can change it in your profile after login.</div>" +
        "<div></div>" +
        "<div></div>" +
        "<div>If you did not request this, please ignore this email.</div> " +
        "</body></html>");
    var mail = new helper.Mail(from, subject, to, content);

    var sg = require('sendgrid')(process.env.SENDGRID_API_KEY);
    var request = sg.emptyRequest({
        method: 'POST',
        path: '/v3/mail/send',
        body: mail.toJSON(),
    });

    sg.API(request, function(error, response) {
        if (error){
            return res.status(500).json({
                title: 'An error occurred',
                error: err
            });
        }
    });
}

module.exports = router;