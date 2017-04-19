var express = require('express');
var router = express.Router();

var Instance = require('../models/instance');
var File = require('../models/file');

router.post('/instance', function (req, res) {
    File.findById(req.body.dataId, function (err, data) {
        if (err) {
            return res.status(500).json({
                title: 'An error occurred',
                error: err
            });
        }
        File.findById(req.body.statusId, function (err, status) {
            if (err) {
                return res.status(500).json({
                    title: 'An error occurred',
                    error: err
                });
            }
            try {
                var instance = new Instance({
                    order: req.body.order,
                    name: req.body.name,
                    description: req.body.description,
                    data: data,
                    status: status
                });
            } catch (err) {
                return res.status(500).json({
                    title: 'An error occurred',
                    error: err
                });
            }
            instance.save(function (err, result) {
                if (err) {
                    return res.status(422).json({
                        title: 'An error occurred',
                        error: {message: 'Instance with this name is already in use', error: err}
                    });
                }

                res.status(201).json({
                    message: 'Saved instance',
                    obj: {message: 'Instance was created', data: result}
                });
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

        instance.order = req.body.order;
        instance.name = req.body.name;
        instance.description = req.body.description;

        instance.save(function (err, result) {
            if (err) {
                return res.status(422).json({
                    title: 'An error occurred',
                    error: {message: 'Instance with this name is already in use', error: err}
                });
            }

            res.status(200).json({
                message: 'Updated instance',
                obj: {message: 'Instance was updated', data: result}
            });
        });
    });
});

router.get('/instance/:id', function(req, res, next) {
    Instance.findById(req.params.id)
        .populate('status')
        .populate('data')
        .exec(function(err, instance){
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
                obj: {message: 'Instance was deleted', data: result}
            });
        });
    });
});

module.exports = router;