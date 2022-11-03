const defaultController = require("express").Router()


defaultController.get("/", async (req, res) => {
    return res.status(200).json(
        {ok:true}
    )
})

module.exports = defaultController