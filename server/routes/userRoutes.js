// IMPORT MODULES HERE
const express = require("express");
const { CheckTest } = require("../controllers/testController");
const { register, login, updateProfile } = require("../controllers/userController");

// ROUTER CONFIGURATION
const router = express.Router();

// ENDPOINT => TEST
router.post("/greet", CheckTest);

// ENDPOINT => REGISTER USER
router.post("/register",  register);

// ENDPOINT => LOGIN USER
router.post("/login", login)

// ENDPOINT => UPDATE USER PROFILE
router.patch("/update-profile/:id", updateProfile);


// EXPORT ROUTE
module.exports = router;
