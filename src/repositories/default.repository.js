const { mongoose, model } = require("mongoose")
const Cat = require("../entities/test")

module.exports = class Repository {

    constructor(db = mongoose) {
        this.db = db
    }

    async getAll() {
        let a = await Cat.find()
        return a
    }
}

