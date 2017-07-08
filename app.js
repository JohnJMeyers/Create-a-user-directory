const superAwesomeRoutes = require('./routes/routes.js')
const mustacheExpress = require('mustache-express')
const dataFile = require("./models/data")
const express = require('express')
const app = express();

app.use(express.static(__dirname + '/public'))
app.use(superAwesomeRoutes);

app.engine('mustache', mustacheExpress())

app.set('view engine', 'mustache')

app.listen(3000, function () {
  console.log('Successfully started express application!')
});
