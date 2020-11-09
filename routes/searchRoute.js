const express = require("express")
const router = express.Router()
const searchControllers = require("../controllers/searchControllers")

router.get("/", searchControllers.rootRoute)
router.post("/enterNewProduct", searchControllers.enterProduct)
router.get("/searchNewProduct", searchControllers.searchProduct)

module.exports = router