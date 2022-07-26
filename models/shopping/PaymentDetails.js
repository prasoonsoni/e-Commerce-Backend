const mongoose = require('mongoose')
const { Schema } = mongoose

const PaymentDetailsSchema = new Schema({
    order_id: { type: mongoose.Schema.Types.ObjectId, required: true, default:new mongoose.Types.ObjectId() },
    amount: { type: Number, required: true, default: 0 },
    provider: { type: String, required: true, default: 'paytm' },
    status: { type: String, required: true, default: 'pending' },
    created_at: { type: Number, default: Date.now() },
    modified_at: { type: Number, default: Date.now() }
})

module.exports = mongoose.model('PaymentDetails', PaymentDetailsSchema)