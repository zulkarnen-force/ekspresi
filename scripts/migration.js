const User = require("../src/entities/user")
const Card = require("../src/entities/card")
const readToObject = require("../src/utils/json.util")
const fs = require("fs")
const { getDB } = require("../src/databases/db")
const Task = require("../src/entities/task")
const Post = require("../src/entities/post")
const Member = require("../src/entities/member")
const Project = require("../src/entities/project")




async function migrationUser() {
    let data = readToObject('./users_mongoable1667572754376.json')
    await getDB()
    User.insertMany(data).then(() => console.log("Success")).catch(e => console.log(e))
}

async function migrationCards() {
    let data = readToObject('./cards_mongoable1667574314738.json')
    await getDB()
    Card.insertMany(data).then(() => console.log("Success")).catch(e => console.log(e))
}

async function migrationFromJson(filename, model) {
    let data = readToObject(filename)
    await getDB()
    model.insertMany(data).then(() => console.log("Success")).catch(e => console.log(e))
}


async function check() {
    let users = await User.find()
    console.log(users)
} 

function test() {
    let data = readToObject('./users.json')
    data.forEach(e => {
        let data = new Date(e.metadata.lastSignInTime)
      
        console.log(data)
        

    });
    let date = new Date()
    console.log(new Date(Date.now()))
} 

// test()

// migrationCards().then().catch()
// migrationFromJson("./tasks.json", Task).then().catch()
// migrationFromJson("./posts.json", Post).then().catch()
// migrationFromJson("./members.json", Member).then().catch()

async function migrationFromJson(filename, model) {

    await getDB()
    let data = readToObject(filename)
    model.insertMany(data).then(() => console.log("OK: Migrate")).catch(e => console.log(e))
    
}





async function up(filenames, models) {
    for (let i = 0; i < models.length; i++) {
        const model = models[i];
        await migrationFromJson(`${filenames[i]}.json`, model)
    }
}

// let filenames = ["users", "posts", "members", "tasks", "cards"]
// let models = [User, Post, Member, Task, Card]

let filenames = ["projects.ok.ok"]
let models = [Project]

up(filenames, models).then(() => console.log("OK")).catch((e) => console.error(e))