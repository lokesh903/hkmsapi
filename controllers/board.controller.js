var {board:Board} = require("../models")

exports.getboards = async (req, res) => {
    console.log("query ", req.query)
    const data = await Board.findAll({where: { project_id: req.query.pid }})
    .catch(err => { res.send(err)})
    
    const boards = data.map((record) => {return {
        ...record.dataValues,
        array:JSON.parse(record.array)
    }} )
    console.log(boards);
    res.json(boards)
}
exports.updateBoard = async (req,res) => {
    const id = req.body.id
    const array = req.body.array
    var board = await Board.findByPk(id)
    board.array = JSON.stringify(array)
    board.save()
    res.send("saved successfully")
}