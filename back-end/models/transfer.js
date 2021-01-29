const mongoose = require('mongoose')
const { generateReferenceNumber } = require('../support/support')

const transferSchema = mongoose.Schema({
    transfer_type: {
        type: Number,
        required: true,
    },
    from_account: {
        type: String,
        required: true
    },
    to_account: {
        type: String,
        required: true
    },
    description: {
        type: String,
    },
    from_amount: {
        type: Number,
        required: true,
    },
    to_amount: {
        type: Number,
        required: true,
    },
    from_currency: {
        type: String,
        required: true,
    },
    to_currency: {
        type: String,
        required: true,
    },
    ref_number: {
        type: String,
    }
} , {
    timestamps: true /* createdAt & updatedAt columns*/
})

transferSchema.pre('save', function(next){
    const transfer = this;
    transfer.ref_number = generateReferenceNumber();
    console.log(transfer.ref_number)
    next();
})

const Transfer = mongoose.model('Transfer', transferSchema)
module.exports = Transfer