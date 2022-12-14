import express  from "express"
let memberController  = express.Router()
import Repo  from '../repositories/repository.js'
import User  from "../entities/user.js"
import Member  from "../entities/member.js"
import MemberService  from "../services/member.service.js"
import {body, validationResult}  from "express-validator"

let repo = new Repo(Member)
let service = new MemberService(repo)

memberController.get("/", async (req, res) => {
    let users = await service.getAll()
    res.status(200).json(users)
})  


memberController.get("/:id", async (req, res) => {
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


memberController.put("/:id", async (req, res) => {
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


memberController.post("/", body("email").isEmail(), async (req, res) => {
    
    try {
        let member = await service.create(req)

        return res.status(201).json({
            msg:"member has been successfully created",
            member
        })

    } catch (err) {
        return res.status(500).json({ 
            "error":err.message,
        })
    }

})  




memberController.delete("/:id", async (req, res) => {
    let id = req.params.id
    try {
        let member = await service.delete(id)

        return res.status(200).json({
            msg:"member has been successfully deleted",
            member
        })

    } catch (err) {
        return res.status(500).json({ 
            "error":err.message,
        })
    }

})  




export default memberController 