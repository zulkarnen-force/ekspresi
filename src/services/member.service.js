import  Member  from "../entities/member.js"
import  Repository  from "../repositories/repository.js"
import  generateId   from "../utils/common.util.js"


export default  class MemberService {
    
    constructor(repo = Repository) {
        this.repo = repo
    }

    getAll () {
        return this.repo.getAll()
    }

    
    getOne(query) {
        return this.repo.getOne(query)
    }


    async create(request) {
        try {
            return await this.repo.create(request.body)
        } catch (err) {
            return err
        }
    }

    
    // async save(request) {
    //     let data = request.body 
    //     let member = new Member(data)
    //     // member.id = generateId()
    //     try {
    //         let result = await this.repo.save(member)
    //         return {ok: true, result: result} 
    //     } catch {
    //         console.log("catch ", result)
    //         return {ok: false, result: result} 
    //     }

    //     // console.log(result)
            
    //     if (!result) {
    //     }  

    // }
}



