var express = require('express');
var router = express.Router();
var userController = require('../controllers/user.controller')
/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.route("/add")
.post(userController.createUser)

router.route("/get")
.get(userController.getUsers)

module.exports = router;
