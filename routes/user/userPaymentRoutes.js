const express = require('express')
const router = express.Router()
const userPaymentController = require('../../controllers/user/userPaymentController')
const fetchUser = require('../../middlewares/fetchUser')

router.post('/add', fetchUser, userPaymentController.addPaymentMethod)

module.exports = router