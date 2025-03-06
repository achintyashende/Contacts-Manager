const mongoose = require('mongoose');

const contactSchema = mongoose.Schema({
    name: {
        type: String,
        required: [true, "Please enter a name"]
    },
    email: {
        type: String,
        required: [true, "Please enter a valid email"],
        unique: true
    },
    phone: {
        type: String,
        required: [true, "Please enter a phone number"]
    }
}, {
    timestamps: true
})

module.exports = mongoose.model('Contact', contactSchema)