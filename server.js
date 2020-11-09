// Require depandencies
require("dotenv").config()
const express = require("express")
const mongoose = require("mongoose")

const app = express()

// Set middleware
app.use(express.json())
app.use(express.urlencoded({extended: true}))

// Connecting MongoDB atlas with the server.js...
mongoose.connect(process.env.URI, {useUnifiedTopology: true, useCreateIndex: true, useNewUrlParser: true})
.then(() => {
    console.log("Succesfully connected to Database");
})
.catch((error) => {
    console.log(`Connection failed with ${error}`);
})

// Besic Get Request to the route route
app.get("/", (req, res) => {
    res.json({
        "alright": true
    })
})

const port = 3000
// Running server on port 3000
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
})