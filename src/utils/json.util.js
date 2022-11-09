const fs = require("fs")

function readToObject(filename) {
    let file = fs.readFileSync(`${filename}`, {encoding:"utf-8"})
    return JSON.parse(file)
}


export default readToObject