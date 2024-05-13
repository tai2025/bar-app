const express = require("express")
const cors = require("cors")

const router = express.Router()
router.use(cors())

router.get("contest", (req, res) => {
    res.send([])
})