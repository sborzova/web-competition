var express = require('express');
var router = express.Router();
var bcrypt = require('bcryptjs');
var jwt = require('jsonwebtoken');

var Technique = require('../models/technique');

router.post('/technique', function (req, res) {
    try{
        var technique = new Technique({
            name: req.body.name
        });
    } catch (err){
        return res.status(500).json({
            title: 'An error occurred',
            error: err
        });
    }
    technique.save(function (err, result) {
        if (err) {
            return res.status(500).json({
                title: 'An error occurred',
                error: err
            });
        }
        res.status(201).json({
            message: 'Saved technique',
            obj: {message: 'Technique was created'}
        });
    });
});

router.patch('/technique/:id', function (req, res, next) {
    Technique.findById(req.params.id, function (err, technique) {
        if (err) {
            return res.status(500).json({
                title: 'An error occurred',
                error: err
            });
        }
        if (!technique) {
            return res.status(500).json({
                title: 'No Technique Found!',
                error: {message: 'Technique not found'}
            });
        }

        technique.name = req.body.name;

        technique.save(function (err, result) {
            if (err) {
                return res.status(500).json({
                    title: 'An error occurred',
                    error: err
                });
            }
            res.status(200).json({
                message: 'Updated technique',
                obj: result
            });
        });
    });
});

router.get('/technique/:id', function(req, res, next) {
    Technique.findById(req.params.id, function(err, technique) {
        if (err) {
            return res.status(500).json({
                title: 'An error occurred',
                error: err
            });
        }
        if (!technique) {
            return res.status(500).json({
                title: 'No Technique Found!',
                error: {message: 'Technique not found'}
            });
        }
        res.status(200).json({
            message: 'Success',
            obj: technique
        });
    });
});

router.get('/techniques', function(req, res, next) {
    Technique.find(function(err, techniques) {
        if (err) {
            return res.status(500).json({
                title: 'An error occurred',
                error: err
            });
        }
        if (!techniques) {
            return res.status(500).json({
                title: 'No Techniques Found!',
                error: {message: 'Technique not found'}
            });
        }
        res.status(200).json({
            message: 'Success',
            obj: techniques
        });
    });
});

router.delete('/technique/:id', function (req, res, next) {
    Technique.findById(req.params.id, function (err, technique) {
        if (err) {
            return res.status(500).json({
                title: 'An error occurred',
                error: err
            });
        }
        if (!technique) {
            return res.status(500).json({
                title: 'No Technique Found!',
                error: {message: 'Technique not found'}
            });
        }
        technique.remove(function (err, result) {
            if (err) {
                return res.status(500).json({
                    title: 'An error occurred',
                    error: err
                });
            }
            res.status(200).json({
                message: 'Deleted technique',
                obj: {message: 'Technique was deleted'}
            });
        });
    });
});

module.exports = router;