const express = require('express');
const app = express();
const mustacheExpress = require('mustache-express')
const dataFile = require("./data")

app.use(express.static(__dirname + '/public'));

app.engine('mustache', mustacheExpress());
app.set('view engine', 'mustache')


app.get("/", function (req, res) {
  res.render("index", {users: dataFile.users});
});


app.get("/:userId", function (req, res) {
  var userId = req.params.userId - 1;
 res.render('user-profile', {users: dataFile.users[userId]});
})


app.listen(3000, function () {
  console.log('Successfully started express application!')
});
