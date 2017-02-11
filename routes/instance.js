var express = require('express');
var router = express.Router();
var bcrypt = require('bcryptjs');
var jwt = require('jsonwebtoken');
var multer = require('multer');
var storage = multer.memoryStorage();
var upload = multer({ storage: storage });

var Instance = require('../models/instance');

router.post('/instance', function (req, res) {
    try{
        var instance = new Instance({
            name: req.body.name,
            description: req.body.description
        });
    } catch (err){
        return res.status(500).json({
            title: 'An error occurred',
            error: err
        });
    }
    instance.save(function (err, result) {
        if (err) {
            return res.status(422).json({
                title: 'An error occurred',
                error: err
                // error: {message: 'Instance with this name is already in use'}
            });
        }
        res.status(201).json({
            message: 'Saved instance',
            obj: {message: 'Instance was created'}
        });
    });
});

router.post('/stats/:id', upload.single('stats'), function (req, res, next) {
    // req.file is the `avatar` file
    // req.body will hold the text fields, if there were any
    Instance.findById(req.params.id, function (err, instance) {
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

        instance.stats = req.file;

        instance.save(function (err, result) {
            if (err) {
                return res.status(500).json({
                    title: 'An error occurred',
                    error: err
                });
            }
            res.status(200).json({
                message: 'Updated instance',
                obj: result
            });
        });
    });
});

router.post('/data/:id', upload.single('data'), function (req, res, next) {
    // req.file is the `avatar` file
    // req.body will hold the text fields, if there were any
    Instance.findById(req.params.id, function (err, instance) {
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

        instance.data = req.file;

        instance.save(function (err, result) {
            if (err) {
                return res.status(500).json({
                    title: 'An error occurred',
                    error: err
                });
            }
            res.status(200).json({
                message: 'Updated instance',
                obj: result
            });
        });
    });
});

router.patch('/instance/:id', function (req, res, next) {
    Instance.findById(req.params.id, function (err, instance) {
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

        instance.name = req.body.name;
        instance.description = req.body.description;
        instance.isOn = req.body.isOn;

        instance.save(function (err, result) {
            if (err) {
                return res.status(500).json({
                    title: 'An error occurred',
                    error: err
                });
            }
            res.status(200).json({
                message: 'Updated instance',
                obj: result
            });
        });
    });
});

router.get('/instance/:id', function(req, res, next) {
    Instance.findById(req.params.id, function(err, instance) {
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
        res.status(200).json({
            message: 'Success',
            obj: instance
        });
    });
});

router.get('/instances', function(req, res, next) {
    Instance.find(function(err, instances) {
        if (err) {
            return res.status(500).json({
                title: 'An error occurred',
                error: err
            });
        }
        if (!instances) {
            return res.status(500).json({
                title: 'No Instances Found!',
                error: {message: 'Instance not found'}
            });
        }
        res.status(200).json({
            message: 'Success',
            obj: instances
        });
    });
});

router.delete('/instance/:id', function (req, res, next) {
    Instance.findById(req.params.id, function (err, instance) {
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
        instance.remove(function (err, result) {
            if (err) {
                return res.status(500).json({
                    title: 'An error occurred',
                    error: err
                });
            }
            res.status(200).json({
                message: 'Deleted instance',
                obj: {message: 'Instance was deleted'}
            });
        });
    });
});

module.exports = router;

// var storage = multer.diskStorage({
//     destination: function (req, file, callback) {
//         console.log(file);
//         callback(null, './uploads');
//     },
//     filename: function (req, file, callback) {
//         console.log(file);
//         callback(null, file.originalname)
//     }
// });
//
// var upload = multer({
//     storage: storage
// }).single('file');
//
// router.post('/upload', function(req, res) {
//     console.log(req.files);
//     upload(req, res, function(err) {
//         if (err) {
//             return res.status(500).json({
//                 title: 'An error occurred',
//                 error: err
//             });
//         }
//         res.status(200).json({
//             message: 'File uploaded'
//             // obj: req.file
//         });
//         // res.end('Your File Uploaded');
//     })
// });