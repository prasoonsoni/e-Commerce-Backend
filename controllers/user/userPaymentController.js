require('dotenv').config()
const User = require('../../models/user/User')
const UserPayment = require('../../models/user/UserPayment')
const { ObjectId } = require('mongodb')

const addPaymentMethod = async (req, res) => {
    try {
        const user_id = new ObjectId(req.user.id)
        const user = await User.findOne({ _id: user_id })
        if (!user) {
            return res.json({ success: false, message: 'User not found' })
        }
        const { payment_type, provider, account_number, expiry_date } = req.body
        const userPayment = await UserPayment.create({
            user_id,
            payment_type,
            provider,
            account_number,
            expiry_date,
            created_at: Date.now(),
            modified_at: Date.now()
        })
        if (!userPayment) {
            res.json({ success: false, message: 'Error adding payment method.' })
        }
        res.json({ success: true, message: 'Payment method added successfully' })
    } catch (error) {
        console.log(error.message)
        res.json({ success: false, message: "Some Internal Server Error Occured." })
    }
}

const editPaymentMethod = async (req, res) => {
    try {
        const user_id = new ObjectId(req.user.id)
        const user = await User.findOne({ _id: user_id })
        if (!user) {
            return res.json({ success: false, message: 'User not found' })
        }
        const { payment_type, provider, account_number, expiry_date } = req.body
        const userPayment = await UserPayment.updateOne({ user_id, _id: new ObjectId(req.params.id) }, {
            payment_type,
            provider,
            account_number,
            expiry_date,
            modified_at: Date.now()
        })
        if (!userPayment) {
            res.json({ success: false, message: 'Error editing payment method.' })
        }
        res.json({ success: true, message: 'Payment method edited successfully' })
    } catch (error) {
        console.log(error.message)
        res.json({ success: false, message: "Some Internal Server Error Occured." })
    }
}

const deletePaymentMethod = async (req, res) => {
    try {
        const user_id = new ObjectId(req.user.id)
        const user = await User.findOne({ _id: user_id })
        if (!user) {
            return res.json({ success: false, message: 'User not found' })
        }
        const paymentMethod = await UserPayment.findOne({ user_id, _id: new ObjectId(req.params.id) })
        if (!paymentMethod) {
            res.json({ success: false, message: 'Payment method not found' })
        }
        const userPayment = await UserPayment.deleteOne({ user_id, _id: new ObjectId(req.params.id) })
        if (!userPayment) {
            res.json({ success: false, message: 'Error deleting payment method.' })
        }
        res.json({ success: true, message: 'Payment method deleted successfully' })
    } catch (error) {
        console.log(error.message)
        res.json({ success: false, message: "Some Internal Server Error Occured." })
    }
}

const getAllPaymentMethods = async (req, res) => {
    try {
        const user_id = new ObjectId(req.user.id)
        const user = await User.findOne({ _id: user_id })
        if (!user) {
            return res.json({ success: false, message: 'User not found' })
        }
        const userPayment = await UserPayment.find({ user_id })
        if (!userPayment) {
            res.json({ success: false, message: 'No payment methods found' })
        }
        res.json({ success: true, message: 'Payment methods found', data: userPayment })
    } catch (error) {
        console.log(error.message)
        res.json({ success: false, message: "Some Internal Server Error Occured." })
    }
}

const getPaymentMethodById = async (req, res) => {
    try {
        const user_id = new ObjectId(req.user.id)
        const user = await User.findOne({ _id: user_id })
        if (!user) {
            return res.json({ success: false, message: 'User not found' })
        }
        const userPayment = await UserPayment.findOne({ user_id, _id: new ObjectId(req.params.id) })
        if (!userPayment) {
            res.json({ success: false, message: 'Payment method not found' })
        }
        res.json({ success: true, message: 'Payment method found', data: userPayment })
    } catch (error) {
        console.log(error.message)
        res.json({ success: false, message: "Some Internal Server Error Occured." })
    }
}

module.exports = { addPaymentMethod, editPaymentMethod, deletePaymentMethod, getAllPaymentMethods, getPaymentMethodById }