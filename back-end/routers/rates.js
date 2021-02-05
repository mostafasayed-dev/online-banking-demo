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