const router = require("express").Router();
const userController = require("../controllers/userController");

router.post("/", userController.addUser);
router.delete("/:id", userController.deleteUser);
router.post("/:id", userController.updateUser);

module.exports = router;
