const express = require('express')
const router = express.Router()
const userController = require('../../controllers/user/userController')

router.post('/', userController.addUser)
router.get('/', userController.loginUser)

module.exports = router