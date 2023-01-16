const Article = require("../modules/articlesModule");

const showArticles = async (req, res) => {
  var articles = await Article.find();
  res.send({ list: articles });
};

const getArticle = async (req, res) => {
  var article = await Article.findOne({ _id: req.params.id });
  res.send(article);
};

const addArticle = async (req, res) => {
  let newArticle = new Article({
    title: req.body.title,
    description: req.body.description,
    text: req.body.text,
    id: req.body._id,
  });
  try {
    await newArticle.save();
    res.send({ message: true, newArticle });
  } catch (e) {
    res.send({ message: e });
  }
};

const deleteArticle = async (req, res) => {
  await Article.deleteOne({ _id: req.params.id });
  res.send({ message: "deleted" });
};

const updateArticle = async (req, res) => {
  await Article.updateOne({ _id: req.params.id }, req.body);
  res.send({ message: "updated" });
};

module.exports = {
  showArticles,
  getArticle,
  addArticle,
  deleteArticle,
  updateArticle,
};
