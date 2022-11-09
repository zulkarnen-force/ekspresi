const assert = require('assert');
const Member = require("../src/entities/member")
const Repository = require("../src/repositories/repository")
const {}= require('express-validator')

let repo = new Repository(Member)

describe('Test save data', () => {
 
    it('must be gagal', async () => {
        let member = new Member()    
        let save = await repo.save(member)
        assert.equal(save, Error);
    });
    
})