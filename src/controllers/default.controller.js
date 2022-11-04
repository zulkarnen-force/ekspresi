const defaultController = require("express").Router()
const DefaultRepo = require('../repositories/default.repository')
const {getDB} = require('../databases/db')


defaultController.get("/", async (req, res) => {
    let db = await getDB()
    let repo = new DefaultRepo(db)
    let all = await repo.getAll()
    return res.status(200).json(
        all
    )
  
})

module.exports = defaultController