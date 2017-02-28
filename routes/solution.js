var express = require('express');
var router = express.Router();
var bcrypt = require('bcryptjs');
var jwt = require('jsonwebtoken');
var multer = require('multer');
var https = require('https');
var http = require('http');

var storage = multer.memoryStorage();
var fileUpload = multer({ storage: storage }).single('solution');

var Solution = require('../models/solution');
var Instance = require('../models/instance');
var User = require('../models/user');
var Paper = require('../models/paper');


router.post('/validator', function (req, res, next) {
    fileUpload(req, res, function (err) {
        if (err) {
            return res.status(500).json({
                title: 'An error occurred',
                error: err
            });
        }

        var options = {
            hostname: 'demo.unitime.org',
            path: '/SolverValidatorMockup/test',
            method: 'POST',
            auth: 'validator:solver',
            headers: {
                'Content-Type': 'application/xml;charset=UTF-8',
            }
        };

        var request = http.request(options, (response) => {
            var body = "";
            response.on('data', (chunk) => {
                body += chunk;
            });

            response.on('end', () => {
                if (response.statusCode === 400){
                    return res.status(200).json({
                        status: '400',
                        message: 'Wrong xml format'
                    });
                }
                return res.status(200).json({
                    status: '200',
                    message: 'Solution validated',
                    obj: JSON.parse(body),
                });
            });
        });
        request.on('error', (error) => {
            return res.status(500).json({
                title: 'An error occurred',
                error: error
            });
        });

        request.write(req.file.buffer.toString());
        request.end();
    });
});

router.post('/solution', function (req, res, next) {
    var decoded = jwt.decode(req.query.token);
    Instance.findOne({name: req.body.instanceName}, function (err, instance) {
        if (err) {
            return res.status(500).json({
                title: 'An error occurred',
                error: err
            });
        }
        User.findOne({email: decoded.user.email}, function (err, user) {
            if (err) {
                return res.status(500).json({
                    title: 'An error occurred',
                    error: err
                });
            }
            Paper.findById(req.body.paperId, function (err, paper) {
                if (err) {
                    return res.status(500).json({
                        title: 'An error occurred',
                        error: err
                    });
                }
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
                        instance: instance,
                        user: user,
                        paper: paper
                    });
                } catch (err){
                    return res.status(500).json({
                        title: 'An error occurred',
                        error: err
                    });
                }
                solution.save(function (err, solution) {
                    if (err) {
                        return res.status(500).json({
                            title: 'An error occurred',
                            error: err
                        });
                    }
                    res.status(201).json({
                        message: 'Saved solution',
                        obj: {message: 'Solution was created', data: solution}
                    });
                });
            });
        });
    });
});

router.post('/solutionFile/:id', function (req, res, next) {
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
        fileUpload(req, res, function(err) {
            if (err) {
                return res.status(500).json({
                    title: 'An error occurred',
                    error: err
                });
            }

            if (req.file.buffer){
                solution.data = req.file.buffer.toString();
            }

            solution.save(function (err, result) {
                if (err) {
                    return res.status(500).json({
                        title: 'An error occurred',
                        error: err
                    });
                }
                res.status(200).json({
                    message: 'File to solution saved',
                    obj: result
                });
            });
        });
    });
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