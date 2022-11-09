import User  from "../entities/user.js"

class Repository {

    constructor(model= User) {
        this.model = model
    }


    async getAll() {
        return await this.model.find()
    }

    
    async getOne(query={}) {
        return await this.model.findOne(query)
    }

    
    async getById(id) {
        return await this.model.findOne({uid: id})
    }

    
    async save(model) {
        try {
            return await model.save()
        } catch (err) {
            return err
        }
    }

    
    async isExists(email) {
        try {
            let exists = await this.model.exists({email:email})
            console.log("repo exists data ", exists)
            return exists
        } catch (err) {
            return err
        }
    }


    async create(data) {
        try {
            return await this.model.create(data)
        } catch(err) {
            return err
        }
    }

     
}

export default Repository