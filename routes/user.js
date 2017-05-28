var express = require('express');
var router = express.Router();
var bcrypt = require('bcryptjs');
var jwt = require('jsonwebtoken');

var User = require('../models/user');

/**
 * Save new user to database.
 *
 * Request - contains user's properties.
 * Response - contains saved user or error.
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
            return res.status(500).json({
                title: 'An error occurred',
                error: err
            });
        }
        res.status(201).json({
            message: 'User created',
            obj: result
        });
    });
});

/**
 *  Valid login credentials. In case of success call function to log user in app.
 *
 *  Request - contains login credentials.
 *  Response - contains logged in user or error.
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
 *  Token - contains logged in user.
 *  Response - contains user or error.
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
 *  Response - contains user or error.
 */
router.get('/server/admin/user/:id', function(req, res, next) {
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
 * Handle request for update user in database.
 *
 * Request - contains updated user.
 * Token - contains logged in user.
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
                return res.status(500).json({
                    title: 'An error occurred',
                    error: err
                });
            }
            signin(req, res, user);
        });
    });
});

/**
 * Update user's password in database.
 *
 * Request - contains old and new password.
 * Token - logged in user.
 * Response - contains updated user or error.
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

/**
 * Get all users from database.
 *
 * Response - contains users or error.
 */
router.get('/server/admin/users', function(req, res, next) {
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

/**
 * Admin updates user in database. In case of change of user's role,
 * check admin's password
 *
 * Parameter id - user's id.
 * Request - contains user's updated properties and admin's password.
 * Response - contains updated user or error.
 */
router.patch('/server/admin/user/:id', function (req, res, next) {
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

        if (user.role !== req.body.role){
            checkAdminSaveUser(req, res, user)
        }else {
            saveUser(req, res, user);
        }
    });
});

/**
 *  Admin update user's password in database.
 *
 *  Parameter id - user's id.
 *  Request - contains new password.
 *  Response - contains updated user or error.
 */
router.patch('/server/admin/password/:id', function (req, res, next) {
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

/**
 *  Delete user from database by id.
 *
 *  Parameter id - user's id.
 *  Response - contains deleted user or error.
 */
router.delete('/server/admin/user/:id', function (req, res, next) {
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
 * Sign user in JWT according to user's role as admin or user.
 *
 * @param req - request
 * @param res - response
 * @param user - user to sign in
 * @returns response - contains token, user's id, user's e-mail, isAdmin:true or false
 */
function signin(req, res, user) {
    if (user.role === 'admin'){
        var token = jwt.sign({user: user}, process.env.SECRET_ADMIN, {expiresIn: '24h'});
        return res.status(200).json({
            message: 'Successfully logged in',
            token: token,
            userId: user._id,
            isAdmin: 'true',
            email: req.body.email
        });
    }else {
        var token = jwt.sign({user: user}, process.env.SECRET, {expiresIn: '24h'});
        return res.status(200).json({
            message: 'Successfully logged in',
            token: token,
            userId: user._id,
            isAdmin: 'false',
            email: req.body.email
        });
    }
}

/**
 * Check admin's password and update user in database.
 *
 * @param req - request contains token with user
 * @param res - response to send back
 * @param user - updated user
 *
 * Response contains updated user or error.
 */
function checkAdminSaveUser(req, res, user) {
    var decoded = jwt.decode(req.query.token);
    User.findOne({email: decoded.user.email}, function(err, admin) {
        if (err) {
            return res.status(500).json({
                title: 'An error occurred',
                error: err
            });
        }
        if (!admin) {
            return res.status(500).json({
                title: 'No User Found!',
                error: {message: 'User not found'}
            });
        }
        if (!bcrypt.compareSync(req.body.confirmPassword, admin.password)) {
            return res.status(412).json({
                title: 'An error occured!',
                error: {message: 'Password is incorrect'}
            });
        }
        user.role = req.body.role;
        user.save(function (err, user) {
            if (err) {
                return res.status(500).json({
                    title: 'An error occurred',
                    error: err
                });
            }
            res.status(200).json({
                message: 'Updated user',
                obj: user
            });
        });
    });
}

/**
 * Update user in database.
 *
 * @param req - request
 * @param res - response to send back
 * @param user - updated user
 *
 * Response contains updated user or error.
 */
function saveUser(req, res, user) {
    user.save(function (err, user) {
        if (err) {
            return res.status(500).json({
                title: 'An error occurred',
                error: err
            });
        }
        res.status(200).json({
            message: 'Updated user',
            obj: user
        });
    });
}

module.exports = router;