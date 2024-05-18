const { Router } = require("express");

const userController = require("../controllers/user.controller");

const router = Router();
// const router = express.Router(); // like this also

router.post("/signup", userController.register);
router.post("/signin", userController.login);

module.exports = router;
