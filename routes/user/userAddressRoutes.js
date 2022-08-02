const express = require('express')
const router = express.Router()
const userAddressController = require('../../controllers/user/userAddressController')
const fetchUser = require('../../middlewares/fetchUser')

router.post('/add', fetchUser, userAddressController.addAddress)
router.put('/edit/:id', fetchUser, userAddressController.editAddress)

module.exports = router