var express = require('express');
var router = express.Router();
var jwt = require('jsonwebtoken');
var multer = require('multer');
var https = require('https');
var iconv = require('iconv-lite');
var storage = multer.memoryStorage();
var fileUpload = multer({ storage: storage }).single('solution');

var Solution = require('../models/solution');
var Instance = require('../models/instance');
var User = require('../models/user');
var Paper = require('../models/paper');
var File = require('../models/file');

/**
 *  Validate solution and return validation result.
 *
 *  Request contains solution.
 */
router.post('/server/validator', function (req, res, next) {
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
        var request = https.request(options, (response) => {
            var body = "";
            response.on('data', (chunk) => {
                body += chunk;
            });
            response.on('end', () => {
                if (response.statusCode === 400){
                    return res.status(200).json({
                        status: '400',
                        message: 'Wrong xml format',
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
        let notBom = iconv.decode(req.file.buffer, 'utf-8', {addBom : false});
        request.write(notBom);
        request.end();
    });
});

/**
 * Save new solution to database.
 *
 * Request contains solution.
 */
router.post('/server/solution', function (req, res, next) {
    var decoded = jwt.decode(req.query.token);
    Instance.findOne({name: req.body.instanceName}, function (err, instance) {
        if (err) {
            return res.status(500).json({
                title: 'An error occurred',
                error: err
            });
        }
        if (!instance) {
            return res.status(500).json({
                title: 'No Instance Found!',
                error: {message: 'Instance not found'}
            });
        }
        User.findOne({email: decoded.user.email}, function (err, user) {
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
            Paper.findById(req.body.paperId, function (err, paper) {
                if (err) {
                    return res.status(500).json({
                        title: 'An error occurred',
                        error: err
                    });
                }
                File.findById(req.body.fileId, function (err, data) {
                    if (err) {
                        return res.status(500).json({
                            title: 'An error occurred',
                            error: err
                        });
                    }
                    if (!data) {
                        return res.status(500).json({
                            title: 'No File Found!',
                            error: {message: 'File not found'}
                        });
                    }
                    saveSolution(req, res, instance, user, paper, data);
                });
            });
        });
    });
});

/**
 * Delete paper from solution in database by id.
 *
 * Parameter id - solution's id.
 * Request contains paper.
 */
router.patch('/server/solutionRemovePaper/:id', function (req, res, next) {
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
                obj: result
            });
        });
    });
});

/**
 * Add paper to solution in database by id.
 *
 * Parameter id - solution's id.
 * Request contains paper id.
 */
router.patch('/server/solutionAddPaper/:id', function (req, res, next) {
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

        Paper.findById(req.body.paperId, function (err, paper) {
            if (err) {
                return res.status(500).json({
                    title: 'An error occurred',
                    error: err
                });
            }

            solution.paper = paper;

            solution.save(function (err, result) {
                if (err) {
                    return res.status(500).json({
                        title: 'An error occurred',
                        error: err
                    });
                }
                res.status(200).json({
                    message: 'Updated solution',
                    obj: result
                });
            });
        });
    });
});

/**
 * Update solutions's visibility in database by id.
 *
 * Parameter id - solution's id.
 * Request contains updated visibility.
 */
router.patch('/server/solutionVisibility/:id', function (req, res, next) {
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

        solution.visible = req.body.visible;

        solution.save(function (err, result) {
            if (err) {
                return res.status(500).json({
                    title: 'An error occurred',
                    error: err
                });
            }
            res.status(200).json({
                message: 'Updated solution',
                obj: result
            });
        });
    });
});

/**
 * Get all solutions from database.
 */
router.get('/server/solutions', function (req, res, next) {
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

/**
 * Get solution from database by id. Populate instance, paper, user and technique.
 *
 * Parameter id - solution's id.
 */
router.get('/server/solution/:id', function (req, res, next) {
    Solution.findById(req.params.id)
        .populate('user')
        .populate('data')
        .populate('instance')
        .populate('paper')
        .exec(function (err, solution) {
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

/**
 * Get all solutions from database by instance's id. Populate instance, paper, user and technique.
 *
 * Parameter id - instance's id.
 */
router.get('/server/solutionsByInstance/:id', function (req, res, next) {
    Solution.find()
        .populate('instance')
        .populate('paper')
        .populate('user')
        .where('instance').equals(req.params.id)
        .exec(function (err, solutions) {
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

/**
 *  Get all logged in user's solutions from database.
 *
 *  Token contains coded user.
 */
router.get('/server/solutionsByLoggedUser', function (req, res, next) {
    var decoded = jwt.decode(req.query.token);
    Solution.find()
        .populate('instance')
        .populate('paper')
        .where('user').equals(decoded.user._id)
        .exec(function (err, solutions) {
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

/**
 *  Get solution from database by user, instance, technique, unassigned variables, total cost,
 *  time, room, distribution preferences and student conflicts from database.
 *
 *  Token contains coded logged in user.
 *  Request body contains solution and instance.
 */
router.post('/server/duplicateSolution', function (req, res, next) {
    var decoded = jwt.decode(req.query.token);
    Instance.findOne({name: req.body.instance.name}, function (err, instance) {
        if (err) {
            return res.status(500).json({
                title: 'An error occurred',
                error: err
            });
        }
        if (!instance) {
            return res.status(500).json({
                title: 'No Instance Found!',
                error: {message: 'Instance not found'}
            });
        }
        Solution.findOne()
            .where('user').equals(decoded.user._id)
            .where('instance').equals(instance._id)
            .where('unassigned').equals(req.body.unassigned)
            .where('total').equals(req.body.total)
            .where('time').equals(req.body.time)
            .where('room').equals(req.body.room)
            .where('distr').equals(req.body.distr)
            .where('sc').equals(req.body.sc)
            .exec(function (err, solution) {
                if (err) {
                    return res.status(500).json({
                        title: 'An error occurred',
                        error: err
                    });
                }
                if (!solution) {
                    return res.status(200).json({
                        title: 'No Solution Found!',
                    });
                }
                res.status(200).json({
                    message: 'Success',
                    obj: solution
                });
            });
    });
});

/**
 * Delete solution from database by id.
 *
 * Parameter id - solution's id.
 */
router.delete('/server/solution/:id', function (req, res, next) {
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

/**
 * Save solution with parameters.
 *
 * @param req - request
 * @param res - response
 * @param instance
 * @param user
 * @param paper
 * @param data
 */
function saveSolution(req, res, instance, user, paper, data) {
    try {
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
            paper: paper,
            data: data
        });
    } catch (err) {
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
            obj: solution
        });
    });
}

module.exports = router;