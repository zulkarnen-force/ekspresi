const { mongoose, model } = require("mongoose")
const User = require("../entities/user")

module.exports = class Repository {

    constructor(model= User) {
        this.model = model
    }

    async getAll() {
        return await this.model.find()
    }

    async getById(id) {
        return await this.model.findOne({uid: id})
    }
}

