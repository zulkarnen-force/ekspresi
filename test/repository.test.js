
import Member  from "../src/entities/member.js"
import Repository  from "../src/repositories/repository.js"
import {expect, assert} from 'chai'

let repo = new Repository(Member)

// describe('Test save data', () => {

//     it('must be gagal', async () => {
//         let member = new Member({id: "Asjhdkjsad"})    
//         repo.getAll().then(result => {
//             assert.typeOf(result, "string")
//             assert.lengthOf(result, 3, 'foo`s value has a length of 3')
//             Done()
//         })
//     });
    
// })

// describe('Member', function () {
//     describe('#save()', function () {
//       it('should save without error', function (done) {
//         var member = new Member({id: "id"});
//         member.save();
//         done()

//       });
//     });
//   });



//   describe('Member', function () {
//     describe('#save()', function () {
//       it('should save without error', function (done) {
//         var member = new Member();
//         let save = member.save().then(result => {
//             if (result) done(result);
//             done()
//         });
       
//       });
//     });
//   });

describe('User', function () {
    
    describe('#save()', function () {
      it('should save without error', function (done) {
        var user = new Member({id:"sadasd"});
        user.save(function (err) {
            assert.typeOf(err, 'Error')
          if (err) done(err);
          else done();

        });
      });
    });

  });