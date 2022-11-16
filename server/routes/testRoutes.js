const express = require('express')
const { getSingleRecipe } = require('../controllers/getSingleRecipeController')
const { CheckTest } = require('../controllers/testController')
const { Authenticate } = require('../middlewares/authMiddleware')

const router = express.Router()


// use the Authenticate middleware to protect routes
router.post('/greet', Authenticate, CheckTest)

// get a single recipe route
router.get('/recipe:id', getSingleRecipe)

module.exports = router

