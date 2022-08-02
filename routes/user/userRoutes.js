const express = require('express')
const router = express.Router()
const userController = require('../../controllers/user/userController')
const fetchUser = require('../../middlewares/fetchUser')

router.post('/', userController.addUser)
router.get('/', userController.loginUser)
router.put('/', fetchUser, userController.editUser)
router.put('/changepassword', fetchUser, userController.changePassword)
router.get('/:id', userController.getUserById)

module.exports = router