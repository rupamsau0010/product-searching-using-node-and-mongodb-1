const mongoose = require("mongoose")

const searchSchema = new mongoose.Schema({
    searchTags: String
})

const Search = mongoose.model("Search", searchSchema)

module.exports = Search