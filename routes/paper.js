var express = require('express');
var router = express.Router();

var Paper = require('../models/paper');

/**
 * Save new paper to database.
 *
 * Request body contains paper.
 */
router.post('/server/paper', function (req, res) {
    try{
        var paper = new Paper({
            citation: req.body.citation,
            url: req.body.url
        });
    } catch (err){
        return res.status(500).json({
            title: 'An error occurred',
            error: err
        });
    }
    paper.save(function (err, result) {
        if (err) {
            return res.status(500).json({
                title: 'An error occurred',
                error: err
            });
        }
        res.status(201).json({
            message: 'Saved paper',
            obj: result
        });
    });
});

/**
 * Update paper in database by id.
 *
 * Parameter id - paper's id.
 * Request body contains updated paper.
 */
router.patch('/server/paper/:id', function (req, res, next) {
    Paper.findById(req.params.id, function (err, paper) {
        if (err) {
            return res.status(500).json({
                title: 'An error occurred',
                error: err
            });
        }
        if (!paper) {
            return res.status(500).json({
                title: 'No Paper Found!',
                error: {message: 'Paper not found'}
            });
        }

        paper.citation = req.body.citation;
        paper.url = req.body.url;

        paper.save(function (err, result) {
            if (err) {
                return res.status(500).json({
                    title: 'An error occurred',
                    error: err
                });
            }
            res.status(200).json({
                message: 'Updated paper',
                obj: result
            });
        });
    });
});

/**
 * Get paper from database by id.
 *
 * Parameter id - paper's id.
 */
router.get('/server/paper/:id', function(req, res, next) {
    Paper.findById(req.params.id, function(err, paper) {
        if (err) {
            return res.status(500).json({
                title: 'An error occurred',
                error: err
            });
        }
        if (!paper) {
            return res.status(500).json({
                title: 'No Paper Found!',
                error: {message: 'Paper not found'}
            });
        }
        res.status(200).json({
            message: 'Success',
            obj: paper
        });
    });
});

/**
 * Get all papers from database.
 */
router.get('/server/papers', function(req, res, next) {
    Paper.find(function(err, papers) {
        if (err) {
            return res.status(500).json({
                title: 'An error occurred',
                error: err
            });
        }
        if (!papers) {
            return res.status(500).json({
                title: 'No Papers Found!',
                error: {message: 'Paper not found'}
            });
        }
        res.status(200).json({
            message: 'Success',
            obj: papers
        });
    });
});

/**
 * Delete paper from database by id.
 *
 * Parameter id - paper's id.
 */
router.delete('/server/paper/:id', function (req, res, next) {
    Paper.findById(req.params.id, function (err, paper) {
        if (err) {
            return res.status(500).json({
                title: 'An error occurred',
                error: err
            });
        }
        if (!paper) {
            return res.status(500).json({
                title: 'No Paper Found!',
                error: {message: 'Paper not found'}
            });
        }
        paper.remove(function (err, result) {
            if (err) {
                return res.status(500).json({
                    title: 'An error occurred',
                    error: err
                });
            }
            res.status(200).json({
                message: 'Deleted paper',
                obj: {message: 'Paper was deleted'}
            });
        });
    });
});

module.exports = router;