const mongoose = require('mongoose')
const { Schema } = mongoose

const ProductCategorySchema = new Schema({
    name: { type: String, required: true },
    description:{type:String, required:true},
    created_at: { type: Number, default: Date.now() },
    modified_at: { type: Number, default: Date.now() },
    deleted_at:{type:Number, default:0}
})

module.exports = mongoose.model('ProductCategory', ProductCategorySchema)