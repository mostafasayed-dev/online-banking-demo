const express = require('express')
const Rim = require('../models/rim')

const router = express.Router()

router.post("", async (req, res) => {
    const rim = new Rim({
        ...req.body
    })

    try{
        await rim.save()
        res.status(201).send(rim)
    }catch(ex){
        res.status(400).send(ex)
    }
})

// get rim by rim_no
router.get("/:rim_no", async (req, res) => {
    try{
        const rim = await Rim.findOne({rim_no: req.params.rim_no})
        if(rim){
            res.status(200).send(rim)
        }else{
            res.status(404).send({error: "rim not found"})
        }
    }catch(ex){
        res.status(400).send(ex)
    }
})

module.exports = router;