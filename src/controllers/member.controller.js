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
    let member = await service.getOne({id:id})
    res.status(200).json(member)
})  


memberController.put("/:id", async (req, res) => {
    let id = req.params.id
    let member = await service.getOne({id:id})
    if (member) {
        // update
        console.log('update')
        return
    }
    console.log('not-found')
})  


memberController.post("/", body("email").isEmail(), async (req, res) => {
    
    try {
        let member = await service.create(req)
        return res.status(201).json({
            msg:"member has been successfully created",
            member
        })
    } catch (err) {
        
        return res.status(400).json({ 
            "msg":err.message,
        })
    }

})  





export default memberController 