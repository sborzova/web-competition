var express = require('express');
var router = express.Router();
var jwt = require('jsonwebtoken');

var Preference = require('../models/preference');

/**
 * Save new preference to database.
 *
 * Request body contains preference.
 */
router.post('/server/preference', function (req, res) {
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
            obj: preference
        });
    });
});

/**
 * Update preference with name competitionIsOn in database.
 *
 * Request body contains preference.
 */
router.patch('/server/admin/preferenceUpdate', function (req, res, next) {
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

/**
 *  Get preference with name competitionIsOn from database.
 */
router.get('/server/preference', function(req, res, next) {
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