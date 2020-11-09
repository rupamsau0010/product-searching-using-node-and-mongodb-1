const Search = require("../models/searchSchema")

const rootRoute = async(req, res) => {
    res.json({
        "alright": true
    })
}

const enterProduct = async(req, res) => {
    const search = {
        searchTags: req.body.searchTags
    }

    Search.create(search, (err, callback) => {
        if(err) {
            console.log(err);
        } else {
            console.log("Data Inserted");
            res.json({"message": true})
        }
    })
}

module.exports = enterProduct, rootRoute