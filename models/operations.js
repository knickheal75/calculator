const mongoose = require("mongoose");

var Schema = mongoose.Schema;

var operationSchema = new Schema({
  operationNo: [
    {
      type: String
    }
  ]
});

module.exports = mongoose.model("Operation", operationSchema, "operations");
