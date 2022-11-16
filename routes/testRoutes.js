const express = require('express')
const { CheckTest } = require('../controllers/testController')

const router = express.Router()



router.post('/greet', CheckTest)



module.exports = router

