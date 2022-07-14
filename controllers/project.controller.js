var {project:Project}= require("../models")
var { paginateArray, sortCompare } = require('./utils/utils') 

  exports.createProject = async function (req, res, next) {
    console.log("dfadsfasdfasdef  " ,req.body);
    const newEmployee = await Project.create({
      description:req.body.description,  
      start_date: req.body.start_date, 
      status:     req.body.status,  
      project_title:req.body.project_title, 
      client_id:  req.body.client_id, 
      key:        req.body.key, 
      phase:      req.body.phase,  
      document_file:req.body.document_file, 
      end_date:   req.body.end_date, 
      submit_date:req.body.submit_date, 
      budget:      req.body.budget
    }).catch(err=>{
        res.send(err)
    })
    res.json(newEmployee)
  }
  exports.showProjects = async (req,res)=>{
    console.log( sortCompare );
    const { q = '', perPage = 10, page = 1, status = null } = req.params
    // const { q = '', perPage = 10, page = 1, status = null } = { q : '', perPage : 10, page : 1, status : null }

    /* eslint-enable */
    const data = await Project.findAll()
    const queryLowered = q.toLowerCase()
    const filteredData = data
     .filter(
        project =>
          /* eslint-disable operator-linebreak, implicit-arrow-linebreak */
          (project.description.toLowerCase().includes(queryLowered) ||
            project.project_title.toLowerCase().includes(queryLowered)) &&
          project.document_file.toLowerCase() === ( status && status.toLowerCase() || project.document_file.toLowerCase())
      )
      .sort(sortCompare('id')) 
      .reverse()
    /* eslint-enable  */
  
    res.json({
      allData: data,
      projects: paginateArray(filteredData, perPage, page),
      total: filteredData.length
    })
      
      
    

  }




  
