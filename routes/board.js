var express = require('express');
var router = express.Router();
var boardController = require("../controllers/board.controller")

/* GET home page. */
router.route('/getboards')
  .get(boardController.getboards)
router.route('/updateboards')
.post(boardController.updateBoard)
  module.exports = router;