const express = require('express');
var cheerio = require("cheerio");
var request = require("request");
const router = express.Router();
const Article = require('../models/article'); 

//get a list of articles from the site
router.get('/scrape', function(req,res){
  request("https://www.sciencedaily.com/news/top/science/", function(error, response, html) {
  if (!error && response.statusCode == 200) {
    //console.log(html);
    const $ = cheerio.load(html);

    var results = [];
     const parent = $("#featured_blurbs").children(".tab-pane");

     parent.each(function(i, element) {
        var url = $(element).children('.row').children().find('.latest-image').children().attr("href");

        var title = $(element).children('.row').children().find('.latest-head').text();

        var summary = $(element).find('.latest-summary').text();

        //console.log (summary);

        results.push({
          headline: title,
          summary: summary,
          url: url
        })

        Article.create(results);


      });
      console.log(results);
    }
  });

});

//get a list of articles from the database
router.get('/articles', function(req,res){
  res.send({type:'GET'});
});

module.exports = router;