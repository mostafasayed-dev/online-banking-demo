const mongoose = require('mongoose')

const historySchema = mongoose.Schema({
    reference_number: {
        type: String,
        required: true
    },
    transaction: {
        type: String,
        required: true
    },
    from_account: {
        type: String
    },
    to_account: {
        type: String
    },
    from_amount: {
        type: Number
    },
    to_amount: {
        type: Number
    },
    from_account_type: {
        type: String
    },
    to_account_type: {
        type: String
    },
    from_currency: {
        type: String
    },
    to_currency: {
        type: String
    }
}, {
    timestamps: true /* createdAt & updatedAt columns*/
})

const History = mongoose.model('History', historySchema)
module.exports = History