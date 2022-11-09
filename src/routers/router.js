import defaultController  from "../controllers/default.controller.js"
import cardContoller  from "../controllers/card.controller.js"
import userController  from "../controllers/user.controller.js"
import memberController  from "../controllers/member.controller.js"

import express  from 'express'
import projectController from "../controllers/project.controller.js";
import postController from "../controllers/post.controller.js"
import taskController from "../controllers/task.controller.js"
let  router = express.Router();



router.use("/users", userController)
router.use("/members", memberController)
router.use("/projects", projectController)
router.use("/cards", cardContoller)
router.use("/tasks", taskController)
router.use("/posts", postController)
router.use("/", defaultController)

router.use(function(req,res){
    res.status(404).json({error:"path not implemented"});
});

export default router