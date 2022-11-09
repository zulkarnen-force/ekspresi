import express from  "express"
let userController =  express.Router()
import Repository from  "../repositories/repository.js"
import User from  "../entities/user.js"
import UserService from  "../services/user.service.js"
import {body, validationResult} from  "express-validator"

const EXAMPLE_REQ = {
    email:"zulkarnen@gmail.com",
    password:"supersecret",
}


let repo = new Repository(User)
let service = new UserService(repo)


userController.post("/test", async (req, res) => {
    let id = (new Date()).getTime().toString(36) + Math.random().toString(36).slice(2)
    EXAMPLE_REQ.id = id
    let d = new Date("Fri, 13 Mar 2020 09:42:27 GMT")
    let dt = new Date(1648456759)


    try {
        let user = await User.create(EXAMPLE_REQ) // convert timestamp second firebase to timestamp js
        res.json(user)
    } catch (err) {
        res.json({"msg":err.message})
    }

})


userController.get("/", async (req, res) => {
    let users = await service.getUsers()
    res.status(200).json(users)
})  


userController.get("/:id", async (req, res) => {
    let user = await service.getUserById(req.params.id)
    res.status(200).json(user)
})  


userController.post("/", body("email").isEmail(), async (req, res) => {
    let {ok, result} = await service.saveNewUser(req.body)

    console.log("result ", result)

    console.log("Oke ", ok)
    const errors = validationResult(req);

        if (!errors.isEmpty()) {
            return res.status(400).json({
                success: false,
                errors: errors.array()
            });
        }

    if (!ok) {
        return res.status(400).json({
            "msg":"user exists"
        })
    }

    return res.status(201).json({
        "msg":"user has been created successfully",
        result
    })
})  





export default userController 