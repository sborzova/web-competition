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

var validatedFile;
var options = {
    hostname: 'demo.unitime.org',
    path: '/SolverValidatorMockup/test',
    method: 'POST',
    auth: 'validator:solver',
    headers: {
        'Content-Type': 'application/xml;charset=UTF-8',
    }
};
/**
 *  Validate solution and return validation results.
 *
 *  Request - contains solution.
 *  Response - contains validation results or error.
 */
router.post('/server/validator', function (req, res, next) {
    fileUpload(req, res, function (err) {
        if (err) {
            return res.status(500).json({
                title: 'An error occurred',
                error: err
            });
        }

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
        validatedFile = notBom;
        module.exports = validatedFile;
        request.write(notBom);
        request.end();
    });
});

/**
 * Prepare properties for saving solution and call function to save new solution to database.
 *
 * Request - contains solution.
 * Response - contains saved solution or error.
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
 * Request - contains solution or error.
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
 * Add paper to solution in database.
 *
 * Parameter id - solution's id.
 * Request - contains paper id.
 * Results - contains solution or error.
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
 * Update solutions's visibility in database.
 *
 * Parameter id - solution's id.
 * Request - contains updated visibility.
 * Response - contains updated solution or error.
 */
router.patch('/server/admin/solutionVisibility/:id', function (req, res, next) {
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
 * Update solutions's technique in database by id.
 *
 * Parameter id - solution's id.
 * Request - contains updated technique.
 * Response - contains updated solution or error.
 */
router.patch('/server/admin/solutionTechnique/:id', function (req, res, next) {
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

        solution.technique = req.body.technique;

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
 * Get all solutions from database. Populate user, instance and paper.
 *
 * Response - contains solutions or error.
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
 * Get solution from database by id. Populate instance, paper, user and data.
 *
 * Parameter id - solution's id.
 * Response - contains solution or error.
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
 * Get all solutions from database by instance's id. Populate instance, paper, user.
 *
 * Parameter id - instance's id.
 * Response - contains solutions or error.
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
 *  Get all logged in user's solutions from database. Populate instance and paper.
 *
 *  Token - contains coded user.
 *  Response - contains solutions or error.
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
 *  Get solution from database by user, instance, unassigned variables, total cost,
 *  time, room, distribution preferences and student conflicts from database.
 *
 *  Token - contains logged in user.
 *  Request - contains solution and instance.
 *  Response - contains solution, empty body if no solution was found, other way error.
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
 * Response - contains deleted solution or error.
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
 * @param res - response to send back
 * @param instance
 * @param user
 * @param paper
 * @param data
 *
 * Response - contains saved solution or error.
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