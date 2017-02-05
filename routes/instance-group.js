var express = require('express');
var router = express.Router();
var bcrypt = require('bcryptjs');
var jwt = require('jsonwebtoken');
var multer = require('multer');

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