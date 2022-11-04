const defaultController = require("../controllers/default.controller")
const userController = require("../controllers/user.controller")

const express = require('express');
const router = express.Router();

router.use("/users", userController)
router.use("/", defaultController)


module.exports = router