// Require depandencies
require("dotenv").config()
const express = require("express")
const connect = require("./config/db")
const searchRoute = require("./routes/searchRoute")

const app = express()

// Set middleware
app.use(express.json())
app.use(express.urlencoded({extended: true}))

// Connect MongoDB atlas
connect()

// Besic Get Request to the route route
app.use("/api/", searchRoute)

const port = 3000
// Running server on port 3000
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
})