var express = require('express');
var router = express.Router();
var jwt = require('jsonwebtoken');

/*
 * Get home page
 */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

/*
 * Verify route if logged user is admin
 */
router.use('/server/admin/', function (req, res, next) {
    jwt.verify(req.query.token, 'admin', function (err) {
        if (err) {
            return res.status(401).json({
                title: 'Not Authenticated Admin',
                error: err
            });
        }
        next();
    })
});

module.exports = router;
