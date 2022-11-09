import express  from "express"
let projectController  = express.Router()
import Repository  from '../repositories/repository.js'
import Project  from "../entities/project.js"
import {body, validationResult}  from "express-validator"
import ProjectService from "../services/project.service.js"

let repo = new Repository(Project)
let service = new ProjectService(repo)

projectController.get("/", async (req, res) => {
    let result = await service.getAll()
    res.status(200).json(result)
})  


projectController.get("/:id", async (req, res) => {
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


projectController.put("/:id", async (req, res) => {
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


projectController.post("/", body("email").isEmail(), async (req, res) => {
    
    try {
        let member = await service.create(req)

        return res.status(201).json({
            msg:"project has been successfully created",
            member
        })
    } catch (err) {
        return res.status(500).json({ 
            "msg":err.message,
        })
    }

})  




projectController.delete("/:id", async (req, res) => {
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




export default projectController 