const express = require('express')
const auth = require('../middleware/auth')
const Rates = require('../models/rates')

const router = express.Router()

router.post("", async (req, res) => {
    const rates = new Rates({
        ...req.body
    })

    try{
        await rates.save()
        res.status(201).send(rates)
    }catch(ex){
        res.status(500).send(ex)
    }
})

router.get("", auth, async (req, res) => {
    try{
        const rates = await Rates.find()
                                 .sort({currency: 1});
        if(rates){
            res.status(200).send(rates)
        }else{
            res.status(404).send("Rates unavailable!")
        }
    }catch(ex){
        res.status(500).send(ex)
    }
})

router.get("/foreigntoforeign", auth, async (req, res) => {
    try{
        const fromForeignCurrency = req.query.from_foreign_currency;
        const toForeignCurrency = req.query.to_foreign_currency;
        const foreignAmount =  +req.query.amount;
    
        if(!fromForeignCurrency){
            return res.status(400).send({errorDescription: "from_foreign_currency is missed from request body!"})
        }
        else if(!toForeignCurrency){
            return res.status(400).send({errorDescription: "to_foreign_currency is missed from request body!"})
        }
        else if(!foreignAmount){
            return res.status(400).send({errorDescription: "amount is missed from request body!"})
        }
        else{
            let convertedAmount = 0;
            // foreign to local
            const fromForeign = await Rates.findOne({currency: fromForeignCurrency});
            if(fromForeign){
                convertedAmount = foreignAmount * fromForeign.buy_rate;
            }
            else{
                return res.status(400).send({errorDescription: "invalid from currency!"})
            }
    
            // local to foreign
            const toForeign = await Rates.findOne({currency: toForeignCurrency});
            if(toForeign){
                convertedAmount = convertedAmount / toForeign.sell_rate;
            }
            else{
                return res.status(400).send({errorDescription: "invalid to currency!"})
            }
            res.status(200).send({from_currency: fromForeignCurrency, to_currency: toForeignCurrency, converted_amount: convertedAmount})
        }
    }
    catch(ex){
        res.status(500).send(ex)
    }
})

router.get("/:currency", auth, async (req, res) => {
    try{
        const rate = await Rates.findOne({currency: req.params.currency})
        if(rate){
            res.status(200).send(rate)
        }else{
            res.status(404).send("This currency rate not found!")
        }
    }catch(ex){
        res.status(500).send(ex)
    }
})

router.patch("/:currency", async (req, res) => {
    try{
        const rate = await Rates.findOneAndUpdate(
                                {currency: req.params.currency},
                                {buy_rate: req.body.buy_rate, sell_rate: req.body.sell_rate});
        if(rate){
            res.status(200).send(rate)
        }else{
            res.status(404).send("This currency rate not found!")
        }

    }catch(ex){
        res.status(500).send(ex)
    }
})

module.exports = router;