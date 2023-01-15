const mongoose = require("./connection");

const ArticleSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
  },
  text: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now   //() => Date.now()
  }, 
  id: {
    type: String,
  }
});

const Article = mongoose.model("Article", ArticleSchema);

module.exports = Article;