import { mongoose, model } from "mongoose"
import Cat from "../entities/test.js"

export default class Repository {

    constructor(db = mongoose) {
        this.db = db
    }

    async getAll() {
        let a = await Cat.find()
        return a
    }
}

