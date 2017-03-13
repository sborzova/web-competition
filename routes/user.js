var express = require('express');
var router = express.Router();
var bcrypt = require('bcryptjs');
var jwt = require('jsonwebtoken');

var User = require('../models/user');

router.post('/', function (req, res, next) {
    try{
        var user = new User({
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            password: bcrypt.hashSync(req.body.password, 10),
            email: req.body.email
        });
    } catch (err){
        return res.status(500).json({
            title: 'An error occurred',
            error: err
        });
    }

    user.save(function(err, result) {
        if (err) {
            return res.status(422).json({
                title: 'An error occurred',
                error: {message: 'Email address is already taken'}
            });
        }
        res.status(201).json({
            message: 'User created',
            obj: result
        });
    });
});

router.post('/signin', function(req, res, next) {
    User.findOne({email: req.body.email}, function(err, user) {
        if (err) {
            return res.status(500).json({
                title: 'An error occurred',
                error: err
            });
        }
        if (!user || (user.password == null)) {
            return res.status(401).json({
                title: 'Login failed',
                error: {message: 'Invalid login credentials'}
            });
        }
        if (!bcrypt.compareSync(req.body.password, user.password)) {
            return res.status(401).json({
                title: 'Login failed',
                error: {message: 'Invalid login credentials'}
            });
        }
        var token = jwt.sign({user: user}, 'secret', {expiresIn: 7200});

        if (user.role === 'admin'){
            return res.status(200).json({
                message: 'Successfully logged in',
                token: token,
                userId: user._id,
                isAdmin: 'true',
                email: req.body.email
            });
        }
        res.status(200).json({
            message: 'Successfully logged in',
            token: token,
            userId: user._id,
            isAdmin: 'false',
            email: req.body.email
        });
    });
});

router.get('/user', function(req, res, next) {
    var decoded = jwt.decode(req.query.token);
    User.findOne({email: decoded.user.email}, function(err, user) {
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
        res.status(200).json({
            message: 'Success',
            obj: user
        });
    });
});

router.get('/user/:id', function(req, res, next) {
    User.findById(req.params.id, function(err, user) {
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
        res.status(200).json({
            message: 'Success',
            obj: user
        });
    });
});

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
                    error: {message: "User can not be deleted", error: err}
                });
            }
            res.status(200).json({
                message: 'Deleted profile-info',
                obj: {message: 'User ' + user.email + ' was deleted'}
            });
        });
    });
});

router.patch('/user', function (req, res, next) {
    var decoded = jwt.decode(req.query.token);
    User.findOne({email: decoded.user.email}, function(err, user) {
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

        user.firstName = req.body.firstName;
        user.lastName = req.body.lastName;
        user.email = req.body.email;
        user.password = bcrypt.hashSync(req.body.password, 10);

        user.save(function (err, result) {
            if (err) {
                return res.status(422).json({
                    title: 'An error occurred',
                    error: {message: 'Email address is already taken'}
                });
            }

            var token = jwt.sign({user: user}, 'secret', {expiresIn: 7200});

            if (user.role === 'admin'){
                return res.status(200).json({
                    message: 'Updated user',
                    token: token,
                    userId: user._id,
                    isAdmin: 'true',
                    email: req.body.email
                });
            }
            res.status(200).json({
                message: 'Updated user',
                token: token,
                userId: user._id,
                isAdmin: 'false',
                email: req.body.email
            });
        });
    });
});

router.patch('/user/:id', function (req, res, next) {
    User.findById(req.params.id, function(err, user) {
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

        user.firstName = req.body.firstName;
        user.lastName = req.body.lastName;
        user.email = req.body.email;
        user.role = req.body.role;

        user.save(function (err, user) {
            if (err) {
                return res.status(422).json({
                    title: 'An error occurred',
                    error: {message: 'Email address is already taken'}
                });
            }

            res.status(200).json({
                message: 'Updated user',
                obj: user
            });
        });
    });
});

router.patch('/password', function (req, res, next) {
    var decoded = jwt.decode(req.query.token);
    User.findOne({email: decoded.user.email}, function(err, user) {
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

        if (!bcrypt.compareSync(req.body.confirmPassword, user.password)) {
            return res.status(412).json({
                title: 'An error occured!',
                error: {message: 'Current password is incorrect'}
            });
        }
        user.password = bcrypt.hashSync(req.body.newPassword, 10);

        user.save(function (err, result) {
            if (err) {
                return res.status(500).json({
                    title: 'An error occurred',
                    error: err
                });
            }
            res.status(200).json({
                message: 'Updated user',
                obj: {message: 'Password was updated', data: result}
            });
        });
    });
});

router.patch('/password/:id', function (req, res, next) {
    User.findById(req.params.id, function(err, user) {
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

        user.password = bcrypt.hashSync(req.body.password, 10);

        user.save(function (err, result) {
            if (err) {
                return res.status(500).json({
                    title: 'An error occurred',
                    error: err
                });
            }
            res.status(200).json({
                message: 'Updated user',
                obj: {message: 'Password was updated', data: result}
            });
        });
    });
});

module.exports = router;