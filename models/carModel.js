const mongoose = require('mongoose')


const Cars = mongoose.model('Car', {
    name: String,
    color: { type: String, enum: ['black', 'red', 'green'], required: true }, // Henry Ford
    ownerId: {
        type: mongoose.Types.ObjectId,
        ref: 'User',
    },
    picture: {
        key: String,
        mimeType: String,
        bucket: {
            type: String,
            default: '/public'
        }
    },
    images: mongoose.Schema.Types.Mixed
})

module.exports = Cars