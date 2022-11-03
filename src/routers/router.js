const defaultController = require("../controllers/default.controller")

const express = require('express');
const router = express.Router();

router.get("/", defaultController)

module.exports = router