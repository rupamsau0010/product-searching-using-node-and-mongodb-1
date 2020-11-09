const mongoose = require("mongoose");

const connect = async () => {
  // Connecting MongoDB atlas with the server.js...
  mongoose
    .connect(process.env.URI, {
      useUnifiedTopology: true,
      useCreateIndex: true,
      useNewUrlParser: true,
    })
    .then(() => {
      console.log("Succesfully connected to Database");
    })
    .catch((error) => {
      console.log(`Connection failed with ${error}`);
    });
};

module.exports = connect
