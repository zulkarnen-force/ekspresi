import express  from "express"
import Repository  from '../repositories/repository.js'
import Card  from "../entities/card.js"
import MemberService  from "../services/member.service.js"
import CardService from "../services/card.service.js"

let cardController  = express.Router()

let repo = new Repository(Card)
let service = new CardService(repo)


cardController.get("/", async (req, res) => {
    let users = await service.getAll()
    res.status(200).json(users)
})  


cardController.get("/:id", async (req, res) => {
    let id = req.params.id
    try {
        let data = await service.getOne({id:id})
        return res.status(200).json(data)
    } catch (err) {
        return res.status(400).json({
            error: err.message
        })

    }
})  


cardController.put("/:id", async (req, res) => {
    let id = req.params.id
  
    try {
        let member = await service.update(id, req.body)
        res.status(200).json(member)
        
    } catch (err) {
        return res.status(400).json({ 
            error:err.message,
        })
    }

})  


cardController.post("/", async (req, res) => {
    
    try {
        let data = await service.create(req)

        return res.status(201).json({
            msg:"card has been successfully created",
            data
        })

    } catch (err) {
        return res.status(500).json({ 
            error:err.message,
        })
    }

})  




cardController.delete("/:id", async (req, res) => {
    let id = req.params.id
    try {
        let member = await service.delete(id)

        return res.status(200).json({
            msg:"member has been successfully deleted",
            member
        })

    } catch (err) {
        return res.status(500).json({ 
            error:err.message,
        })
    }

})  


export default cardController 