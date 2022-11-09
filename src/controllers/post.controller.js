import express  from "express"
let postController  = express.Router()
import Repository  from '../repositories/repository.js'
import Post  from "../entities/post.js"
import {body}  from "express-validator"
import PostService from "../services/post.service.js"

let repo = new Repository(Post)
let service = new PostService(repo)

postController.get("/", async (req, res) => {
    let result = await service.getAll()
    res.status(200).json(result)
})  


postController.get("/:id", async (req, res) => {
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


postController.put("/:id", async (req, res) => {
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


postController.post("/", body("email").isEmail(), async (req, res) => {
    
    try {
        let member = await service.create(req)

        return res.status(201).json({
            msg:"post has been successfully created",
            member
        })
    } catch (err) {
        return res.status(500).json({ 
            "msg":err.message,
        })
    }

})  




postController.delete("/:id", async (req, res) => {
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




export default postController 