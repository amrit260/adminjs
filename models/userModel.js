const mongoose = require('mongoose')

const userSchema = mongoose.Schema({
    name: {
        type: String
    },
    email: {
        type: String,
        required: true
    },
    encryptedPassword: {
        type: String,
        required: true
    },
    role: { type: String, enum: ['admin', 'user'], required: true, default: 'user' }
})

const userModel = mongoose.model('User', userSchema)

module.exports = userModel