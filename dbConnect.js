const mongoose = require("mongoose");

module.exports = mongoose.connect(
  "mongodb://beckham999:999beckham@ds243717.mlab.com:43717/calculatordb",
  { useNewUrlParser: true },
  function(err) {
    if (err) {
      throw err;
    }
    console.log("Database connected");
  }
);
