var express = require('express');
var router = express.Router();
var multer = require('multer');
var iconv = require('iconv-lite');
var storage = multer.memoryStorage();
var fileUpload = multer({ storage: storage }).single('file');

var File = require('../models/file');

/**
 * Save new file to database.
 *
 * Request contains file.
 **/
router.post('/server/file', function (req, res) {
    fileUpload(req, res, function(err) {
        if (err) {
            return res.status(500).json({
                title: 'An error occurred',
                error: err
            });
        }
        try{
            var validatedFile = require('./solution');
            var file = new File({
                content: validatedFile,
                // content: iconv.decode(req.file.buffer, 'utf-8', {addBom : false}),
            });
        } catch (err){
            return res.status(500).json({
                title: 'An error occurred',
                error: err
            });
        }
        file.save(function (err, file) {
            if (err) {
                return res.status(500).json({
                    title: 'An error occurred',
                    error: err
                });
            }
            res.status(200).json({
                message: 'Saved file',
                id: file._id
            });
        });
    });
});

/**
 * Update file in database by id.
 *
 * Parameter id - file's id.
 * Request contains updated file.
 **/
router.post('/server/fileUpdate/:id', function (req, res, next) {
    fileUpload(req, res, function(err) {
        if (err) {
            return res.status(500).json({
                title: 'An error occurred',
                error: err
            });
        }
        File.findById(req.params.id, function (err, file) {
            if (err) {
                return res.status(500).json({
                    title: 'An error occurred',
                    error: err
                });
            }
            if (!file) {
                return res.status(500).json({
                    title: 'No File Found!',
                    error: {message: 'File not found'}
                });
            }
            file.content = iconv.decode(req.file.buffer, 'utf-8', {addBom : false});

            file.save(function (err, result) {
                if (err) {
                    return res.status(500).json({
                        title: 'An error occurred',
                        error: err
                    });
                }
                res.status(200).json({
                    message: 'Updated file',
                    obj: result
                });
            });
        });
    });
});

/**
 * Get file from database by id.
 *
 * Parameter id - file's id.
 */
router.get('/server/file/:id', function(req, res, next) {
    File.findById(req.params.id, function(err, file) {
        if (err) {
            return res.status(500).json({
                title: 'An error occurred',
                error: err
            });
        }
        if (!file) {
            return res.status(500).json({
                title: 'No File Found!',
                error: {message: 'File not found'}
            });
        }
        res.status(200).json({
            message: 'Success',
            obj: file
        });
    });
});

/**
 * Delete file from database by id.
 *
 * Parameter id - file's id.
 */
router.delete('/server/file/:id', function (req, res, next) {
    File.findById(req.params.id, function (err, file) {
        if (err) {
            return res.status(500).json({
                title: 'An error occurred',
                error: err
            });
        }
        if (!file) {
            return res.status(500).json({
                title: 'No File Found!',
                error: {message: 'File not found'}
            });
        }
        file.remove(function (err, file) {
            if (err) {
                return res.status(500).json({
                    title: 'An error occurred',
                    error: err
                });
            }
            res.status(200).json({
                message: 'Deleted file',
                obj: file
            });
        });
    });
});

module.exports = router;