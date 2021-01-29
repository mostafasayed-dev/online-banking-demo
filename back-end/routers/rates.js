const express = require('express')
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
        res.status(400).send(ex)
    }
})

router.get("/:currency", async (req, res) => {
    try{
        const rate = await Rates.findOne({currency: req.params.currency})
        if(rate){
            res.status(200).send(rate)
        }else{
            res.status(404).send("This currency rate not found!")
        }
    }catch(ex){
        res.status(400).send(ex)
    }
})

module.exports = router;