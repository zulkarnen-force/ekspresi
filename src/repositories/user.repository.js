const { mongoose, model } = require("mongoose")
const User = require("../entities/user")

module.exports = class Repository {

    constructor() {
        
    }

    async getAll() {
        let a = await User.find()
        return a
    }
}

