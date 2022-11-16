const express = require('express')
const { CheckTest } = require('../controllers/testController')
const { Authenticate } = require('../middlewares/authMiddleware')

const router = express.Router()


// use the Authenticate middleware to protect routes
router.post('/greet', Authenticate, CheckTest)



module.exports = router

