require('dotenv').config()
const User = require('../../models/user/User')
const UserAddress = require('../../models/user/UserAddress')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const { ObjectId } = require('mongodb')
const JWT_SECRET = process.env.JWT_SECRET

const addAddress = async (req, res) => {
    try {
        const { address_line1, address_line2, city, postal_code, state, country, telephone } = req.body
        const user = await User.findOne({ _id: req.user.id })
        if (!user) {
            return res.json({ success: false, message: 'User not found' })
        }
        const newAddress = await UserAddress.create({
            user_id: user._id,
            address_line1: address_line1,
            address_line2: address_line2,
            city: city,
            postal_code: postal_code,
            state: state,
            country: country,
            telephone: telephone
        })
        if (!newAddress) {
            return res.json({ success: false, message: 'Error creating address' })
        }
        return res.json({ success: true, message: 'Address created Successfully' })
    } catch (error) {
        console.log(error.message)
        res.json({ success: false, message: "Some Internal Server Error Occured." })
    }
}

module.exports = { addAddress }