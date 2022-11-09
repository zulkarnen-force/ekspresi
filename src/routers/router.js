import defaultController  from "../controllers/default.controller.js"
import userController  from "../controllers/user.controller.js"
import memberController  from "../controllers/member.controller.js"

import express  from 'express'
let  router = express.Router();

router.use("/users", userController)
router.use("/members", memberController)
router.use("/", defaultController)


export default router