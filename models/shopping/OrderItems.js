const mongoose = require('mongoose')
const { Schema } = mongoose

const OrderItemsSchema = new Schema({
    order_id: { type: Schema.Types.ObjectId, ref: 'OrderDetails' },
    product_id: { type: Schema.Types.ObjectId, ref: 'Product' },
    quantity: { type: Number, default: 1, required: true },
    created_at: { type: Number, default: Date.now() },
    modified_at: { type: Number, default: Date.now() }
})

module.exports = mongoose.model('OrderItems', OrderItemsSchema)