const express = require('express');
const { CheckTest } = require('../controllers/testController');
const { getAllRecipes, getSingleRecipe, createRecipe, updateRecipe } = require('../controllers/recipeController')
const { Authenticate } = require('../middlewares/authMiddleware');

const router = express.Router();

// GET ALL RECIPES
router.get('/', getAllRecipes);

// GET A RECIPE
router.get('/:id', getSingleRecipe);

// CREATE A RECIPE
router.post('/greet', Authenticate, createRecipe);

// UPDATE A RECIPE
router.patch('/:id', Authenticate, updateRecipe);

// EXPORT ROUTE
module.exports = router;
