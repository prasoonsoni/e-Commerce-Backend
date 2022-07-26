const mongoose = require('mongoose')
const { Schema } = mongoose

const ProductInventorySchema = new Schema({
    quantity:{type:Number, required:true},
    created_at: { type: Number, default: Date.now() },
    modified_at: { type: Number, default: Date.now() },
    deleted_at:{type:Number, default:0}
})

module.exports = mongoose.model('ProductInventory', ProductInventorySchema)
