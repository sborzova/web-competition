var express = require('express');
var router = express.Router();
var bcrypt = require('bcryptjs');
var jwt = require('jsonwebtoken');
var multer = require('multer');

var InstanceGroup = require('../models/instanceGroup');

router.post('/instanceGroup', function (req, res) {
    try{
        var instanceGroup = new InstanceGroup({
            name: req.body.name
        });
    } catch (err){
        return res.status(500).json({
            title: 'An error occurred',
            error: err
        });
    }
    instanceGroup.save(function (err, result) {
        if (err) {
            return res.status(500).json({
                title: 'An error occurred',
                error: err
            });
        }
        // user.messages.push(result);
        // user.save();
        res.status(201).json({
            message: 'Saved instance group',
            obj: result
        });
    });
});

router.get('/instanceGroups', function(req, res, next) {
    InstanceGroup.find(function(err, instancesGroups) {
        if (err) {
            return res.status(500).json({
                title: 'An error occurred',
                error: err
            });
        }
        if (!instancesGroups) {
            return res.status(500).json({
                title: 'No instances groups Found!',
                error: {message: 'Instance group not found'}
            });
        }
        res.status(200).json({
            message: 'Success',
            obj: instancesGroups
        });
    });
});

router.patch('/instanceGroup/:id', function (req, res, next) {
    //var decoded = jwt.decode(req.query.token);
    InstanceGroup.findById(req.params.id, function (err, instanceGroup) {
        if (err) {
            return res.status(500).json({
                title: 'An error occurred',
                error: err
            });
        }
        if (!instanceGroup) {
            return res.status(500).json({
                title: 'No Instance group Found!',
                error: {message: 'Instance group not found'}
            });
        }

        instanceGroup.name = req.body.name;
        instanceGroup.save(function (err, result) {
            if (err) {
                return res.status(500).json({
                    title: 'An error occurred',
                    error: err
                });
            }
            res.status(200).json({
                message: 'Updated instance group',
                obj: result
            });
        });
    });
});

router.delete('/instanceGroup/:id', function (req, res, next) {
    //var decoded = jwt.decode(req.query.token);
    InstanceGroup.findById(req.params.id, function (err, instanceGroup) {
        if (err) {
            return res.status(500).json({
                title: 'An error occurred',
                error: err
            });
        }
        if (!instanceGroup) {
            return res.status(500).json({
                title: 'No Instance group Found!',
                error: {message: 'Instance group not found'}
            });
        }
        instanceGroup.remove(function (err, result) {
            if (err) {
                return res.status(500).json({
                    title: 'An error occurred',
                    error: err
                });
            }
            res.status(200).json({
                message: 'Deleted instance group',
                obj: result
            });
        });
    });
});



var storage = multer.diskStorage({
    destination: function (req, file, callback) {
        console.log(file);
        callback(null, './uploads');
    },
    filename: function (req, file, callback) {
        console.log(file);
        callback(null, file.originalname)
    }
});

var upload = multer({
    storage: storage
}).single('file');

router.post('/upload', function(req, res) {
    console.log(req.files);
    upload(req, res, function(err) {
        if (err) {
            return res.status(500).json({
                title: 'An error occurred',
                error: err
            });
        }
        res.status(200).json({
            message: 'File uploaded'
            // obj: req.file
        });
        // res.end('Your File Uploaded');
    })
});



module.exports = router;