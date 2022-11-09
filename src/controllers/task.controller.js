import express  from "express"
let taskController  = express.Router()
import Repository  from '../repositories/repository.js'
import Task  from "../entities/task.js"
import {body}  from "express-validator"
import TaskService from "../services/task.service.js"

let repo = new Repository(Task)
let service = new TaskService(repo)

taskController.get("/", async (req, res) => {
    let result = await service.getAll()
    res.status(200).json(result)
})  


taskController.get("/:id", async (req, res) => {
    let id = req.params.id
    try {
        let member = await service.getOne({id:id})
        return res.status(200).json(member)
    } catch (err) {
        return res.status(400).json({
            error: err.message
        })

    }
})  


taskController.put("/:id", async (req, res) => {
    let id = req.params.id
  
    try {
        let member = await service.update(id, req.body)
        res.status(200).json(member)
    } catch (err) {
        return res.status(400).json({ 
            "msg":err.message,
        })
    }

})  


taskController.post("/", body("email").isEmail(), async (req, res) => {
    
    try {
        let member = await service.create(req)

        return res.status(201).json({
            msg:"task has been successfully created",
            member
        })
    } catch (err) {
        return res.status(500).json({ 
            "msg":err.message,
        })
    }

})  




taskController.delete("/:id", async (req, res) => {
    let id = req.params.id
    try {
        let member = await service.delete(id)

        return res.status(200).json({
            msg:"member has been successfully deleted",
            member
        })

    } catch (err) {
        return res.status(500).json({ 
            "msg":err.message,
        })
    }

})  




export default taskController 