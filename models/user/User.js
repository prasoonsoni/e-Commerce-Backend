const mongoose = require('mongoose')
const { Schema } = mongoose

const UserSchema = new Schema({
    username: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    first_name: { type: String, required: true },
    last_name: { type: String, required: true },
    telephone: { type: Number, required: true },
    created_at: { type: Number, default: Date.now() },
    modified_at: { type: Number, default: Date.now() }
})

module.exports = new mongoose.model('User', UserSchema)

