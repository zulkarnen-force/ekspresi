require('dotenv').config()
const {DataTypes} = require("sequelize")
var createError = require('http-errors')
var express = require('express')
var router = require('./src/routers/router')
var Member = require("./models/members")
const {getDB} = require("./src/databases/db")


var app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: false }))


app.use(router)

// init()

// catch 404 and forward to error handler
// app.use(function (req, res, next) {
//     next(createError(404))
// })

// error handler
// app.use(function (err, req, res, next) {
//     // 404 Not Found.
//     if (err.status === 404) {
//       return res
//         .status(404)
//     }
    
//     return res.status(err.status || 500)
// })

// Start listening.

const userInstance = Member(getDB(), DataTypes)
// userInstance.findAll().then(e => console.log(e)).catch(err => console.log(err))
// userInstance.create({id:1,firstName:"firstName"})


app.listen(3000, async () => {
    console.log('Server started on http://localhost:3000')
    console.log('Press Ctrl-C to terminate...')
})

module.exports = app