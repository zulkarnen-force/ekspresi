// import {expect, assert} from 'chai'

// let value = 100 
// let ErrorSeratus =  new Error("Error 100 value")

// function errorSeratus() {
//     try {
//         if (value === 100) {
//             throw ErrorSeratus
//         } 
//     } catch (err) {
//         throw Error(err.message + " error tambahan")
//     }
// }

// try {
//     let a = errorSeratus()
//     console.log("yey success ", a)
// } catch (e) {
//     console.log("so sad error ", e)
// }

// without optional message

// function isError(err = true) {
//     try {
//         if (err) {
//             throw Error("error bos")
//         }
//     } catch (err) {
//         return err
//     }

// }


// try {
//     let err = isError(true) 
//     console.log(err.message)
// } catch (e) {
//     console.log("Error dong ", e.message)
// }

