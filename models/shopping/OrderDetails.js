const mongoose = require('mongoose')
const { Schema } = mongoose

const OrderDetailsSchema = new Schema({
    user_id: { type: mongoose.Schema.Types.ObjectId, required: true, ref: 'User' },
    total:{type:Number, required:true, default:0},
    payment_id: { type: mongoose.Schema.Types.ObjectId, required: true, ref: 'PaymentDetails' },
    created_at: { type: Number, default: Date.now() },
    modified_at: { type: Number, default: Date.now() }
})

module.exports = mongoose.model('OrderDetails', OrderDetailsSchema)