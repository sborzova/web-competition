var express = require('express');
var router = express.Router();
var bcrypt = require('bcryptjs');
var jwt = require('jsonwebtoken');

var User = require('../models/user');

router.get('/users', function(req, res, next) {
    User.find(function(err, users) {
        if (err) {
            return res.status(500).json({
                title: 'An error occurred',
                error: err
            });
        }
        if (!users) {
            return res.status(500).json({
                title: 'No Users Found!',
                error: {message: 'User not found'}
            });
        }
        res.status(200).json({
            message: 'Success',
            obj: users
        });
    });
});

router.delete('/user/:id', function (req, res, next) {
    //var decoded = jwt.decode(req.query.token);
    User.findById(req.params.id, function (err, user) {
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
        user.remove(function (err, result) {
            if (err) {
                return res.status(500).json({
                    title: 'An error occurred',
                    error: err
                });
            }
            res.status(200).json({
                message: 'Deleted user',
                obj: {message: 'User ' + user.email + ' was deleted.'}
            });
        });
    });
});

module.exports = router;