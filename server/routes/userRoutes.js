const express = require("express");
const { CheckTest } = require("../controllers/testController");
const { updateProfile } = require("../controllers/userController");

const router = express.Router();

router.post("/greet", CheckTest);
routter.patch("/api/v1/update-profile/:id", updateProfile);

module.exports = router;
