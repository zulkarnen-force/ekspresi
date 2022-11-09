import DefaultRepo from '../repositories/default.repository.js'
import getDB from '../databases/db.js'
import express from "express"
let defaultController = express.Router()


defaultController.get("/", async (req, res) => {
    let db = await getDB()
    let repo = new DefaultRepo(db)
    let all = await repo.getAll()
    return res.status(200).json(
        all
    )
  
})

export default defaultController