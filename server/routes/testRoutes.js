const express = require("express");
const { CheckTest } = require("../controllers/testController");
const { getAllRecipes } = require("../controllers/getAllRecepieController");
const { Authenticate } = require("../middlewares/authMiddleware");

const router = express.Router();

// use the Authenticate middleware to protect routes
router.get("/", getAllRecipes);
router.post("/greet", Authenticate, CheckTest);

module.exports = router;
