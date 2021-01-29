const mongoose = require('mongoose')

const rimSchema = mongoose.Schema({
    currency: {
        type: String,
        required: true,
    },
    buy_rate: {
        type: Number,
        required: true
    },
    sell_rate: {
        type: Number,
        required: true
    },
    is_base_currency: {
        type: Boolean,
        required: true,
        default : false
    }
}, {
    timestamps: true /* createdAt & updatedAt columns*/
})

const Rates = mongoose.model('Rates', rimSchema)
module.exports = Rates