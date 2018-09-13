const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//create article Schema & model
const CommentSchema = new Schema({
  author: {
    type: String,
    required:[true, "Name field is required"],
    date : Date
  },
  comment: {
    type: String,
    required:[true]
  }

});



const ArticleSchema = new Schema({
  headline: String,
  summary: String,
  url: String,
  comment: [CommentSchema]
});

const Article = mongoose.model('article', ArticleSchema);

module.exports = Article;