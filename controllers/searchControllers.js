const Search = require("../models/searchSchema")
const stringSimilarity = require("string-similarity")

module.exports.rootRoute = async(req, res) => {
    res.json({
        "alright": true
    })
}

module.exports.enterProduct = async(req, res) => {
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

module.exports.searchProduct = async(req, res) => {
    const probability = (val, index) => {
        //console.log(val);
        const prob = stringSimilarity.compareTwoStrings(req.body.searchGiven, val.searchTags);
        return {key: val._id, value: prob}
    }
    Search.find({}, (err, docs) => {
        if(err) {
            console.log(err);
        } else {
            result = docs.map(probability)
            result.sort(function(first, second){
                return second.value - first.value
            })
            res.json(result)
        }
    })
    
    //const newResult = result.filter(probability)
    //res.send(result)
}
