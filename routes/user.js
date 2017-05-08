var express = require('express');
var router = express.Router();
var bcrypt = require('bcryptjs');
var jwt = require('jsonwebtoken');

var User = require('../models/user');

/**
 * Save new user to database.
 *
 * Request body contains user.
 */
router.post('/server/user', function (req, res, next) {
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

/**
 *  Valid login credentials.
 *
 *  Request body contains login credentials.
 */
router.post('/server/signin', function(req, res, next) {
    User.findOne({email: req.body.email}, function(err, user) {
        if (err) {
            return res.status(500).json({
                title: 'An error occurred',
                error: err
            });
        }
        if (!user || (user.password === null)) {
            return res.status(401).json({
                title: 'Login failed',
                error: err
            });
        }
        if (!bcrypt.compareSync(req.body.password, user.password)) {
            return res.status(401).json({
                title: 'Login failed',
                error: err
            });
        }
        signin(req, res, user);
    });
});

/**
 *  Get logged in user from database.
 *
 *  Token contains coded logged in user.
 */
router.get('/server/user', function(req, res, next) {
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

/**
 *  Get user from database by id.
 *
 *  Parameter id - user's id.
 */
router.get('/server/user/:id', function(req, res, next) {
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

/**
 * Update user in database.
 *
 * Request body contains updated user.
 * Token contains coded logged in user.
 */
router.patch('/server/user', function (req, res, next) {
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

        user.save(function (err, result) {
            if (err) {
                return res.status(422).json({
                    title: 'An error occurred',
                    error: {message: 'Email address is already taken'}
                });
            }
            signin(req, res, user);
        });
    });
});

/**
 * Update user's password in database.
 *
 * Request body contains old and new password.
 * Token contains coded logged in user.
 */
router.patch('/server/password', function (req, res, next) {
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
                obj: result
            });
        });
    });
});

/*
 * Verify route if logged in user is admin.
 */
router.use('/server/users', function (req, res, next) {
    verify(req, res, next);
});

/**
 * Get all users from database.
 */
router.get('/server/users', function(req, res, next) {
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

/*
 * Verify route if logged in user is admin.
 */
router.use('/server/user/:id', function (req, res, next) {
    verify(req, res, next)
});

/**
 * Admin update user in database by id.
 *
 * Parameter id - user's id.
 * Request body contains updated user.
 */
router.patch('/server/user/:id', function (req, res, next) {
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

/*
 * Verify route if logged in user is admin.
 */
router.use('/server/password/:id', function (req, res, next) {
    verify(req, res, next)
});

/**
 *  Admin update user's password in database by id.
 *
 *  Parameter id - user's id.
 *  Request body contains new password.
 */
router.patch('/server/password/:id', function (req, res, next) {
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

/*
 * Verify route if logged in user is admin.
 */
router.use('/server/user/:id', function (req, res, next) {
    verify(req, res, next)
});

/**
 *  Delete user from database by id.
 *
 *  Parameter id - user's id.
 */
router.delete('/server/user/:id', function (req, res, next) {
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
                message: 'Deleted User',
                obj: result
            });
        });
    });
});

/**
 * Verify route if logged in user is admin.
 *
 * @param req request
 * @param res response
 * @param next next
 */
function verify(req, res, next) {
    jwt.verify(req.query.token, 'admin', function (err) {
        if (err) {
            return res.status(401).json({
                title: 'Not Authenticated Admin',
                error: err
            });
        }
        next();
    })
}

/**
 * Sign user in JWT according to user'role as admin or user.
 *
 * @param req - request
 * @param res - response
 * @param user - user to sign in
 * @returns {response} response
 */
function signin(req, res, user) {
    if (user.role === 'admin'){
        var token = jwt.sign({user: user}, 'admin', {expiresIn: '24h'});
        return res.status(200).json({
            message: 'Successfully logged in',
            token: token,
            userId: user._id,
            isAdmin: 'true',
            email: req.body.email
        });
    }else {
        var token = jwt.sign({user: user}, 'user', {expiresIn: '24h'});
        return res.status(200).json({
            message: 'Successfully logged in',
            token: token,
            userId: user._id,
            isAdmin: 'false',
            email: req.body.email
        });
    }
}

module.exports = router;