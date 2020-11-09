const express = require("express")
const enterProduct = require("../controllers/searchControllers")
const rootRoute = require("../controllers/searchControllers")
const router = express.Router()

router.get("/", rootRoute)
router.post("/enterNewProduct", enterProduct)

module.exports = router