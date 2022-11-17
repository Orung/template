const express = require('express');
const { CheckTest } = require('../controllers/testController');
const updateRecipe = require('../controllers/updateRecipe');
const { getAllRecipes } = require('../controllers/getAllRecepieController');
const { getSingleRecipe } = require('../controllers/getSingleRecipeController');
const { createRecipe } = require('../controllers/createRecipe');
const { Authenticate } = require('../middlewares/authMiddleware');

const router = express.Router();

// use the Authenticate middleware to protect routes
router.get('/', getAllRecipes);
router.post('/greet', Authenticate, createRecipe);

// get a single recipe route
router.get('/recipe/:id', getSingleRecipe);

// route to update recipe
router.patch('/recipe/:id', Authenticate, updateRecipe);

module.exports = router;
