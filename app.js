const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
const port = process.env.PORT || 3000;
const mathjs = require("mathjs");
require("jade");
//const Operation = require("./models/operations");
//require("./dbConnect");

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static(path.join(__dirname, "views")));

app.set("view engine", "jade");

app.get("/", function(req, res) {
  res.render("index.jade");
});

var count = 4,
  collection = new Array(5),
  temp;

app.post("/", function(req, res) {
  if (count >= 0) {
    for (var i = 0; i <= 3; i++) {
      collection[i] = collection[i + 1];
    }
    collection[4] = req.body.screen1;
  } else {
    collection.shift();
    collection[4] = req.body.screen1;
  }

  var answer = mathjs.evaluate(req.body.screen1);
  answer = Math.round(answer * 100) / 100;

  count = count - 1;
  console.log(collection);
  res.render("index.jade", { answer, collection });
});

app.listen(3000, function() {
  console.log(`Server listening on port ${port}`);
});

//   var op = new Operation();
//   op.operationNo = req.body.screen1;
//   op.save(function(err) {
//     if (err) {
//       throw err;
//     }
//   });

//   if (count < 5) {
//     collection[count] = req.body.screen1;
//   } else {
//     collection.pop();
//     for (var i = 4; i > 0; i--) {
//       collection[i] = collection[i - 1];
//     }
//     collection[0] = req.body.screen1;
//   }
