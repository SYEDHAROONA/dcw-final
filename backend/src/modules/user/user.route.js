const express = require('express')
const userController = require('./controllers/user.controller')
const router = express.Router()

router.get('/',userController.getUser)

module.exports = router