const mongoose = require('mongoose')

const rateSchema = mongoose.Schema({
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

rateSchema.statics.isValidCurrencyForTransfers = async (fromCurrency, toCurrency) => {
    const from = await Rates.findOne({currency: fromCurrency})
    const to  = await Rates.findOne({currency: toCurrency})
    if(from && to){
        if(from.is_base_currency || to.is_base_currency){
            return true;
        }else{
            return false;
        }
    }

    return true;
}

const Rates = mongoose.model('Rates', rateSchema)
module.exports = Rates