const router = require("express").Router();
const articlesController = require("../controllers/articlesController");

router.get("/", articlesController.showArticles);
router.get("/:id", articlesController.getArticle);
router.post("/", articlesController.addArticle);
router.delete("/:id", articlesController.deleteArticle);
router.post("/:id", articlesController.updateArticle);

module.exports = router;
