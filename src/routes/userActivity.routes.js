const { Router } = require("express");

const userActivityController = require("../controllers/userActivity.controller");

const router = Router();

router.post("/create-activity", userActivityController.createUserActivity);
router.get("/get-all-activity", userActivityController.getUserActivity);

module.exports = router;
