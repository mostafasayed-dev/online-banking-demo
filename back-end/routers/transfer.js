const express = require('express')
const Transfer = require('../models/transfer')
const Account = require('../models/account')
const History = require('../models/history')
const Rates = require('../models/rates')
const auth = require('../middleware/auth')

const router = express.Router()

router.post("", auth, async (req, res) => {
    
    const transfer = new Transfer({
        ...req.body
    })

    // console.log('transfer', transfer)
    try{
        let from_account = transfer.from_account;
        let to_account = transfer.to_account;
        let from_amount = transfer.from_amount;
        let to_amount = transfer.to_amount;

        if(from_account && to_account && from_amount && to_amount){
            if(from_account == to_account)
            {
                return res.status(400).send({ status: "rejected", errorDescription: "Can't transfer within the same accounts!"})
            }
            const fromAccount = await Account.findOne({account_no: from_account})
            const toAccount = await Account.findOne({account_no: to_account})
            //console.log(fromAccount.account_no)
            if(fromAccount && toAccount){
                //currency check
                // fromCurrency = fromAccount.account_currency;
                // toCurrency = toAccount.account_currency;
                // if(fromCurrency && toCurrency){
                //     const isValidTeansfer = await Rates.isValidCurrencyForTransfers(fromCurrency, toCurrency);
                //     if(!isValidTeansfer){
                //         return res.status(400).send({ status: "rejected", description: "can not transfer between foreign accounts!"})
                //     }
                // }

                fromAccount.available_balance = fromAccount.available_balance - from_amount
                fromAccount.actual_balance = fromAccount.actual_balance - from_amount
                fromAccount.save().then(result => {
                    toAccount.available_balance = toAccount.available_balance + to_amount
                    toAccount.actual_balance = toAccount.actual_balance + to_amount
                    toAccount.save().then(result2 => {
                        transfer.save().then(result3 => {
                            const history = new History();
                            history.reference_number = transfer.ref_number;
                            history.transaction = "Account to Account Transfer";
                            history.from_account = transfer.from_account;
                            history.to_account = transfer.to_account;
                            history.from_amount = -transfer.from_amount;
                            history.to_amount = transfer.to_amount;
                            history.from_account_type = fromAccount.account_type;
                            history.to_account_type = toAccount.account_type;
                            history.from_currency = fromAccount.account_currency;
                            history.to_currency = toAccount.account_currency;

                            history.save().then(
                                result => {
                                    res.status(201).send({ status: "accepted", refNumber: history.reference_number})
                                }
                            ).catch(
                                error => {
                                    res.status(400).send(error)
                                }
                            )
                            
                        })
                    }).catch(error => {
                        res.status(400).send(error)
                    })
                }).catch(error => {
                    res.status(400).send(error)
                })
            }else{
                res.status(404).send({status: "rejected", errorDescription: "Can't transfer within the same accounts!"})
            }
        }
    }catch(ex){
        res.status(500).send(ex)
    }
})

module.exports = router