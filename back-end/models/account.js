const mongoose = require('mongoose')

const accountSchema = mongoose.Schema({
    rim_no: {
        type: Number,
        required: true,
        ref: 'Rim'
    },
    account_no: {
        type: String,
        required: true
    },
    account_type: {
        type: String,
        required: true
    },
    account_currency: {
        type: String,
        required: true,
    },
    actual_balance: {
        type: Number,
        default: 0
    },
    available_balance: {
        type: Number,
        default: 0
    }
}, {
    timestamps: true
})

const Account = mongoose.model('Account', accountSchema)
module.exports = Account