var express = require('express');
var router = express.Router();
var bcrypt = require('bcryptjs');
var jwt = require('jsonwebtoken');

var Solution = require('../models/solution');
var Instance = require('../models/instance');
var User = require('../models/user');
var Paper = require('../models/paper');

router.post('/solution', function (req, res, next) {
    var decoded = jwt.decode(req.query.token);
    // Instance.findById(req.body.instanceId, function (err, instance) {
    //     if (err) {
    //         return res.status(500).json({
    //             title: 'An error occurred',
    //             error: err
    //         });
    //     }
        User.findOne({email: decoded.user.email}, function (err, user) {
            if (err) {
                return res.status(500).json({
                    title: 'An error occurred',
                    error: err
                });
            }
                // Paper.findById(decoded.paper._id, function (err, paper) {
                //     if (err) {
                //         return res.status(500).json({
                //             title: 'An error occurred',
                //             error: err
                //         });
                //     }
                    try{
                        var solution = new Solution({
                            unassigned: req.body.unassigned,
                            total: req.body.total,
                            sc: req.body.sc,
                            time: req.body.time,
                            room: req.body.room,
                            distr: req.body.distr,
                            technique: req.body.technique,
                            info: req.body.info,
                            // data: req.body.data,
                            // instance: instance,
                            user: user,
                            // paper: paper
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
                            obj: {message: 'Solution was created', data: result}
                        });
                    });
                });
        // });
    // });
});

router.patch('/solutionRemovePaper/:id', function (req, res, next) {
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

        solution.paper = null;

        solution.save(function (err, result) {
            if (err) {
                return res.status(500).json({
                    title: 'An error occurred',
                    error: err
                });
            }
            res.status(200).json({
                message: 'Updated solution',
                obj: {message: 'Solution was updated - paper deleted', data: result}
            });
        });
    });
});

router.get('/solutions', function (req, res, next) {
    Solution.find()
        .populate('user')
        .populate('instance')
        .populate('paper')
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
        .populate('user')
        .populate('instance')
        .populate('paper')
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

router.get('/solutionsByLoggedUser', function (req, res, next) {
    var decoded = jwt.decode(req.query.token);
    Solution.find()
        .populate('instance')
        .populate('paper')
        .exec({user: decoded.user}, function (err, solutions) {
            if (err) {
                return res.status(500).json({
                    title: 'An error occurred',
                    error: err
                });
            }
            if (!solutions) {
                return res.status(500).json({
                    title: 'No Solution Found!',
                    error: {message: 'Solution not found'}
                });
            }
            res.status(200).json({
                message: 'Success',
                obj: solutions
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