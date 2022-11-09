class Repository {

    constructor(model) {
        this.model = model
    }

    async getAll() {
        return await this.model.find()
    }

    
    async getOne(query) {
        try {
            let result =  await this.model.findOne(query)
            if (!result) {
                throw new Error("record not found")
            }
            return result
        } catch (e) {
            throw e
        }
        
    }

    
    async getById(id) {
        return await this.model.findOne({uid: id})
    }

    
    async save(model) {
        try {
            return await model.save()
        } catch (err) {
            throw err
        }
    }

    
    async isExists(email) {
        try {
            let exists = await this.model.exists({email:email})
            return exists
        } catch (err) {
            throw err
        }
    }


    async create(data) {
        try {
            let result = await this.model.create(data)
            if (result instanceof Error) {
                throw result
            }
            return result
        } catch(err) {
            throw err
        }
    }


    
    async update(model, data) {
        try {
            let result = await model.updateOne(data)
            if (result instanceof Error) {
                throw result
            }
            return result
        } catch(err) {
            throw err
        }
    }


    async delete(id) {
        try {
            let result = await this.model.deleteOne({id})
            if (result instanceof Error) {
                throw result
            }
            return result
        } catch(err) {
            throw err
        }
    }


     
}

export default Repository