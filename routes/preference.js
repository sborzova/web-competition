var express = require('express');
var router = express.Router();

var Preference = require('../models/preference');

router.post('/preference', function (req, res) {
    try{
        var preference = new Preference({
            name: req.body.name,
            state: req.body.state
        });
    } catch (err){
        return res.status(500).json({
            title: 'An error occurred',
            error: err
        });
    }
    preference.save(function (err, preference) {
        if (err) {
            return res.status(500).json({
                title: 'An error occurred',
                error: err
            });
        }
        res.status(201).json({
            message: 'Saved preference',
            obj: {message: 'Preference was created', data: preference}
        });
    });
});

router.patch('/preference', function (req, res, next) {
    Preference.findOne({name: 'competitionIsOn'}, function (err, preference) {
        if (err) {
            return res.status(500).json({
                title: 'An error occurred',
                error: err
            });
        }
        if (!preference) {
            return res.status(500).json({
                title: 'No Preference Found!',
                error: {message: 'Preference not found'}
            });
        }

        preference.state = req.body.state;

        preference.save(function (err, preference) {
            if (err) {
                return res.status(500).json({
                    title: 'An error occurred',
                    error: err
                });
            }
            res.status(200).json({
                message: 'Updated preference',
                obj: preference
            });
        });
    });
});

router.get('/preference', function(req, res, next) {
    Preference.findOne({name: 'competitionIsOn'}, function(err, preference) {
        if (err) {
            return res.status(500).json({
                title: 'An error occurred',
                error: err
            });
        }
        if (!preference) {
            return res.status(500).json({
                title: 'No Preference Found!',
                error: {message: 'Preference not found'}
            });
        }
        res.status(200).json({
            message: 'Success',
            obj: preference
        });
    });
});

module.exports = router;