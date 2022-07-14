var express = require('express');
var router = express.Router();
var {project:Project}= require("../models")
var projectController = require("../controllers/project.controller")

/* GET home page. */
router.route('/add')
  .post(projectController.createProject)

router.route('/showprojects')
  .get(projectController.showProjects)




module.exports = router ;

