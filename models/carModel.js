const mongoose = require('mongoose')

const schema = mongoose.Schema({
    name: String,
    color: { type: String, enum: ['black', 'red', 'green'], required: true }, // Henry Ford
    ownerId: {
        type: mongoose.Types.ObjectId,
        ref: 'User',
    },
    picture: mongoose.Schema.Types.Mixed,

    images: mongoose.Schema.Types.Mixed
})



const Cars = mongoose.model('Car', schema)


module.exports = Cars