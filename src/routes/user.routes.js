const { Router } = require("express");

const userController = require("../controllers/user.controller");
const authenticatedUser = require("../middlewares/authenticatedUser");

const router = Router();
// const router = express.Router(); // like this also

router.post("/signup", userController.register);
router.post("/signin", userController.login);
router.get("/self", authenticatedUser, userController.self);

module.exports = router;
