var express = require('express');
var router = express.Router();
var bcrypt = require('bcryptjs');
var jwt = require('jsonwebtoken');
var multer = require('multer');

var storage = multer.diskStorage({
    destination: function (req, file, callback) {
        console.log(file);
        callback(null, './upload');
    },
    filename: function (req, file, callback) {
        console.log(file);
        callback(null, file.originalname)
    }
});
multer.memoryStorage()

var upload = multer({
    storage: storage
}).single('file');

router.post('/upload', function(req, res) {
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
        // console.log(req.file);
        // res.end('Your File Uploaded');
        // console.log('Photo Uploaded');
    })
});

module.exports = router;