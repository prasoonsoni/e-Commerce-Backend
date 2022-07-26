const mongoose = require('mongoose')
const {Schema} = mongoose

const CartItemSchema = new Schema({
    session_id: { type: mongoose.Schema.Types.ObjectId, required: true, ref: 'ShoppingSession' },
    product_id: { type: mongoose.Schema.Types.ObjectId, required: true, ref: 'Product' },
    quantity: { type: Number, required: true, default: 1 },
    created_at: { type: Number, default: Date.now() },
    modified_at: { type: Number, default: Date.now() }
})

module.exports = mongoose.model('CartItem', CartItemSchema)