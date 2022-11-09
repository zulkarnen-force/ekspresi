// import { mongoose, MongooseError, ObjectId} from "mongoose"
import User from "../entities/user.js"
import Repo from "../repositories/repository.js"

import pkg from 'mongoose';
const { mongoose, MongooseError, ObjectId} = pkg;

export default  class UserService {

    constructor(repo) {
        this.repo = repo
    }

    getUsers () {
        return this.repo.getAll()
    }

    
    getUserById (id) {
        return this.repo.getById(id)
    }

    async saveNewUser(requestBody){
        let {email, password} = requestBody

        let user = {}
        user.email = email
        user.password = password
        user.uid = new mongoose.Types.ObjectId();

        try {
            
            let exists = await this.repo.isExists(user.email)

            if (exists) {
                return {ok:false, result:{}}
            }
         
            let newUser = new User(user)
            let result = await this.repo.save(newUser)
            return { ok:true, result}

        } catch (err){
            console.log("errror", err)
            return false
        }
    }
}



