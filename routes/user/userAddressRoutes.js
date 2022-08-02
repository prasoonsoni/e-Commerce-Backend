const express = require('express')
const router = express.Router()
const userAddressController = require('../../controllers/user/userAddressController')
const fetchUser = require('../../middlewares/fetchUser')

router.post('/add', fetchUser, userAddressController.addAddress)

module.exports = router