const userController = require("express").Router()
const userRepo = require('../repositories/user.repository')
const {getDB} = require('../databases/db')
const User = require("../entities/user")


const EXAMPLE_REQ = {
    email:"zulkarnen@gmail.com",
    password:"supersecret",
}


userController.post("/", async (req, res) => {
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


userController.get("/show", async (req, res) => {

    // let user = User
    let repo = new userRepo()
    let users = await repo.getAll()
    /// let users = await user.find()
    // user.save().then(e => res.json(e)).catch()
    // res.json(users[0].createdAt)
    // let firstUser = users[48]
    res.status(200).json(users)
   
})  

module.exports = userController