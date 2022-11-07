const userController = require("express").Router()
const Repo = require('../repositories/user.repository')
const {getDB} = require('../databases/db')
const User = require("../entities/user")
const UserService = require("../services/user.service")

const EXAMPLE_REQ = {
    email:"zulkarnen@gmail.com",
    password:"supersecret",
}


let repo = new Repo(User)
let service = new UserService(repo)

// class UserController {
//     constructor(repo, )
// }

// let repo = new userRepo(User)

userController.post("/test", async (req, res) => {
    // "1667525461"
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


userController.post("/", async (req, res) => {
    // let user = await service.getUserById(req.params.id)
    // res.status(200).json(user)
    let {ok, result} = await service.saveNewUser(req.body)

    console.log(result)
    if (!ok) {
        return res.status(400).json({
            "msg":"user exists"
        })
    }

    res.status(201).json({
        "msg":"user has been created successfully",
        result
    })
})  


module.exports = userController 