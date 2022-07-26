const mongoose = require('mongoose')
const { Schema } = mongoose

const UserAddressSchema = new Schema({
    user_id: { type: mongoose.Schema.Types.ObjectId, required: true, ref: 'User' },
    address_line1: { type: String, required: true },
    address_line2: { type: String, required: true },
    city: { type: String, required: true },
    postal_code: { type: Number, required: true },
    state: { type: String, required: true },
    country: { type: String, required: true },
    telephone: { type: Number, required: true },
    mobile: { type: Number, required: true },
    created_at: { type: Number, default: Date.now() },
    modified_at: { type: Number, default: Date.now() }
})

module.exports = new mongoose.model('UserAddress', UserAddressSchema)