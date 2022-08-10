const mongoose = require('mongoose')
const { Schema } = mongoose

const ProductSchema = new Schema({
    name: { type: String, required: true },
    description: { type: String, required: true },
    sku: { type: String, required: true },
    category_id: { type: Schema.Types.ObjectId, ref: 'ProductCategory' },
    inventory_id: { type: Schema.Types.ObjectId, ref: 'ProductInventory' },
    price: { type: Number, required: true },
    discount_id: { type: Schema.Types.ObjectId, ref: 'Discount' },
    created_at: { type: Number, default: Date.now() },
    modified_at: { type: Number, default: Date.now() },
    deleted_at: { type: Number, default: 0 }
})