const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
var cheerio = require("cheerio");
var request = require("request");

//set up express app
const app = express();

//connect to mongodb
mongoose.connect('mongodb://localhost/scrapenews');
mongoose.Promise = global.Promise;

// Sets up the Express app to handle data parsing

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));
// parse application/json
app.use(bodyParser.json());

//route to get articles from db
app.use('/api', require('./routes/scrape-routes') );
//listen for requests
app.listen(process.env.port || 3000, function(){
  console.log('now listening for requests');
});

