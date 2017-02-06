var express = require('express');
var router = express.Router();
var bcrypt = require('bcryptjs');
var jwt = require('jsonwebtoken');

var User = require('../models/user');
var Instance = require('../models/instance');
var InstanceGroup = require('../models/instanceGroup');

router.post('/instance/:id', function (req, res, next) {
    InstanceGroup.findById(req.params.id, function (err, instanceGroup) {
        if (err) {
            return res.status(500).json({
                title: 'An error occurred',
                error: err
            });
        }
        var instance = new Instance({
            name: req.body.content,
            courses: req.body.courses,
            rooms: req.body.rooms,
            periodsPerDay: req.body.periodsPerDay,
            days: req.body.days,
            curricula: req.body.curricula,
            dailyMin: req.body.dailyMin,
            dailyMax: req.body.dailyMax,
            instanceGroup: instanceGroup
        });
        instance.save(function (err, result) {
            if (err) {
                return res.status(500).json({
                    title: 'An error occurred',
                    error: err
                });
            }
            instanceGroup.instances.push(result);
            instanceGroup.save();
            res.status(201).json({
                message: 'Saved message',
                obj: result
            });
        });
    });
});

router.get('/instance', function (req, res, next) {
    Instance.find()
        //.populate('user', 'firstName')
        .exec(function (err, instances) {
            if (err) {
                return res.status(500).json({
                    title: 'An error occurred',
                    error: err
                });
            }
            res.status(200).json({
                message: 'Success',
                obj: instances
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
        instance.courses = req.body.courses;
        instance.rooms = req.body.rooms;
        instance.periodsPerDay = req.body.periodsPerDay;
        instance.days = req.body.days;
        instance.curricula = req.body.curricula;
        instance.dailyMin = req.body.dailyMin;
        instance.dailyMax = req.body.dailyMax;

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
                obj: result
            });
        });
    });
});

module.exports = router;