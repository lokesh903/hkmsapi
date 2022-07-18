var {user:User}= require("../models")
var { paginateArray, sortCompare } = require('./utils/utils') 
exports.createUser = async (req,res) => {
    const newUser = await User.create({
          name: req.body.name ,
          user_type:req.body.user_type ,
          phone_no:req.body.phone_no ,
          email: req.body.email,
          status:req.body.status
      }).catch(err=>{
          res.send(err)
      })
      res.json(newUser)
    }

// GET Updated DATA
exports.getUsers = async (req,res)=> {
    const { q = '', perPage = 10, page = 1, role = null, status = null } = { q:req.query.q , perPage : req.query.perPage , page : req.query.perPage, role :req.query.role, status :req.query.status}  
    /* eslint-disable  */
    console.log(q,perPage,page,role,status);
    const data = await User.findAll()
    console.log(data);
    const queryLowered = q.toLowerCase()
    const filteredData = data.filter(
      user =>
        (user.name.toLowerCase().includes(queryLowered) || user.name.toLowerCase().includes(queryLowered)) &&
        user.user_type === (role || user.user_type) &&
        user.status === (status || user.status)
    )
    /* eslint-enable  */
  
    
      res.json({
        users: paginateArray(filteredData, perPage, page),
        total: filteredData.length
      })
    
  }