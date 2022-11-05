const mongoose = require('mongoose');

async function getDB() {
  
  try {
    let db = await mongoose.connect('mongodb://127.0.0.1:27017/test');
    return db
  } catch (err) {
    console.log(err)
    return err
  }

  
  const Cat = db.model('Cat', { id:String, name: String });
  const kitty = new Cat({ name:"Zulkarnne", id:"sdjkasjkdhsakj" });
  kitty.save().then(() => console.log('meow'))

  let cat = await db.model("Cat").find({_id: "6363ce4e641673f30505c1db"})
  console.log(JSON.parse(cat))

}

getDB().then().catch()
module.exports = {getDB}