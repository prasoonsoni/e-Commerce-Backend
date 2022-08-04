const mongoose = require('mongoose')
const { Schema } = mongoose

const UserPaymentSchema = new Schema({
    user_id: { type: mongoose.Schema.Types.ObjectId, required: true, ref: 'User' },
    payment_type: { type: String, required: true },
    provider: { type: String, required: true },
    account_number: { type: Number, required: true },
    expiry_date: { type: String, required: true },
    created_at: { type: Number, default: Date.now() },
    modified_at: { type: Number, default: Date.now() }
})

module.exports = new mongoose.model('UserPayment', UserPaymentSchema)