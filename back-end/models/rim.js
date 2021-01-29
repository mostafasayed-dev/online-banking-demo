const mongoose = require('mongoose')

const rimSchema = mongoose.Schema({
    rim_no: {
        type: Number,
        required: true,
        unique: true,
    },
    customer_first_name: {
        type: String,
        required: true,
    },
    customer_middle_name: {
        type: String,
        required: true,
    },
    customer_last_name: {
        type: String,
        required: true,
    },
    birthdate: {
        type: Date,
        required: true,
    },
    address_1: {
        type: String,
        required: true,
    },
    address_2: {
        type: String,
    },
    phone_1: {
        type: String,
        required: true,
    },
    phone_2: {
        type: String,
    },
    branch_id: {
        type: Number,
        required: true
    }
}, {
    timestamps: true /* createdAt & updatedAt columns*/
})

const Rim = mongoose.model('Rim', rimSchema)
module.exports = Rim