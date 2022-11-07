const { default: mongoose, MongooseError } = require("mongoose")
const User = require("../entities/user")
const Repo = require("../repositories/user.repository")


module.exports = class UserService {
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
        user.uid = "adkasdjaskljdlk"
        try {
            let exists = await this.repo.isExists(user.email)
            if (exists) {
                return { ok:false, result:null}
            } 
            
            let result = await this.repo.create(user)
                return { ok:true, result}
        } catch (err){
            return false
        }

    }
}



