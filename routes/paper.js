var express = require('express');
var router = express.Router();
var bcrypt = require('bcryptjs');
var jwt = require('jsonwebtoken');

var Paper = require('../models/paper');

router.post('/paper', function (req, res) {
    try{
        var paper = new Paper({
            reference: req.body.reference,
            url: req.body.url
        });
    } catch (err){
        return res.status(500).json({
            title: 'An error occurred',
            error: err
        });
    }
    paper.save(function (err, result) {
        if (err) {
            return res.status(500).json({
                title: 'An error occurred',
                error: err
            });
        }
        res.status(201).json({
            message: 'Saved paper',
            obj: {message: 'Paper was created', data: result}
        });
    });
});

router.patch('/paper/:id', function (req, res, next) {
    Paper.findById(req.params.id, function (err, paper) {
        if (err) {
            return res.status(500).json({
                title: 'An error occurred',
                error: err
            });
        }
        if (!paper) {
            return res.status(500).json({
                title: 'No Paper Found!',
                error: {message: 'Paper not found'}
            });
        }

        paper.reference = req.body.reference;
        paper.url = req.body.url;

        paper.save(function (err, result) {
            if (err) {
                return res.status(500).json({
                    title: 'An error occurred',
                    error: err
                });
            }
            res.status(200).json({
                message: 'Updated paper',
                obj: result
            });
        });
    });
});

router.get('/paper/:id', function(req, res, next) {
    Paper.findById(req.params.id, function(err, paper) {
        if (err) {
            return res.status(500).json({
                title: 'An error occurred',
                error: err
            });
        }
        if (!paper) {
            return res.status(500).json({
                title: 'No Paper Found!',
                error: {message: 'Paper not found'}
            });
        }
        res.status(200).json({
            message: 'Success',
            obj: paper
        });
    });
});

router.get('/papers', function(req, res, next) {
    Paper.find(function(err, papers) {
        if (err) {
            return res.status(500).json({
                title: 'An error occurred',
                error: err
            });
        }
        if (!papers) {
            return res.status(500).json({
                title: 'No Papers Found!',
                error: {message: 'Paper not found'}
            });
        }
        res.status(200).json({
            message: 'Success',
            obj: papers
        });
    });
});

router.get('/papersByLoggedUser', function(req, res, next) {
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
        }});
    Paper.find(function(err, papers) {
        if (err) {
            return res.status(500).json({
                title: 'An error occurred',
                error: err
            });
        }
        if (!papers) {
            return res.status(500).json({
                title: 'No Papers Found!',
                error: {message: 'Paper not found'}
            });
        }
        res.status(200).json({
            message: 'Success',
            obj: papers
        });
    });
});

router.delete('/paper/:id', function (req, res, next) {
    Paper.findById(req.params.id, function (err, paper) {
        if (err) {
            return res.status(500).json({
                title: 'An error occurred',
                error: err
            });
        }
        if (!paper) {
            return res.status(500).json({
                title: 'No Paper Found!',
                error: {message: 'Paper not found'}
            });
        }
        paper.remove(function (err, result) {
            if (err) {
                return res.status(500).json({
                    title: 'An error occurred',
                    error: err
                });
            }
            res.status(200).json({
                message: 'Deleted paper',
                obj: {message: 'Paper was deleted'}
            });
        });
    });
});

module.exports = router;