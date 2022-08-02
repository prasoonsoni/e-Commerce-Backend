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

const editAddress = async(req, res)=>{
    try {
        const id = req.user.id
        const address_id = new ObjectId(req.params.id)
        const { address_line1, address_line2, city, postal_code, state, country, telephone } = req.body
        const user = await User.findOne({ _id: id })
        if (!user) {
            return res.json({ success: false, message: 'User not found' })
        }
        const address = await UserAddress.findOne({ _id: address_id })
        if (!address) {
            return res.json({ success: false, message: 'Address not found' })
        }
        if(address.user_id.toString() !== user._id.toString()){
            return res.json({ success: false, message: 'You are not authorized to edit this address' })
        }
        const updatedAddress = await UserAddress.updateOne({ _id: address_id }, {
            address_line1: address_line1,
            address_line2: address_line2,
            city: city,
            postal_code: postal_code,
            state: state,
            country: country,
            telephone: telephone,
            modified_at: Date.now()
        })
        if (!updatedAddress) {
            return res.json({ success: false, message: 'Error updating address' })
        }

        return res.json({ success: true, message: 'Address updated Successfully' })
    } catch (error) {
        console.log(error.message)
        res.json({ success: false, message: "Some Internal Server Error Occured." })
    }
}

module.exports = { addAddress, editAddress }