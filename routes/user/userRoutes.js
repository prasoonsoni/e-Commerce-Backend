const express = require('express')
const router = express.Router()
const userController = require('../../controllers/user/userController')
const fetchUser = require('../../middlewares/fetchUser')

router.post('/register', userController.addUser)
router.get('/login', userController.loginUser)
router.put('/edit', fetchUser, userController.editUser)
router.put('/changepassword', fetchUser, userController.changePassword)
router.get('/:id', userController.getUserById)
router.get('/', fetchUser, userController.getUser)

module.exports = router