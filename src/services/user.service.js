const User = require("../entities/user")
const Repo = require("../repositories/repository")


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
}



