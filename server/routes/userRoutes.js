const express = require("express");
const { CheckTest } = require("../controllers/testController");
const { updateProfile } = require("../controllers/userController");
const { register } = require("../controllers/userController");


const router = express.Router();

router.post("/greet", CheckTest);
router.patch("/api/v1/update-profile/:id", updateProfile);
router.post("/register",  register);

module.exports = router;
