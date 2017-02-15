var express = require('express');
var router = express.Router();
var bcrypt = require('bcryptjs');
var jwt = require('jsonwebtoken');

var Solution = require('../models/solution');
var Instance = require('../models/instance');
var User = require('../models/user');
var Technique = require('../models/technique');
var Paper = require('../models/paper');

router.post('/solution', function (req, res, next) {
    var decoded = jwt.decode(req.query.token);
    Instance.findById(decoded.instance._id, function (err, instance) {
        if (err) {
            return res.status(500).json({
                title: 'An error occurred',
                error: err
            });
        }
        User.findById(decoded.user._id, function (err, user) {
            if (err) {
                return res.status(500).json({
                    title: 'An error occurred',
                    error: err
                });
            }
            Technique.findById(decoded.technique._id, function (err, technique) {
                if (err) {
                    return res.status(500).json({
                        title: 'An error occurred',
                        error: err
                    });
                }
                Paper.findById(decoded.paper._id, function (err, paper) {
                    if (err) {
                        return res.status(500).json({
                            title: 'An error occurred',
                            error: err
                        });
                    }
                    try{
                        var solution = new Solution({
                            value: req.body.value,
                            sc: req.body.sc,
                            time: req.body.time,
                            room: req.body.room,
                            distr: req.body.distr,
                            info: req.body.info,
                            data: req.body.data,
                            instance: instance,
                            user: user,
                            technique: technique,
                            paper: paper
                        });
                    } catch (err){
                        return res.status(500).json({
                            title: 'An error occurred',
                            error: err
                        });
                    }
                    solution.save(function (err, result) {
                        if (err) {
                            return res.status(500).json({
                                title: 'An error occurred',
                                error: err
                            });
                        }
                        res.status(201).json({
                            message: 'Saved solution',
                            obj: {message: 'Solution was created'}
                        });
                    });
                });
            });
        });
    });
});

router.patch('/solution/:id', function (req, res, next) {
    return res.status(500).json({
        title: 'Not implemented',
        error: err
    });
});

router.get('/solutions', function (req, res, next) {
    Solution.find()
        //.populate()
        .exec(function (err, solutions) {
            if (err) {
                return res.status(500).json({
                    title: 'An error occurred',
                    error: err
                });
            }
            if (!solutions) {
                return res.status(500).json({
                    title: 'No Solutions Found!',
                    error: {message: 'Solution not found'}
                });
            }
            res.status(200).json({
                message: 'Success',
                obj: solutions
            });
        });
});

router.get('/solution/:id', function (req, res, next) {
    Solution.findById()
    //.populate()
        .exec(req.params.id, function (err, solution) {
            if (err) {
                return res.status(500).json({
                    title: 'An error occurred',
                    error: err
                });
            }
            if (!solution) {
                return res.status(500).json({
                    title: 'No Solution Found!',
                    error: {message: 'Solution not found'}
                });
            }
            res.status(200).json({
                message: 'Success',
                obj: solution
            });
        });
});

router.delete('/solution/:id', function (req, res, next) {
    Solution.findById(req.params.id, function (err, solution) {
        if (err) {
            return res.status(500).json({
                title: 'An error occurred',
                error: err
            });
        }
        if (!solution) {
            return res.status(500).json({
                title: 'No Solution Found!',
                error: {message: 'Solution not found'}
            });
        }
        solution.remove(function (err, result) {
            if (err) {
                return res.status(500).json({
                    title: 'An error occurred',
                    error: err
                });
            }
            res.status(200).json({
                message: 'Deleted solution',
                obj: result
            });
        });
    });
});

module.exports = router;